const fs = require('fs');
const Path = require('path');  
const axios = require('axios');
const http = require('http');
const fetch = require('node-fetch');
const express = require('express');
const app = express();
for (var x=100; x<600; x++){
let url = 'https://http.cat/'+x+'.jpg'
let request = fetch(url);
request
.then(request=>{
  if (request.ok){
    axios.get(url,{responseType: 'arraybuffer'}) 
  .then (res=> {
    
    const pict = res.data;
    
    //fs.mkdir('cats'+x, err =>{
      //if (err) throw err;
      //console.log('Папка создана');
      fs.writeFile('picture'+x+'.jpg',pict,(err)=>{
        if (err) throw err;
        console.log('well done');
    });
  })
  }else{
    console.log('Ccылка '+url+' не существует')
  }
})
.catch(error=>{
  console.log(error)
})
  //const pict = res.data;
  
  //fs.mkdir('cats'+x, err =>{
    //if (err) throw err;
    //console.log('Папка создана');
    //fs.writeFile('picture'+x+'.jpg',pict,(err)=>{
      //if (err) return reject(err);
      //console.log('well done');
  //});
//})
//.catch(err=>{
  //console.error(err)
//})
//})
}
