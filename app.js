//Packages
const faker = require('faker');
const mysql = require('mysql');

//For connecting with database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mysql'
});