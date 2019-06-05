const express = require('express') //เรียก Express
const app = express() // เอาfunction ใส่ตัวแปร
const PORT = process.env.PORT || 4000//กำหนดพอร์ท
const mysql = require('mysql') //เรียก Mysql

const config = require('./config.json') //เรียกไฟล์config.jsonใส่ตัวแปรconfig

const fs = require('fs') //เรียกใช้Object File-system
require.extensions['.txt']=(module,filename)=>{ //กำหนดRequire Extensions ให้อ่านtxtเป็น utf8
  module.exports=fs.readFileSync(filename,'utf8')
}
let ovstsql =require('./ovstScript.txt') //เรียกไฟล์ใส่ตัวแปร
//console.log(ovstsql);//แสดงผลในConsole
//
//เชื่อมต่อฐานข้อมูล
const db=mysql.createConnection(config)
// console.log(db);
db.connect() //เชื่อมต่อฐานข้อมูล
app.get('/ovst',(req,res)=>{ // สร้างRouterไว้เรียกจากBrowser
  // let sql = 'SELECT TABLE_NAME,UPDATE_TIME,TABLE_ROWS '+ //คำสั่งSQL
  // 'FROM information_schema.tables '+
  // 'WHERE TABLE_SCHEMA = "hos" '+
  // 'AND TABLE_NAME = "ovst" '
  let sql = ovstsql //คำสั่ง sql ที่อ่านจากไฟล์txt
  //console.log(sql);
  let query = db.query(sql,(err,results)=>{ //สั่ง Query
    if(err) throw err //ดักError
    let ovstRow =results[0].TABLE_ROWS
    let ovstName =results[0].TABLE_NAME
    console.log(ovstName+" "+ovstRow) // แสดงผลบนConsole       
    //res.json(results)
    res.json(ovstName+" "+results[0].TABLE_ROWS)   // แสดงผลบน Browser 
  })
  
})

//ทดลองสร้างRouter
app.get('/', (req, res) => {
  res.json({
    message: 'API OK !!!!'
  })
  console.log('API OK !!!!');
  
})

app.get('/status', (req, res) => {
  res.json({
    message: 'API <status> router'
  })
  console.log('API <status> router');
  
})

app.get('/error', (req, res) => {
  res.json({
    message: 'API <Error>'
  })
  console.log('API <Error>');
  
})

//ทดลองเรียกไฟล์Txt
// app.get('/config', (req, res) => {
//   res.json(config)
// })

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
}) 