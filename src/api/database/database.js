const mysql = require('mysql')

// create database connection
const dbConnection = mysql.createConnection({
    host: "localhost",
    user :"root",
    password: "",
    database:"deedmed"
})

// calling to connect
function connection(){
dbConnection.connect(function(error){
    if(error) throw error
    console.log("database connected succesfully")
})
dbConnection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      connection();                         
    } else {                                      
        connection();                                 
    }
  });
}
connection()
module.exports = dbConnection