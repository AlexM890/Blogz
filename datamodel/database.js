const mysql = require('mysql')
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"sscssc",
    database:""
})

con.connect((error)=>{
    if(error) throw error
    console.log("Connected to Database")

    const sql = `CREATE DATABASE blogzdb`

    con.query(sql, (err,res)=>{
        if(err) throw err
        console.log(res)
    })

    con.end()
})