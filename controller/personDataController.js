const personDatas = require('../models/personDataModel');
const mongoose = require('mongoose');

// get all data
const getAllPersonData = async (req, res) => {
    try{
        const data = await personDatas.find({}).sort({createdAt: -1});
        res.status(200).json(data);
    }catch(err){
        res.status(400).json({error: err.message});
    }
}

// get single data
const getSinglePersonData = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such data'});
    }
    const data = await personDatas.findById(id);
    if(!data){
        return res.status(404).json({error: 'No such data'});
    }
    res.status(200).json(data);
}

// create new data
const createPersonData = async (req, res) => {
    const {name, age} = req.body;

    let emptyFields = [];

    if(!name){
        emptyFields.push('name');
    }
    if(!age){
        emptyFields.push('age');
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields});
    }

    try{
        const data = await personDatas.create({name, age});
        res.status(200).json(data);
    }catch(err){
        res.status(400).json({error: err.message});
    }
}

// delete single data
const deletePersonData = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such data'});
    }

    const data = await personDatas.findByIdAndDelete({_id: id});

    if(!data){
        return res.status(404).json({error: 'No such data'});
    }
    res.status(200).json(data);
}

// update single data
const updatePersonData = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such data'});
    }

    const data = await personDatas.findByIdAndUpdate({_id: id}, {
        ...req.body
    });

    if(!data){
        return res.status(404).json({error: 'No such data'});
    }
    res.status(200).json(data);
}

module.exports = {
    createPersonData,
    getAllPersonData,
    getSinglePersonData,
    deletePersonData,
    updatePersonData
}