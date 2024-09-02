import React from 'react';
import { assets } from '../../assets/assets';
import './Navigation.css';

const Logo = () => {
  return (
    <div className='logo'>
        <div className="logo-icon">
            <img src={assets.medicAid_icon} alt=''/>
        </div>
    </div>
  );
};

export default Logo;