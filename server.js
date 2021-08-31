const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express();

app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./client/index.html'))
})

app.get('/css',(req,res)=>{
    res.sendFile(path.join(__dirname,'./client/index.css'))
})
app.get('/js',(req,res)=>{
    res.sendFile(path.join(__dirname,'./client/client.js'))
})

app.use('/css',express.static(path.join(__dirname,'./client/index.css')))
app.use('/js',express.static(path.join(__dirname, './client/client.js')))

//Rollbar message
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'ae3a2ea3b8b54bee8b5d248594a7c759',
  captureUncaught: true,
  captureUnhandledRejections: true,
})
app.get('/add',(req,res)=>{
    try{
        add(3,6,9)
    } catch(error){
        console.error(error)
    }
})


// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


const PORT = process.env.PORT|| 4000
app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`)
})