import React, {useState} from 'react';

import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import {Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Cryptocurrencies, HomePage, News, CryptoDetails } from './components/index';

const {Header, Sider, Content, Footer} = Layout;

function App() {
  const [ collapsed, setCollapse ] = useState(false);

    const onCollapse = () => setCollapse(!collapsed);
  return (
     <div className="App">
    <Layout style={{minHeight: "100vh", width: "100%"}}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
   
    
     <div className="navbar">
        <Navbar />
     </div>
     </Sider>
     <div className="main">
       <Layout className="site-layout">
         {/* <Header className="site-layout-background" style={{padding: 0, width: "100%", background:"#fff"}}/> */}
         <Content className="site-layout-background" style={{width: "100%", margin: "24px 16px", padding: 24, background: "#fff"}} >
         <div className="routes">
           <Switch>
             <Route exact path="/">
               <HomePage/>
             </Route>
             <Route exact path="/cryptocurrencies">
               <Cryptocurrencies/>
               </Route>
               <Route exact path="/crypto:coinId">
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
         </Content>
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

    
   
    </Layout>
     </div>
  );
}

export default App;
