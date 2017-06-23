const express = require('express');
const hbs = require('hbs');

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

app.listen(999,()=>
{
console.log('Server is up on port 999');
});