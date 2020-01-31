const mysql = require('mysql')
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sscssc',
    database: 'blogzdb'
})

con.connect((err)=>{
    if(err) throw err
    console.log('Connected')

    const sql = `CREATE TABLE blogposts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        author VARCHAR(255),
        title VARCHAR(255),
        body VARCHAR(450),
        date INT
    )`

    con.query(sql, (err,res)=>{
        if(err) throw err
        console.log(res)
    })

    con.end()
})