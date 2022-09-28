const { json } = require('body-parser');
const express = require('express')
const cors = require('cors')
const app = express();



app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express(json))
app.use('/',require('./router'))
app.use(cors({
    origin: " http://127.0.0.1:5173"
}))

app.listen(4000, ()=>{
    console.log("escuchando en el puerto")
})
