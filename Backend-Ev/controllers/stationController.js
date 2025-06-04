const asyncHandler = require("express-async-handler");
const Station = require("../Model/stationModel")



const createStation = asyncHandler( async (req, res)=>{
   

    const { Name, Location, Status, Connector_Type, Power_Output} = req.body
    
    if(!Name || !Location || !Status || !Connector_Type || !Power_Output ){
        res.status(400)
        throw new Error("all filed all mandatory")
    }
    
    //Create station
    const station = await Station.create({
        Name,
        Location,
        Connector_Type,
        Power_Output,
        Status
    })
    
    res.status(202).json(station)
})


const getStations = asyncHandler( async  (req, res)=>{
    const station = await Station.find()
    //const station1 = station.reverse()
    
    res.status(200).json(station)
    
})


const getStation = asyncHandler( async (req, res)=>{

    const satation = await Station.findById(req.params.id);

    if(!station){
        res.status(404);
        throw new Error('station not found');
    }
    
    res.status(200).json(station);
})
const updateStation = asyncHandler(async (req, res)=>{


    const station = await Station.findById(req.params.id); /*
    const admin = await Admin.findById(req.user.id);
    
    
    if(!admin){
        res.status(403);
        throw new Error("User don't have permission to update this  product");
    }*/

      
    
    if(!station){
        res.status(404);
        throw new Error('station not found');
    }

    
      
      
      const updateStation = await Station.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        }
    )

    
    res.status(200).json(updateStation);
    
})
const deleteStation = asyncHandler ( async  (req, res)=>{

    const station = await Station.findById(req.params.id); 
    //const admin = await Admin.findById(req.user.id);
    
    /*
    if(!admin){
        res.status(403);
        throw new Error("User don't have permission to delete this  product");
    }
    */
    if(!station){
        res.status(404);
        throw new Error('station not found');
    }
    
    await Station.deleteOne({ _id: req.params.id });
    res.status(200).json(station);
} )



module.exports ={ getStation, getStations, deleteStation, updateStation, createStation  }
