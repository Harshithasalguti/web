/******************************************************************************
***
* ITE5315 – Assignment 4
* I declare that this assignment is my own work in accordance with Humber Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Harshitha Reddy Salguti Student ID: N01537582 Date: 26-11-2023
*
******************************************************************************
**/
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';

function connectDB() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
            if (err) {
                console.error("Error connecting to MongoDB:", err);
                reject(err);
            } else {
                console.log("Connected to MongoDB");
                resolve(client);
            }
        });
    });
}

function findAll() {
    connectDB()
        .then(client => {
            console.log('1');
            const db = client.db("mydb");
            console.log('2');
            let collection = db.collection('customers');
            console.log('3');
            let cursor = collection.find({}).limit(10);
            console.log('4');
            cursor.forEach(doc => console.log(doc))
                .then(() => {
                    console.log('5');
                    client.close();
                })
                .catch(err => console.error('Error iterating cursor:', err));
        })
        .catch(err => console.error('Error in findAll:', err));
}

setTimeout(() => {
    findAll();
    console.log('iter');
}, 5000);
