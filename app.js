const express = require('express');
const handlebars = require("handlebars");
const db=require("./db");
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3009,()=> console.log("Listening from 3009..."));

db.query('select * from template').then(res=>{
  console.log(`res`)
  console.log(res)
    const body=res[0].templateBody;
    const compiled= handlebars.compile(body);
    const result=compiled({name: "Lin Gash"});
    const parsed=JSON.parse(result);
    const replaced = parsed.body.replace(/[``]+/g, '"');
    console.log(replaced)
})