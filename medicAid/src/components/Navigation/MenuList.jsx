import { Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
import { CheckCircleOutlined, HomeOutlined, BellOutlined, OpenAIOutlined, SettingOutlined, 
    SaveOutlined,  ProductOutlined, ProfileOutlined,  PictureOutlined, PayCircleOutlined,
    BarsOutlined, CaretUpOutlined } from '@ant-design/icons'

const MenuList = ({ darkTheme }) => {
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} className='menu-bar' >     {/* mode='inline' */}
        <Menu.Item key="home" icon={<HomeOutlined/>}>
            <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="medicaid-pharma" icon={<ProductOutlined/>}>
            <Link to="/Pharmacy">MedicAid Pharma</Link>
        </Menu.Item>

        <Menu.Item key="medicaid-ai" icon={<OpenAIOutlined/>}>
            <Link to="/medicAidAI">MedicAid AI</Link>
        </Menu.Item>

        <Menu.SubMenu key="appointments" icon={<BarsOutlined/>} title="Appointments">

            <Menu.SubMenu  key="online-app" icon={<BellOutlined/>} title="Online Appointments">
                <Menu.Item key="payments" icon={<PayCircleOutlined/>}>Payments</Menu.Item>
            </Menu.SubMenu>    

            <Menu.SubMenu key="follow-app" icon={<CaretUpOutlined/>} title="Follow up Appointments">
                <Menu.Item key="payments" icon={<PayCircleOutlined/>}>Payments</Menu.Item>
            </Menu.SubMenu>  

        </Menu.SubMenu>

        <Menu.Item key="search-doctors" icon={<CheckCircleOutlined/>}>
             Search Doctors
        </Menu.Item>

        <Menu.Item key="prescription" icon={<ProfileOutlined/>}>
            Prescription
        </Menu.Item>

        <Menu.Item key="profile" icon={<PictureOutlined/>}>
            Profile
        </Menu.Item>

        <Menu.Item key="settings" icon={<SettingOutlined/>}>
            Settings
        </Menu.Item>
    </Menu>
  )
}

export default MenuList