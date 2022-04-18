var doquery = require('./queryDataMoudel')

// 插入数据示例
async function addUser(params) {
    let result = ''
    result = await doquery.queryData(`insert into blog_users values (null,?,?,?,?)`, Object.values(params))
    return result;
}
// 查询数据示例
async function seleUser(params) {
    let result = ''
    result = await doquery.queryData(`select * from blog_users where username=?`, Object.values(params))
    return result;
}

module.exports = {
    addUser,
    seleUser
}