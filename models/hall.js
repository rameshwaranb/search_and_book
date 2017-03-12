var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HallSchema = new Schema({
    updatedAt: {type: Date, Default: Date.now()},
    name: String,
    address: {
      line_1: String,
      line_2: String,
      city: String,
      state: String,
      zipcode: String
    }
});

module.exports = mongoose.model('halls', HallSchema);
