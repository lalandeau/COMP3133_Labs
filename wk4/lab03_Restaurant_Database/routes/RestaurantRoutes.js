const express = require('express');
const resModel = require('../models/Restaurant');
const resRoute = express();


resRoute.post('/', async (req, res) => {
  try {
      const new_res = new resModel(req.body)
      const restaurant = await new_res.save()
      if(!restaurant) {
          res.status(400).send({ message: "Employee content can not be empty" });
      }
      res.status(201).send(restaurant)
  } catch (error) {
      res.status(400).send(error)
  }
});

// 4
resRoute.get('/restaurants', async (req, res) => {
    try{
      const restaurant = await resModel.find()
      if(!restaurant) {
          res.status(400).send({message: "Employee content can not be empty"});
      }
      res.status(200).send(restaurant)
  }
  catch (error){
      res.status(400).send(error)
  }
});

//5
resRoute.get('/restaurants/cuisine/:cuisine', async (req, res) => {
  const restaurant = await resModel.find({cuisine : req.params.cuisine});
  try {
    if(restaurant.length != 0){
      res.send(restaurant);
    } else{
      res.send(JSON.stringify({status:false, message: "No data to be shown..."}))
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

// 6
resRoute.get('/restaurant', async (req, res) => {
    const restaurant = await resModel.find().sortBy(req.query.sortBy).select("_id cuisine name city restaurant_id")
    try {
      if(restaurant.length != 0){
        res.send(restaurant);
      } else{
      res.send(JSON.stringify({status:false, message: "No data to be shown..."}))
      }
    } catch (err) {
      res.status(400).send(err);
    }
  });


resRoute.get('/restaurants/:cuisine', async (req, res) => {
  try {
    const restaurant = resModel.find().where('cuisine').equals(req.params.cuisine).where('city').ne('Brooklyn')           
                        .sort('name').select('cuisine name city -_id').exec((err, data) => {
                          if (err){
                              res.send(JSON.stringify({status:false, message: "No data to be shown..."}));
                          }
                          res.send(data);
                        });
    } catch (err) {
      res.status(400).send(err);
    }
});

module.exports = resRoute
