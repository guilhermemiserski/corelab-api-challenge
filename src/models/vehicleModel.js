const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema =  new Schema({
    "name": {
      "type": "String"
    },
    "description": {
      "type": "String"
    },
    "plate": {
      "type": "String"
    },
    "isFavorite": {
      "type": "String"
    },
    "year": {
      "type": "String"
    },
    "color": {
      "type": "String"
    },
    "price": {
      "type": "String"
    },
    "createdAt": {
      "type": "String"
    },
    "brand": {
      "type": "String"
    }
  });

  const vehicle = mongoose.model("vehicles", vehicleSchema);

  module.exports = vehicle