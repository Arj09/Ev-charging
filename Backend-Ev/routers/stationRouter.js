const express  = require("express")

const validateToken = require("../middleware/validationtokenHandler")

const { getStation, createStation, updateStation, deleteStation, getStations } = require("../controllers/stationController")
const router = express.Router()


//router.use(validateToken)
router.route("/").get(getStations).post(validateToken   ,createStation)
router.route("/:id").delete( validateToken, deleteStation).put(validateToken,updateStation).get(getStation)

module.exports = router