import React, {useState} from 'react'
import {Button, Layout, theme} from 'antd'
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'
import Logo from './Logo';
import './Navigation.css'
import MenuList from './MenuList';
import ToggleButton from './ToggleButton';
import { assets } from '../../assets/assets';



const {Header, Sider} = Layout;
const Navigation = () => {
    const [darkTheme, setDarkTheme] = useState(true);
    const [collapsed, setCollapsed] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    const {
        token: {colorBgContainer}
    }  = theme.useToken();

  return (
    <>
    <Layout>
        <Sider collapsed={collapsed} collapsible trigger={null} theme={darkTheme ? 'dark' : 'light'} className=' navbar'>
            <Logo/>
            <MenuList darkTheme={darkTheme}/>
            <ToggleButton darkTheme={darkTheme} toggleTheme={toggleTheme}/>
        </Sider>
        <Layout>
            <Header style={{padding: 0, background: colorBgContainer }} className='header'>
                <Button type='text' className='toggle' onClick={() => setCollapsed(!collapsed)} icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>} />
                <div className="header-title">
                    <p>MedicAid🩺</p>
                    {/* <p>From Query to Cure, We make Health Secure</p> */}
                </div>
                
            </Header>
        </Layout>
    </Layout>
    </>
  )
}

export default Navigation