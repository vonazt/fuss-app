const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  name: String,
  address: String,
  description: String, 
  location: {
    lat: Number,
    lng: Number
  }
});

module.exports = mongoose.model('Venue', venueSchema);
