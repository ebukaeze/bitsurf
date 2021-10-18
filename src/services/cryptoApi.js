import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders ={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'cbe900c41dmsh7c5689b3286f112p168ecajsn19e9ed0f899b',
}


const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
            getCryptos: builder.query({
                query: (count) => createRequest(`/coins?limit=${count}`),
            })
        })
    });

    export const {
        useGetCryptosQuery,
    } = cryptoApi;







/* var options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/stats',
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'cbe900c41dmsh7c5689b3286f112p168ecajsn19e9ed0f899b'
  }
}; */