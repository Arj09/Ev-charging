const express = require("express")
const DBconnection = require('./dbConfig/dbConnection')
const dotenv = require("dotenv").config()
const cors = require('cors')




DBconnection()
const app = express()

const port = process.env.PORT || 5001

app.use(cors())
app.use(express.json());
app.use("/api/station", require("./routers/stationRouter"))
app.use("/api/user", require("./routers/userRouter"))

app.listen(port, (req, res)=>{
    console.log(`server is running on port : ${port}`)
})