import React, {useState} from 'react';
import {Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import Loader from './Loader';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Title, Text } = Typography;
const { Option } = Select;

function truncate(str, n){
    return str?.length  > n ? str.substr(0, n - 1) + "..." : str;
}
const demoImage = "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data } = useGetCryptosQuery(100)
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12})
    

    if(!cryptoNews?.value) return <Loader/>
    return (
        <>
        <Row gutter={[24, 24]} className="row-grid">
            {!simplified && (
                <Col span={24}>
                    <Select
                    showSearch
                    className="select-news"
                    placeholder="Select a Crypto"
                    optionFilterProp="children"
                    onChange={(value) => setNewsCategory(value)}
                    filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                   <Option value="Cryptocurrency">Cryptocurrency</Option>
                      {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
                   
                    </Select>
                </Col>
            )}
            {cryptoNews.value.map((news, i) => (
                <Col xs={24} sm={12} lg={6} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{truncate(news.name.toString(), 50)}</Title>
                           <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="crypto-image" className="img"/>
                            </div>
                           <p>
                               {truncate(news.description, 100)}
                           </p>
                           <div className="provider-container">
                               <div>
                                   <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt=""/>
                                   <Text className="provider-name"> {news.provider[0]?.name}</Text>
                                   
                               </div>
                               <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                           </div>
                           
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
         
        </>
    )
}

export default News;
