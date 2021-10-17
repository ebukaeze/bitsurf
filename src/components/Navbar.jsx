import React from 'react';
import logo from '../assets/images/logo1.png';

import { Link } from 'react-router-dom';
import {Button, Menu, Typography, Avatar, Layout } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons'

function Navbar() {
    
    return (
        
        <div className="nav">
            <div className="navbar-container">
                <div className="logo-container">
                    <Link to="/">
                    <div ><img src={logo} alt="logo" className="logo"/></div>
                    </Link>
                    {/* <Button className="menu-control-container"></Button> */}
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
           
        </div>
      
    )
}

export default Navbar;
