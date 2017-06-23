const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT|| 999;

var app = express();

hbs.registerPartials(__dirname +'/views/shared');
app.set('view engine', 'hbs');

app.use((req,res,next)=>{
    var now = new Date().toString();
    console.log(now);
    next();
});

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});

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
    pageTitle: 'Home Page',
    WelcomeMessage:'Welcome to Home Page'    
    });
});
app.get('/project', (req,res)=>{   
    res.render('project.hbs',{
    pageTitle: 'Project Page',
    WelcomeMessage:'Welcome to Project Page'   
    });
});

app.listen(port,()=>
{
console.log(`Server is up on port ${port}`);
});