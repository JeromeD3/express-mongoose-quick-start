/**
 * 主要给c端提供接口
 */
const express = require('express')
const Router = express.Router
const { model } = require('mongoose')

const Index = (app) => {
  const router = Router({
    mergeParams: true, //合并参数 为了下面获取模型 不然req.params获取不到参数
  })

  const Test = model('Test')

  router.get('/', async (req, res) => {
    const data = await Test.find()
    res.send(data)
  })

  app.use('/web/api', router)
}
module.exports = Index
