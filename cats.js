var fetch = require ('node-fetch');
const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');
async function downloadIBB(pageUrl, folder){
  const res = await fetch(pageUrl);
  const page = await res.text();
  const $ = cheerio.load(page);
  const imgUrl = $('link[rel="image_src"]').attr('href');
  const filename = path.basename(imgUrl);
  const filepath = path.join(folder,filename);
  const imgRes = await fetch(imgUrl);
  return new Promise(res=>{
    filestream = fs.createWriteStream(filepath);
    imgRes.body.pipe(filestream);
    filestream.on('finish',()=>res(filepath));
  });
}
downloadIBB(' https://http.cat','/tmp')
   .then((path)=>console.log(path))
   .catch(err=>console.error(err));