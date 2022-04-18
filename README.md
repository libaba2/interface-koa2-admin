#### 介绍

使用 node.js，基于 Koa2 搭建的后台接口开发平台。可链接 MSQL、MongoDB 数据库。

#### 项目结构

> - start.js: // 启动入口
> - routes:
>   - index.js // 连接数据库
>   - user.js // 连接数据库相关配置
> - servers:
>   - index.js // koa2 相关设置
> - mysqlControl:
>   - collection.js // 连接数据库
>   - config.js // 连接数据库相关配置
>   - index.js // sql 语句封装
>   - queryDataMoudel.js // 执行 sql
---
#### 运行示例
> 安装依赖
> 启动 package.json 中的 start 命令
> 出现如下提示则运行成功
> `[nodemon] restarting due to changes...`
> `[nodemon] restarting due to changes...`
> `[nodemon] starting 'node start.js'`
> `app started at port 9000...`
---
#### 接口访问示例
> `$.ajax({`
`url: "http://localhost:9000/user/seleUser",`
`type: "GET",`
`dataType: "json",`
`data: { username: "tom2" },`
`});`