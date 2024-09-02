import React, {useContext, useState} from 'react'
import './Sidebar.css'
import { assets } from '../../../assets/assets'
// import { Context } from '../../../Context/context'
import Home from '../../Home/Home'

const Sidebar = () => {
    const [extended, setExtended] = useState(false)
   

  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={Home} className='menu medIcon' src={assets.medicAid_icon} alt=""/>
            <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
           
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended?<p>History</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended?<p>Setting</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar