import express from 'express'
import cors from 'cors'
import db from './db.js'
const app = express()
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Bakery Backend is Running')
})
app.get('/api/products', (req, res) => {
    let sql = 'SELECT * FROM products'
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({
                message: 'Error fetching products'
            })
        }
        else {
            res.json(result)
        }
    })
})
app.post('/api/login', (req, res) => {
    let { username, password } = req.body
    let sql = `
        SELECT * FROM users
        WHERE username = ?
        AND password = ?
    `
    db.query(
        sql,
        [username, password],
        (err, result) => {
            if (err) {
                res.status(500).json({
                    message: 'Database error'
                })
            }
            else if (result.length > 0) {
                res.json({
                    success: true,
                    message: 'Login successful'
                })
            }
            else {
                res.json({
                    success: false,
                    message: 'Invalid username or password'
                })
            }
        }
    )
})
app.listen(5000, () => {
    console.log('Server running on port 5000')
})