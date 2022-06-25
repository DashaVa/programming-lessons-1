const fs = require('fs');
const http = require('http');
const url = require('url');
const express = require('express');
const app = express;
const PORT = process.env.PORT || 3000;
if(request)
app.get('/',(req,res)=>{
    res.send('HI')
})
app.use((req,res,next)=>{
    fs.writeFile("login.txt", req.url,function(err){
        if(err) return console.log(err);
        console.log('success');
        next();

    });
});
 app.listen(PORT,()=>{
     console.log("Big Brain Time");
 })






 const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if (request.url === "/requests" || request.url === "/") {
        let content = fs.readFileSync("3.jpg");
        response.writeHead(200, {
            'Content-Type': 'image/jpeg'
        })