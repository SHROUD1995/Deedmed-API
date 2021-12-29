const express = require('express')
var bodyParser = require('body-parser')
 
// create express app
const app = express()

//CORS policy
var cors = require('cors')

app.use(cors())
//setting up server port

const port = process.env.PORT || 5000
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// define root routers
app.get('/',(req,res)=>{
    res.send("roots are properly working")
})
// import the required routes
const reviews = require('./src/api/routes/Reviews/reviews')
const users = require('./src/api/routes/Users/user')
const appointments  = require('./src/api/routes/Appointments/appointment')
const privacy = require('./src/api/routes/Common/Privacy/privacy')
const security = require('./src/api/routes/Common/Security/security')
const price = require('./src/api/routes/Common/Price/price')
const bank = require('./src/api/routes/Common/Bank/bank')

//Create routes
app.use('/api/v1/reviews', reviews)
app.use('/api/v1/users', users)
app.use('/api/v1/appointments', appointments)
app.use('/api/v1/privacy',privacy)
app.use('/api/v1/security',security)
app.use('/api/v1/set_prices',price)
app.use('/api/v1/bank',bank)


//Listening to the port
app.listen(port,()=>{
    console.log("This server is running properly")
})