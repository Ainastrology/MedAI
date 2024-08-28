import React from 'react'
import './Main.css'
import { assets } from '../../../assets/assets'


const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>MedicAid AI</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello!</span></p>
                <p>How can I help you?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>What should I do if I'm experiencing migraine?</p>
                    <img src={assets.question_icon} alt="" />
                </div>
                <div className="card">
                    <p>Can you explain the possible side effects of aspirin?</p>
                    <img src={assets.code_icon} alt="" />
                </div>
                <div className="card">
                    <p>What lifestyle changes can help manage my good health?</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>When should I seek immediate medical attention for constant migraine attacks?</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter your prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
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