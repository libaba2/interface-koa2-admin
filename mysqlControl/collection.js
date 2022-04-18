var mysql = require('mysql')

class collectinoMysql {

    constructor(config) {
        this.connection = ''
        this.config = config
    }
    // 创建mysql连接
    createCollectinon() {
        this.connection = mysql.createConnection(this.config);
        this.connection.connect(function (err) {
            if (err) {
                throw err;
            }
        });
        return this.connection
    }
    // 执行sql语句
    implementQuery(sql, params, callback) {
        const conn = this.createCollectinon()
        conn.query(sql, params, function (error, results, fields) {            
            if (error) {
                throw error
            }
            callback(error, results)
        })
        this.closeCollection()
    }
    // 断开连接
    closeCollection() {
        this.connection.end(function (err) {
            if (err) {
                throw err;
            }
        })
    }
}

module.exports = {
    collectinoMysql
}