import mysql from 'mysql2'
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'daitari@12584',
    database: 'bakery_db'
})
db.connect((err) => {
    if (err) {
        console.log('Database connection failed')
    }
    else {
        console.log('MySQL Connected Successfully')
    }
})
export default db