import React, {useState, useEffect} from 'react';

import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import {Layout, Typography, Space, Button } from 'antd';

import { Navbar, Exchanges, Cryptocurrencies, HomePage, News, CryptoDetails } from './components/index';
import { NodeCollapseOutlined, MenuOutlined } from '@ant-design/icons';

const {Header, Sider, Content, Footer} = Layout;

function App() {
  
    
  return (
     <div className="App">
    
        
     <div className="navbar">
       
        <Navbar />
     </div>
     <div className="main">
       <Layout>
         {/* <Header className="site-layout-background" style={{padding: 0, width: "100%", background:"#fff"}}/> */}
         <div className="routes">
           <Switch>
             <Route exact path="/">
               <HomePage/>
             </Route>
             <Route exact path="/cryptocurrencies">
               <Cryptocurrencies/>
               </Route>
               <Route exact path="/crypto/:coinId">
               <CryptoDetails/>
              </Route>
             
             <Route exact path="/exchanges">
               <Exchanges/>
                </Route>
               <Route exact path="/news">
               <News/>
              </Route>
              
            
           </Switch>
         </div>
  
         <Footer style={{textAlign: 'center'}}>
             <div className="footer">
       
         <Typography.Title level={3} style={{color: "white", textAlign: "center"}}>
           Bitsurf<br/>
           All rights reserved
         </Typography.Title>
         <Space>
           <Link to="/">Home</Link>
           <Link to="/cryptocurrencies">Cryptocurrencies</Link>
           <Link to="/exchanges">Exchanges</Link>
           <Link to="/news">News</Link>

       </Space>
     </div>
         </Footer>
      </Layout>
      

     </div>

    
   
     </div>
  );
}

export default App;
