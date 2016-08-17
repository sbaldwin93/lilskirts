var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var submissionSchema = new Schema({
	name       : {type: String, required: true},
	email      : {type: String, required: true},
	subject    : {type: String, required: true},
	message    : {type: String, required: true},
	date       : {type: Date, default: Date.now}
});

var Submission = mongoose.model('submission', submissionSchema);
module.exports = Submission;