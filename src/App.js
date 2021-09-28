import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import {Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Cryptocurrencies, HomePage, News, CryptoDetails } from './components/index';

function App() {
  return (
    <div className="App">
    
     <div className="navbar">
        <Navbar />
     </div>

     <div className="main">
       <Layout>
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
       </Layout>

     </div>

     <div className="footer">
       <Space>
         <Typography.Title level={3}></Typography.Title>
       </Space>
     </div>
    </div>
  );
}

export default App;
