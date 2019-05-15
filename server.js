const express = require('express') //เรียก Express
const mysql = require('mysql') //เรียก Mysql
const app = express() // เอาfunction ใส่ตัวแปร
const config = require('./config.json') //เรียกไฟล์config.jsonใส่ตัวแปรconfig

const PORT = process.env.PORT || 4000//กำหนดพอร์ท

//เชื่อมต่อฐานข้อมูล
const db=mysql.createConnection(config)
// console.log(db);
db.connect() //เชื่อมต่อฐานข้อมูล
app.get('/ovst',(req,res)=>{ // สร้างRouterไว้เรียกจากBrowser
  let sql = 'SELECT TABLE_NAME,UPDATE_TIME,TABLE_ROWS '+ //คำสั่งSQL
  'FROM information_schema.tables '+
  'WHERE TABLE_SCHEMA = "hos" '+
  'AND TABLE_NAME = "ovst" '
  // console.log(sql);
  let query = db.query(sql,(err,results)=>{ //สั่ง Query
    if(err) throw err //ดักError
    console.log(results) // แสดงผลบนConsole
    res.json(results)   // แสดงผลบน Browser 
  })
  
})

//ทดลองสร้างRouter
app.get('/', (req, res) => {
  res.json({
    message: 'API OK !!!!'
  })
})

app.get('/status', (req, res) => {
  res.json({
    message: 'API <status> router'
  })
})

app.get('/error', (req, res) => {
  res.json({
    message: 'API <Error>'
  })
})

//ทดลองเรียกไฟล์Txt
// app.get('/config', (req, res) => {
//   res.json(config)
// })

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
}) 