const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express();

app.use(express.json())
app.use(cors())

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'ae3a2ea3b8b54bee8b5d248594a7c759',
  captureUncaught: true,
  captureUnhandledRejections: true,
})



app.get('/',(req,res)=>{
    try{
        add(9,4,2)
    }catch{
        rollbar.error("Add function does not exist")
    }
    res.sendFile(path.join(__dirname,'./client/index.html'))
    
})

app.get('/css',(req,res)=>{
    res.sendFile(path.join(__dirname,'./client/index.css'))
    rollbar.critical("THE CSS IS JUST TOO STYLING!!!!")
})
app.get('/js',(req,res)=>{
    res.sendFile(path.join(__dirname,'./client/client.js'))
    rollbar.warning('There is a snake in my boot')
})

app.use('/css',express.static(path.join(__dirname,'./client/index.css')))
app.use('/js',express.static(path.join(__dirname, './client/client.js')))
app.use('/newDiv',(req,res)=>{
    rollbar.log("Added Div!")
})
//Rollbar message

// app.get('/add',(req,res)=>{
//     try{
//         add(3,6,9)
//     } catch(error){
//         console.error(error)
//         rollbar.error(error)
//     }
// })


// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


app.use(rollbar.errorHandler())

const PORT = process.env.PORT|| 4000
app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`)
})