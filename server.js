//create a middleware proxy server for cross origin requests

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(
    '/graphql',
    createProxyMiddleware({
        target: 'https://leetcode.com',
        changeOrigin: true,
    })
);

app.listen(3001);
