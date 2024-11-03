const express = require('express');
const app = express()
//using db object in node js file from db for mongoose connection
const db = require('./db');
const bodyparser = require('body-parser');
app.use(bodyparser.json()); //req.body
const person = require('./models/person');
const menuItem = require('./models/menu');

app.get('/', Greet = (req,res) =>{
    res.send('this is my menu...how can i help you')
})

app.post('/person', async (req,res) =>{
    try {
        const data = req.body;
        const newPerson = new person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : 'internal server error'});
    }
})

//posting data on mentItem schema : 
app.post('/menuItem',async (req,res) =>{
    try {
        const data = req.body;
    const newItem = new menuItem(data);
    const response = await newItem.save();
    console.log('item Saved Succesfully');
    res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : 'internal server error'});
        
    }
});

//get method to get the data of menuItems : 
app.get('/menuItem', async (req,res) =>{
    try {
        const data = await menuItem.find();
        console.log('data recieved');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : 'internal server error'});
    }
})

//get method to get the person data : 
app.get('/person', async (req,res) =>{
    try {
        const data = await person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : 'internal server error'});
    }
})

app.listen(3000, ()=>{console.log('Server is listening on port 3000')})