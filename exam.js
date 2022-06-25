const fs = require("fs");
const http = require("http");
const url = require('url');
const express = require('express');
const app=express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Сижу на экзамене, отдыхаю')
  })
app.use((req,res,next)=>{
    console.log(req.url);
    fs.writeFile('logi.txt', req.url, function (err) {
        if (err) return console.log(err);
        console.log('file has created');
    next();

});
});

app.listen(PORT, ()=>{
    console.log("well done");
})