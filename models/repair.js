var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var RepairSchema = new Schema({
  customer: String
  , cellphone: String
  , reason: String
  , date: {type: Date, default: Date.now}
});

mongoose.model('Repair', RepairSchema);

