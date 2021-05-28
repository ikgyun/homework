const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const {sequelize} = require('./models')
const app = express();
const routers = require('/routers')

app.use('/',routers);
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'html');
nunjucks.configure('views',{
    express:app,
})


sequelize.sync({force:false})
.then(()=>{
    console.log('접속 성공')
}).catch(()=>{
    console.log('접속 실패')
})



app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/login_success',(req,res)=>{
    res.render('login_success');
})

app.get('/join',(req,res)=>{
    res.render('join');
})

app.get('/join_success',(req,res)=>{
    res.render('join_success');
})

app.listen(3000,()=>{
    console.log('sever start port:3000');
})