const express = require('express')
const routes_usuario_curso = express.Router()

routes_usuario_curso.get('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * from usuarios_cursos', (err,rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes_usuario_curso.post('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO usuarios_cursos set ?', [req.body], (err,rows)=>{
            if(err) return res.send(err)

            res.send('Datos insertados correctamente!')
        })
    })
})

routes_usuario_curso.delete('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM usuarios_cursos WHERE id=?', [req.params.id], (err,rows)=>{
            if(err) return res.send(err)

            res.send('El dato seleccionado se elimino correctamente!')
        })
    })
})

routes_usuario_curso.put('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE usuarios_cursos set ? WHERE id=?', [req.body,req.params.id], (err,rows)=>{
            if(err) return res.send(err)

            res.send('Datos actualizados correctamente!')
        })
    })
})
module.exports = routes_usuario_curso