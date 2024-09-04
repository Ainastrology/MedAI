import { createContext, useState } from "react";
// import run from "../config/ImageAnalysis";
import run from "../config/gemini";


export const Context = createContext();
export const UserContext = createContext({isAuthenticated: false});

const ContextProvider = (props) => {

    const [input , setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev => prev + nextWord);
        }, 75*index)
    }

    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }

    const onSent = async  () => {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        setPrevPrompts(prev => [...prev, input])
        const response = await run(input)
        let responseArray = response.split("**");
        let newResponse="";
        for(let i = 0; i < responseArray.length; i++)
        {
            if(i === 0 || i%2 !== 1)
            {
                newResponse += responseArray[i];
            }
            else
            {
                newResponse += "</br><b>"+responseArray[i]+"</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>");
        // setResultData(newResponse2)
        let newResponseArray = newResponse2.split(" ");
        for(let i= 0; i < newResponseArray.length; i++)
        {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord + " ")
        }
        setLoading(false)
        setInput("")
        // await run(prompt)
    }

// onSent("what is react js");

    const contextValue = {
        prevPrompts,
        setPrevPrompts, 
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat

    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;

export const UserContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};