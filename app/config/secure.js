'use strict';

module.exports = {
  db: {
    database: 'stockcms',
    host: 'mysql.sqlpub.com',
    dialect: 'mysql',
    port: 3306,
    username: 'ioncehm',
    password: '0b1a6c1aa061f05b',
    logging: false,
    timezone: '+08:00',
    define: {
      charset: 'utf8mb4'
    }
  },
  secret:
    '\x88W\xf09\x91\x07\x98\x89\x87\x96\xa0A\xc68\xf9\xecJJU\x17\xc5V\xbe\x8b\xef\xd7\xd8\xd3\xe6\x95*4' // 发布生产环境前，请务必修改此默认秘钥
};
