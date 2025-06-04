const mongoose = require('mongoose')

const stationSchema = mongoose.Schema({

   
    Name:{
        required: [true, "Please Add Charging satation name"],
        type : String
    },
    
    Location : {
        type: String,
        required:[true, "please add Charging satation location"]

     } ,
    Status : {
        type: String,
        required:[true, "please add Charging satation status"]
    },

    Power_Output : {
        type : String,
        required : [true, "Please add Charging satation power"]
    },

    Connector_Type:{
        required: [true, "Please add Charging satation connector type"],
        type : String
    },
    
    


},{
    timestamps : true
})

module.exports = mongoose.model("station", stationSchema)