const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'crud'
})

conexion.connect((error)=>
{
    if(error){
        console.log("Error en la conexion");
        return;
    }
    console.log("Base de datos conectada");
})
module.exports = conexion;