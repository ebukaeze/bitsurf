import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders ={
    'x-rapidapi-host':  process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
}


const baseUrl = process.env.REACT_APP_CRYPTO_API_URL;

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
            getCryptos: builder.query({
                query: (count) => createRequest(`/coins?limit=${count}`),
            }),
            getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
     getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
            getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
         }),
        }),
    });

    export const {
        useGetCryptosQuery, useGetCryptoDetailsQuery, useGetExchangesQuery, useGetCryptoHistoryQuery
    } = cryptoApi;







/* var options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/stats',
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'cbe900c41dmsh7c5689b3286f112p168ecajsn19e9ed0f899b'
  }
}; */