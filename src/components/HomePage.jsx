import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import Loader from './Loader';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '.';

import {PieChartTwoTone, StockOutlined, BarChartOutlined, FundOutlined, DollarCircleTwoTone} from '@ant-design/icons';

const { Title } = Typography; 

const HomePage = () => {
    const {data, isFetching } = useGetCryptosQuery(10);
    
    const globalStats = data?.data?.stats;
    
    if (isFetching) return <Loader />;
    console.log(data);

    const minWidth = window.innerWidth;
    return (
       <>
       <Title level={2} className="heading">
           Global Crypto Stats
       </Title>
    
       <Row className="grid">
           <Col xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 0 }} className="grid-card"><PieChartTwoTone style={{  color: "#db6221",}} className="col-icon"/><Statistic title="Total Cryptocurrencies" value={globalStats.total} valueStyle={{ fontWeight: 600}}/></Col>
           <Col xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 1 }} className="grid-card"><BarChartOutlined style={{  color: "#14f58f",}} className="col-icon"/><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} valueStyle={{ fontWeight: 600}}/></Col>
           <Col xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 1 }} className="grid-card"><StockOutlined style={{  color: "#db216b",}} className="col-icon"/><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} valueStyle={{ fontWeight: 600}}/></Col>
           <Col xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 0 }} className="grid-card"><FundOutlined style={{  color: "#14f58f",}} className="col-icon"/><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} valueStyle={{ fontWeight: 600}}/></Col>
           <Col xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 1 }} className="grid-card"><DollarCircleTwoTone style={{  color: "#21bfdb",}} className="col-icon"/><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} valueStyle={{ fontWeight: 600}}/></Col>
       </Row>
      
       {minWidth < 900 ?
       <div className="home-heading-container">
           <Title level={3} className="home-title">Top 10 Cryptocurrencies in the World</Title>
           <Title level={4} className="show-more"><Link to="/cryptocurrencies">show more</Link></Title>
       </div>
       
    : 
    <div className="home-heading-container">
           <Title level={2} className="home-title">Top 10 Cryptocurrencies in the World</Title>
           <Title level={3} className="show-more"><Link to="/cryptocurrencies">show more</Link></Title>
       </div>
    }
       <Cryptocurrencies simplified/>
       <div className="home-heading-container">
           <Title level={2} className="home-title">Latest Crypto News</Title>
           <Title level={3} className="show-more"><Link to="/news">show more</Link></Title>
       </div>
       <News simplified/>
       </>
    )
}

export default HomePage
