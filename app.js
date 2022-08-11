const handlebars = require("handlebars");
const db=require("./db");

db.query('select * from template').then(res=>{
    const body=res[0].templateBody;
    const compiled= handlebars.compile(body);
    const result=compiled({name: "Lin Gash"});
    const parsed=JSON.parse(result);
    const replaced = parsed.body.replace(/[``]+/g, '"');
    console.log(replaced)
})