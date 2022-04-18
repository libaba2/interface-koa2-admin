const Router = require('koa-router')
const login = new Router()
const api = require('../mysqlControl/index')

// ctx.query 获取get方式参数
// ctx.request.body 获取post方式参数

// 接口编写示例
login.post('/addUser', async (ctx, next) => {
    const response = await api.addUser(ctx.request.body || {})
    ctx.response.status = 200
    ctx.body = response
    await next()
})
// 接口编写示例
login.get('/seleUser', async (ctx, next) => {
    const response = await api.seleUser(ctx.query || {})
    ctx.response.status = 200
    ctx.body = response
    await next()
})

module.exports = login.routes()