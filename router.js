const express = require('express')
const router = express.Router()
const conexion = require('./database/cnfgDtbs');

//Ruta para extraer todo los datos de la base de datos
router.get('/dashboard', (req, res) => {

    conexion.query('SELECT * FROM alumno', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('dashboard', { results: results });
        }
    })
})

// Ruta para crear
const crud = require('./controller/crud')
router.post('/save', crud.save)
router.get('/crear', (req, res) => {
    res.render('create')
})

// Ruta para editar
router.post('/update', crud.update)
router.get('/editar/:id', (req, res) => {
    const id = req.params.id;

    conexion.query('SELECT * FROM alumno WHERE id = ?',[id],(error,results)=>
    {
        if(error) throw error
        else res.render('edit',{user:results[0]})
    })
    
})

// Ruta para eliminar
router.get('/eliminar/:id', (req, res) => {
    const id = req.params.id;

    conexion.query('DELETE FROM alumno WHERE id = ?',[id],(error,results)=>
    {
        if(error) throw error
        else res.redirect('/dashboard')
    })
    
})
module.exports = router;
