const mongoose = require('mongoose');

const addSchema = new mongoose.Schema({
    building: {
      type: String,
      required: [true, "No data. Please enter building"]
    },
    street: {
        type: String,
        required: [true, "No data. Please enter street"]
      },
    zipcode: {
        type: String,
         required: [true, "No data. Please enter zipcode"]
    },
})


const resSchema = new mongoose.Schema({
  address: {
    type: addSchema,
    ref: 'Address'
  },
  city: {
    type: String,
    required: [true, "No data. Please enter city"]
  },
  cuisine: {
    type: String,
    required: [true, "No data. Please enter cuisine"]
  },
  name: {
    type: String,
    required: [true, "No data. Please enter name"]
  },
  restaurant_id: {
    type: String,
    required: [true, "No data. Please enter restaurant id"]
  },

});

// sorting using query
resSchema.query.sortBy = function(params) {
  return this.sort({'restaurant_id' : params})
}
                                 
const Restaurant = mongoose.model("Restaurant", resSchema, "Restaurant");
module.exports = Restaurant;