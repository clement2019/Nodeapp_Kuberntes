const express = require('express');
const app =express();
const port=process.env.PORT || 3000
app.get('/',(req, res)=>{
    res.send('<h1>Exppress Demo App By Ayeni clement</h1> <h4> Message: Success</h4> <p>version 1.0</p>');
})


app.listen(port, ()=> {
console.log('Node js server is ruuning and listening to port: 3000');
}) 