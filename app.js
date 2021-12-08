//Packages
const faker = require('faker');
const mysql = require('mysql');

//For connecting with database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mysql'
});

//inserting fake data 500 times
const data = [];
for(let i = 0; i < 500; i++) {
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}

//Inserting the generated data into database
//Variable to store query
const q = 'INSERT INTO users(email, created_at) VALUES ?';
//Method for querying the database and end closing the connection
connection.query(q, [data], (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});