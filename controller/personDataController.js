const personData = require('../models/personDataModel');

// get all data
const getAllPersonData = async (req, res) => {
    try{
        const data = await personData.find().sort({createdAt: -1});
        res.status(200).json(data);
    }catch(err){
        res.status(400).json({error: err.message});
    }
}


// get single data
const getSinglePersonData = async (req, res) => {
    const {id} = req.params;
    const data = await personData.findById(id);
    if(!data){
        return res.status(404).json({error: 'No such data'});
    }
    res.status(200).json(data);

}

// create new data
const createPersonData = async (req, res) => {
    const {name, age} = req.body;
    try{
        const data = await personData.create({name, age});
        res.status(200).json(data);
    }catch(err){
        res.status(400).json({error: err.message});
    }
}

// update single data


// delete single data


module.exports = {
    createPersonData
}