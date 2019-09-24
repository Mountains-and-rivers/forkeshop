var DB_CONFIG = {
    MYSQL_DB: 'mysql://root:root@127.0.0.1:3306/learn?debug=false&connectTimeout=4000&charset=UTF8_GENERAL_CI&timezone=+0800',
    mobileapiurl: 'http://211.147.239.62:9050/cgi-bin/sendsms?to={0}&username=bbxvip@bbxvip&password=bbxvip110!&msgtype=1&text={1}',
    KNEX:{
        host: '127.0.0.1',
        port:'3306',
        user: 'root',
        password: 'root',
        database: 'learn'
    }
}

module.exports = DB_CONFIG;
