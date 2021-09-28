import React from 'react';
import logo from '../assets/images/logo1.png';

import { Link } from 'react-router-dom';
import {Button, Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons'


function Navbar() {
    return (
        <nav className="nav">
            <div className="navbar-container">
                <div className="logo-container">
                    <Link to="/">
                    <Avatar src={logo} size="large"/></Link>
                    
                </div>
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
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
            </div>
            
        </nav>
    )
}

export default Navbar;
