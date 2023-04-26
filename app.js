const express = require('express');
const app = express();
const exp = require('./index')
const port = 3006;

app.use(exp);

app.listen(port, ()=>{
    console.log('server berhasil berjalan di http://localhost:3006')
});