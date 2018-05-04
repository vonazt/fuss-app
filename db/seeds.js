const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Venue = require('../models/venue');
const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Venue
    .create([{
      name: 'Bar Kick',
      description: 'Spacious bar with table football, hung with flags and memorabilia, showing matches on big screen',
      address: '127 Shoreditch High St, London E1 6JE',
      location: { lat: 51.526849, lng: -0.078222 }
    }, {
      name: 'Big Chill',
      description: 'Low-lit, laid-back bar with sofas and front terrace, hosting busy and eclectic DJ programme.',
      address: 'Dray Walk, London E1 6QL',
      location: { lat: 51.5215883, lng: -0.074501 }
    }])
    .then(venues => console.log(`${venues.length} venues created!`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
