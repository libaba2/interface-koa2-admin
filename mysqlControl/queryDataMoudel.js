var CONNCONFIG = require('./config').CONNCONFIG
var collectinoMysql = require('./collection').collectinoMysql
var connection = new collectinoMysql(CONNCONFIG)

/**
 * @description: 执行sql语句
 * @param {*} sql sql语句
 * @param {*} params sql语句参数
 * @return {*}
 */
function queryData(sql, params) {
    return new Promise((resolve, reject) => {
        connection.implementQuery(sql, params, function (error, results, fields) {
            if (error) {
                reject(getResultModel('fail', results))
            };
            resolve(getResultModel('success', results))
        })
    })
}
/**
 * @description: 处理返回结果结构
 * @param {*} status 执行状态
 * @param {*} data 执行结果
 * @return {*}
 */
function getResultModel(status, data) {
    if (status === 'fail') {
        return {
            success: false,
            data: null,
            alertMsg: '系统异常！',
            statusCode: 999
        }
    } else {
        let resultModel = {
            success: true,
            data: '操作成功！',
            alertMsg: '',
            statusCode: 200
        }
        if (data.affectedRows !== undefined) {
            return resultModel
        } else {
            resultModel.data = data
            return resultModel
        }
    }
}
module.exports = {
    queryData
}