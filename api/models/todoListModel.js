'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Create user schema.
var User = new Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  address: {
    type: String,
  },
  zipcode: {
    type: String,
  },  city: {
    type: String,
  },  state: {
    type: String,
  },  email: {
    type: String,
  },  phone: {
    type: String,
  },  notes: {
    type: String,
  },
  Created_date: {
    type: Date,
    default: Date.now
  },

});


module.exports = mongoose.model('Tasks', User);