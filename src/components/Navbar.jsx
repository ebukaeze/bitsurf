import React, {useState, useEffect} from 'react';
import logo from '../assets/images/bitlogo.png';

import { Link } from 'react-router-dom';
import {Button, Menu, Typography, Avatar, Layout } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons'

function Navbar() {
    const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

    
    return (
        
        <div className="nav">
            <div className="nav-container">
                <div className="logo-container">
                    <Link to="/">
                    <Avatar src={logo} size="large" className="logo"/>
                    <Typography.Title level={3} className="logo-title"><Link to="/">Bitsurf</Link></Typography.Title>
                    </Link>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>

                </div>
                { activeMenu && (
                <Menu theme="dark" className="menu">
                    <Menu.Item icon={<HomeOutlined/>}>
                        <Link to="/" >Home</Link>
                    </Menu.Item>
                     <Menu.Item icon={<FundOutlined />}>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </Menu.Item>
                     <Menu.Item icon={<MoneyCollectOutlined />}>
                        <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item>
                     <Menu.Item icon={<BulbOutlined />}>
                        <Link to="/news">News</Link>
                    </Menu.Item>

                </Menu>
                )}
            </div>
           
        </div>
      
    )
}

export default Navbar;
