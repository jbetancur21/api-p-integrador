const express = require('express')
const routes_curso = express.Router()

routes_curso.get('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * from cursos', (err,rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes_curso.post('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO cursos set ?', [req.body], (err,rows)=>{
            if(err) return res.send(err)

            res.send('Datos insertados correctamente!')
        })
    })
})

routes_curso.delete('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM cursos WHERE id=?', [req.params.id], (err,rows)=>{
            if(err) return res.send(err)

            res.send('El dato seleccionado se elimino correctamente!')
        })
    })
})

routes_curso.put('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE cursos set ? WHERE id=?', [req.body,req.params.id], (err,rows)=>{
            if(err) return res.send(err)

            res.send('Datos actualizados correctamente!')
        })
    })
})
module.exports = routes_curso