
const express = require('express')
const app = express()
const connectString = 'mongodb+srv://markklocek:Lolwat123@cluster0.yd0mb8o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const MongoClient = require('mongodb').MongoClient
app.set('view engine','ejs')

MongoClient.connect(connectString)
    .then( client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')
    app.use(express.urlencoded({extended:true}))


    app.listen(8000,function(){
        console.log('listening on 8000')
    })
    app.get('/',(req,res)=>{
        //res.sendFile(__dirname+'/index.html')
        db.collection('quotes')
            .find()
            .toArray()
            .then(results =>{
                res.render('index.ejs',{quotes:results})
                console.log(results)
            })
            .catch(err=>console.error(err))
        //res.render('index.ejs',{})
    })
    app.post('/quotes',(req,res)=>{
        quotesCollection
            .insertOne(req.body)
            .then(response => {
                console.log(response)
                res.redirect('/')
            })
            .catch(err=>console.error(err))
    })
    
    }
)
    .catch(err=>console.error(err))


