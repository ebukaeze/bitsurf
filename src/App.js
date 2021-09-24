import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import {Layout, Typography, Space } from 'antd';

import { Navbar } from './components/index';

function App() {
  return (
    <div className="App">
     <h1> Hello Bitsurfers</h1>
     <div className="navbar">
        <Navbar />
     </div>

     <div className="main">

     </div>

     <div className="footer"></div>
    </div>
  );
}

export default App;
