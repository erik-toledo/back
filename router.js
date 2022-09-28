const express = require('express')
const router = express.Router()
const conexion = require('./database/cnfgDtbs');

//Ruta para extraer todo los datos de la base de datos
router.get('/dashboard', (req, res) => {
    //res.header('Access-Control-Allow-Origin', '*');
    conexion.query('SELECT * FROM alumno', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.send({ results: results })
        }
    })
})

router.post('/guardar', (req, res) => {
    //console.log(req.body);
    res.send('xds')
})

router.post('/post', (req, res)=>{
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos
    console.log(req.body);
    res.send('posrt')
});

// Ruta para editar
router.get('/editar/:id', (req, res) => {
    const id = req.params.id;

    conexion.query('SELECT * FROM alumno WHERE id = ?', [id], (error, results) => {
        if (error) throw error
        else res.render('edit', { user: results[0] })
    })

})

// Ruta para eliminar
router.get('/eliminar/:id', (req, res) => {
    const id = req.params.id;

    conexion.query('DELETE FROM alumno WHERE id = ?', [id], (error, results) => {
        if (error) throw error
        else res.send(`El usuario ${id} fue eliminado`)
    })

})
module.exports = router;
