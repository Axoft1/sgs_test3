const mysql = require('mysql');

const HOST = ''
const User = ''
const DATABASE = ''
const PASSWORD = ''

const con = mysql.createConnection({
    host: HOST,
    user: User,
    database: DATABASE,
    password: PASSWORD
});

con.connect(err => {
    if (err) {
        console.log(err);
        return err
    }
    console.log('Database ===== Ok');
})

let queryCities = `CREATE TABLE cities (
        id INT PRIMARY KEY,
        name VARCHAR(255) NOT NULL
        )`
let queryCitiesData = `INSERT INTO cities (id, name) VALUES
        (1, 'Москва'),
        (2, 'Санкт-Петербург')`

let queryWorkshops = `CREATE TABLE workshops (
       id INTEGER PRIMARY KEY AUTO_INCREMENT,
       name VARCHAR(255) NOT NULL,
       city_id INTEGER
     )`

let queryWorkshopsData = `INSERT INTO workshops ( id, name, city_id) VALUES
        ( NULL,'Цех 1', 1),
        ( NULL,'Цех 2', 1),
        ( NULL,'Цех 3', 2),
        ( NULL,'Цех 4', 2)`

let queryEmployees = `CREATE TABLE employees (
        name_id INTEGER PRIMARY KEY AUTO_INCREMENT,
        workshop_id INTEGER,
        person_name VARCHAR(255) NOT NULL        
       )`

let queryEmployeesData = `INSERT INTO employees (name_id, workshop_id, person_name) VALUES
        (1, '1', 'Андрей'),
        (2, '1', 'Сергей'),
        (3, '2', 'Николай'),
        (4, '3', 'Анатолий'),
        (5, '4', 'Петр'),
        (6, '4', 'Владимир');`

let queryBrigade = `CREATE TABLE brigade (first VARCHAR(255) NOT NULL , second VARCHAR(255) NOT NULL ) ENGINE = InnoDB`

let queryBrigadeData = `INSERT INTO brigade (first, second) VALUES   ('первая 08:00:00, 20:00:00', 'вторая 20:00:00, 08:00:00')`

let queryShift_table = `CREATE TABLE shift (
        first_shift VARCHAR(255) NOT NULL,
        second_shift VARCHAR(255) NOT NULL 
       ) ENGINE = InnoDB`

let queryShift_tableData = `INSERT INTO shift (first_shift, second_shift) VALUES 
        ('первая', 'вторая')`

new Promise((resolve, reject) => {
    con.query(
        queryCities,
        function (err, results, fields) {
            if (err) {
                reject('Ошибка подключения к базе ' + err)
                return
            }
            resolve()
        }
    );

})
new Promise((resolve, reject) => {
    con.query(
        queryCitiesData,
        function (err, results, fields) {
            if (err) {
                reject('Ошибка подключения к базе ' + err)
                return
            }
            resolve()
        }
    );

})
new Promise((resolve, reject) => {
    con.query(
        queryWorkshops,
        function (err, results, fields) {
            if (err) {
                reject('Ошибка подключения к базе ' + err)
                return
            }
            resolve()
        }
    );

})
new Promise((resolve, reject) => {
    con.query(
        queryWorkshopsData,
        function (err, results, fields) {
            if (err) {
                reject('Ошибка подключения к базе ' + err)
                return
            }
            resolve()
        }
    );

})
new Promise((resolve, reject) => {
    con.query(
        queryEmployees,
        function (err, results, fields) {
            if (err) {
                reject('Ошибка подключения к базе ' + err)
                return
            }
            resolve()
        }
    );

})
new Promise((resolve, reject) => {
    con.query(
        queryEmployeesData,
        function (err, results, fields) {
            if (err) {
                reject('Ошибка подключения к базе ' + err)
                return
            }
            resolve()
        }
    );

})
new Promise((resolve, reject) => {
    con.query(
        queryBrigade,
        function (err, results, fields) {
            if (err) {
                reject('Ошибка подключения к базе ' + err)
                return
            }
            resolve()
        }
    );

})
new Promise((resolve, reject) => {
    con.query(
        queryBrigadeData,
        function (err, results, fields) {
            if (err) {
                reject('Ошибка подключения к базе ' + err)
                return
            }
            resolve()
        }
    );

})
new Promise((resolve, reject) => {
    con.query(
        queryShift_table,
        function (err, results, fields) {
            if (err) {
                reject('Ошибка подключения к базе ' + err)
                return
            }
            resolve()
        }
    );

})
new Promise((resolve, reject) => {
    con.query(
        queryShift_tableData,
        function (err, results, fields) {
            if (err) {
                reject('Ошибка подключения к базе ' + err)
                return
            }
            resolve()
        }
    );
})
con.end()