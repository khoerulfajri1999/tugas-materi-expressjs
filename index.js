const express = require("express");
const exp = express();

exp.get('/', (req, res)=>{
    res.sendFile('./index.html', {root: __dirname});
});

exp.get('/link', (req, res)=>{
    res.sendFile('./Link.html', {root: __dirname});
});

exp.get('/about', (req, res)=>{
    res.sendFile('./About.html', {root: __dirname});
});

module.exports = exp;