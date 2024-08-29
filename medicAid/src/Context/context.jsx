import { createContext, useState } from "react";
// import run from "../config/ImageAnalysis";
import run from "../config/gemini";


export const Context = createContext();


// const system_prompt = `
//         As a highly skilled medical practitioner specializing in image analysis, you are tasked with examining the medical images for a renowned hospital. Your expertise is crucial in identifying any anomalies, diseases, or health issues that may be present in the images.

//         Your responsibilities include:
//         1. Detailed Analysis: Thoroughly analyze each image, focusing on identifying any abnormal findings.
//         2. Findings Reports: Document all observed anomalies or signs of disease. Clearly articulate these findings in a structured format.
//         3. Recommendations and Next Steps: Based on your analysis, suggest potential next steps, including further tests or treatments as applicable.
//         4. Treatment Suggestions: If appropriate, recommend possible treatment options or interventions.

//         Important Notes:
//         1. Scope of Response: Only respond if the image pertains to human health issues.
//         2. Clarity of Image: In cases where the image quality impedes clear analysis, note that certain aspects are 'Unable to be determined based on the provided image.'
//         3. Disclaimer: Accompany your analysis with the disclaimer: "Consult with a Doctor before making any decisions."

//         Your insights are invaluable in guiding clinical decisions. Please proceed with the analysis, adhering to the structured approach outlined above.

//         Please note that this is an automated system and may not be 100% accurate. Please review the findings and recommendations carefully.
//     `

const ContextProvider = (props) => {

    const [input , setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("")


const onSent = async  (prompt) => {
    setResultData("")
    setLoading(true)
    setShowResult(true)
    setRecentPrompt(input)
    const response = await run(input)
    setResultData(response)
    setLoading(false)
    setInput("")
    // await run(prompt)
}

const onUpload = async (img) => {
    <form>
        <fieldset>
            <input name="image" type="file" accept=".jpeg, .jpg, .png"></input>
        </fieldset>
    </form>
}
// onSent("what is react js");

    const contextValue = {
        prevPrompts,
        setPrevPrompts, 
        onSent,
        onUpload,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput

    }


    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;