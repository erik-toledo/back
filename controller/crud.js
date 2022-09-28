const conexion = require('../database/cnfgDtbs')
exports.save = (req,res)=>{
    const nombre = req.body.nombre;
    console.log(req.body);
    const apellidos = req.body.apellidos
    conexion.query('INSERT INTO alumno SET ?',{nombre:nombre,apellidos:apellidos},(error)=>
    {
        if(error){
            console.log(error);
        }else{
            res.send('200 OK')
        }

    })
}
exports.update = (req,res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos
    conexion.query('UPDATE alumno SET ? WHERE id = ?',[{nombre:nombre,apellidos:apellidos},id],(error)=>
    {
        if(error){
            console.log(error);
        }else{
            res.redirect('/dashboard')
        }

    })
}