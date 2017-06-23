const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT|| 999;

var app = express();

hbs.registerPartials(__dirname +'/views/shared');
app.set('view engine', 'hbs');

app.get('/', (req,res)=>{
    //res.send('hi welcome');
    /*res.send({
        name:'venmathi',
        likes:[
            'dancing',
            'cleaning'
        ]
    });
*/
res.render('index.hbs',{
pageTitle: 'Home page',
currentYear: new Date().getFullYear()
});

});

app.listen(port,()=>
{
console.log(`Server is up on port ${port}`);
});