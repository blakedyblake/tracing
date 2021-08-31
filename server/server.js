const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express();

app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../client/index.html'))
})

app.get('/css',(req,res)=>{
    res.sendFile(path.join(__dirname,'../client/index.css'))
})

app.use('/css',express.static(path.join(__dirname,'../client/index.css')))

const PORT = process.env.PORT|| 4000
app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`)
})