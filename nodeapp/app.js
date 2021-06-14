const express = require('express')
const app = express()
// const jwt = require('jsonwebtoken')
var bodyParser = require('body-parser')
// var fs = require('fs');
const router = require('./router/api')
const mongoose = require('mongoose')
const dotnev = require('dotenv')
dotnev.config()

// const connectionParams = {
//     newUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     keepAlive: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// }
// mongoose.connect(process.env.DB_CONNECT, connectionParams)
//     .then(() => {
//         console.log('mongoDB connect!')
//     })
//     .catch((err) => {
//         console.log({ error: err })
//     })

    const connectionParams={
        newUrlParser:true,
        useCreateIndex:true,
        useUnifiendTopology:true
     }
     mongoose.connect(process.env.DB_CONNECT, connectionParams )
     .then(() => {
         console.log("connected to db");
     })
     .catch((err) => {
         console.log(`error connecting,${err}`);
     })
app.use(bodyParser.json())
app.use((req, res, next) => {
    console.log('on middlware', req.method)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methodes", "PUT, POST, PATCH ,DELETE, GET, delete");

        return res.status(200).json({});
    }
    next();
});
// app.use(express.json())

// app.use('/',function(req,res,next)
// {
//     console.log("bla");
//     if(!req.path.startsWith('/loginUser') && req.path!=='/createUser'){
//         try {
//             jwt.verify(req.headers['authorization',process.env.SECRET])
//             next()
//         } catch (error) {
//             console.log(error);
//             res.send('not login')
//         }
//     }
//     else
//     next()
// })


 app.use('/', router)

app.listen(3003, () => {
    console.log("app listen port 3003")
})