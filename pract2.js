const fs = require('fs');
const Path = require('path');  
const axios = require('axios');
const http = require('http');
const express = require('express');
const app = express();


axios.get('https://jsonplaceholder.typicode.com/todos') 
.then (res=> {
    const json= JSON.stringify(res.data);
    
    fs.writeFile('code.json',json,(err)=>{
            if (err) return reject(err);
            console.log('wrote');
            let arr = JSON.parse(json)
            console.log(typeof(arr));
            console.log(arr[5]);
            app.set('port', process.env.PORT || 3000);
            
   app.use(function (req, res) {
    
      res.type('text/plain');
        res.send(arr[5]);
    });
    app.listen(app.get('port'), function () {
        console.log('Express запущен на http://localhost:' +
            app.get('port') + '; нажмите Ctrl+C для завершения.');
    });
            return arr;
        
    })
        })
            

    


        //var string = JSON.stringify(arr[5])
//const requestHandler = (request, response) => {
  //  response.setHeader("Content-Type", "text/html; charset=utf-8;");
    //var adress = request.url;
    //var number = adress.split().reverse[0];
   
    
    //if (request.url === adress.split || request.url === "/") {
      //  response.write(string);
        //fs.appendFileSync("hello.txt","переход в home\n");
    //} else if (request.url == "/about") {
      //  response.write("<h2>About</h2>");
        //fs.appendFileSync("hello.txt","переход в about\n");
    //}else {
      //  response.write("<h2>Not found</h2>");
    //}
    //response.end();

//http.createServer(requestHandler).listen(3000); 

.catch(e => console.error(e))