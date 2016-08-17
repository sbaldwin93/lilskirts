var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var applicationSchema = new Schema({
	first       : {type: String, required: true},
	last        : {type: String, required: true},
	address     : {type: String, required: true},
	city        : {type: String, required: true},
	state       : {type: String, required: true},
	zip         : {type: String, required: true},
	email       : {type: String, required: true},
	cell        : {type: String, required: true},
	home        : {type: String, required: true},
	month       : {type: String, required: true},
	day         : {type: String, required: true},
	year        : {type: String, required: true},
	facebook    : {type: String},
	referal     : {type: String},
	description : {type: String},
	work        : {type: String},
	date        : {type: Date, default: Date.now}

});

var Application = mongoose.model('application', applicationSchema);
module.exports = Application;