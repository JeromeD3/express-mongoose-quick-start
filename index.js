require('dotenv').config() // 获取环境变量

const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT

app.set('secret', 'i2u34y12oi3u4y8')
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(cors())
app.use(express.json())
require('./plugins/db')()
require('./routes/admin')(app)
require('./routes/web')(app)

// 将打包好的前端项目静态资源托管到服务器
// app.use('/', express.static(__dirname + '/web'))
// app.use('/admin', express.static(__dirname + '/admin'))
// app.use('/uploads', express.static(__dirname + '/uploads'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
