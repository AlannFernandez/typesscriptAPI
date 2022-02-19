const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'bflcaq4yqm0axd8usdvh-mysql.services.clever-cloud.com',
  user: 'uckuxtm4dbnfg0f9',
  password: 'd8FKgP9dnM9kjzndbftT',
  database: 'bflcaq4yqm0axd8usdvh'
});


try {
    mysqlConnection.connect(); 
    console.log('db is conect')  
} catch (error) {
    console.log(error)
}



module.exports = mysqlConnection;