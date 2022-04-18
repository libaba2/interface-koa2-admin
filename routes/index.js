const Router = require('koa-router');
const router = new Router();

const userRouter = require('./user')

// 使用路由 访问接口时需使用前缀 /user/接口名
router.use('/user', userRouter) 

module.exports = router