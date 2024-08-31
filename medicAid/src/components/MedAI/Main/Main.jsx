import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../../assets/assets'
import { Context } from '../../../Context/context'
// import ImageUpload from '../../../config/ImageAnalysis'
// import run from '../../../config/gemini'


const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  return (
    <div className="main">
        <div className="nav">
            <p>MedicAid AI</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

            {!showResult
                ?<>
                    <div className="greet">
                        <p><span>Hello!</span></p>
                        <p>How can I help you?</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p onClick={()=>onSent()} > What features can MedicAid AI provide you with ?</p>
                            <img src={assets.question_icon} alt="" />
                        </div>
                        <div className="card">
                            <p onClick={()=>onSent()} >How MedicAid AI will generate response against user's input?</p>
                            <img src={assets.code_icon} alt="" />
                        </div>
                        <div className="card">
                            <p onClick={()=>onSent()} >How can MedicAid AI help you manage your good health?</p>
                            <img src={assets.bulb_icon} alt="" />
                        </div>
                    </div>
                </>
                :<div className='result'>
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.medicAid_icon} alt="" /> 
                        {loading                                            //ternary operator
                        ?<div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                        
                    </div>
                </div>
            }
            
            

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter your prompt here' name='prompt' />
                    <div>
                        <input type="file" id="fileInput" name="file"></input>
                        {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null} 
                    </div>
                </div>
                <p className="bottom-info">
                    MedicAid AI may display inaccurate info sometimes, so double check its responses. Your privacy and MedicAid Apps
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main

// What should I do if I'm experiencing [symptom]?"
// "Can you explain the possible side effects of [medication]?"
// "What lifestyle changes can help manage my condition?"
// "When should I seek immediate medical attention for [condition]?"