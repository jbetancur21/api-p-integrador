const express = require('express')
const routes = express.Router()

routes.get('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * from usuarios', (err,rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO usuarios set ?', [req.body], (err,rows)=>{
            if(err) return res.send(err)

            res.send('Datos insertados correctamente!')
        })
    })
})

routes.delete('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM usuarios WHERE id=?', [req.params.id], (err,rows)=>{
            if(err) return res.send(err)

            res.send('El dato seleccionado se elimino correctamente!')
        })
    })
})

routes.put('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE usuarios set ? WHERE id=?', [req.body,req.params.id], (err,rows)=>{
            if(err) return res.send(err)

            res.send('Datos actualizados correctamente!')
        })
    })
})
module.exports = routes