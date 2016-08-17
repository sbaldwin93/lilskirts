var Application = require('../models/application');
var Submission = require('../models/submission');
var fs = require('fs-extra');
var path = require('path');

module.exports = {
	postApplication: function(req, res) {
		var applications = new Application({
			first: req.body.first,
			last: req.body.last,
			address: req.body.address,
			city: req.body.city,
			state: req.body.state,
			zip: req.body.zip,
			email: req.body.email,
			cell: req.body.cell,
			home: req.body.home,
			month: req.body.month,
			day: req.body.day,
			year: req.body.year,
			facebook: req.body.facebook,
			referal: req.body.referal,
			description: req.body.description,
			work: req.body.work,
			date: req.body.date
		});
		applications.save(function(err, allApplications) {
			if(err) {
				res.error(err);
			}
			else {
				res.json(allApplications);
			}
		})
	},
	getApplication: function(req, res) {
		Application.find({}).sort({date: -1}).exec(function(err, allApplications) {
			if(err) {
				res.error(err);
			}
			else {
				res.json(allApplications);
			}
		})
	},
	postSubmission: function(req, res) {
		var submissions = new Submission({
			name: req.body.name,
			email: req.body.email,
			subject: req.body.subject,
			message: req.body.message,
			date: req.body.date
		});
		submissions.save(function(err, allSubmissions) {
			if(err) {
				res.error(err);
			}
			else {
				res.json(allSubmissions);
			}
		})
	},
	getSubmission: function(req, res) {
		Submission.find({}).sort({date: -1}).exec(function(err, allSubmissions) {
			if(err) {
				res.error(err);
			}
			else {
				res.json(allSubmissions);
			}
		})
	},
	deleteSubmission: function(req, res) {
		var id = req.params.id;
		Submission.findOneAndRemove({_id: id}, function(err, doc) {
			if(err) {
				console.log(err);
			}
			else {
				res.json(doc);
			}
		})
	},
	deleteApplication: function(req, res) {
		var id = req.params.id;
		Application.findOneAndRemove({_id: id}, function(err, doc) {
			if(err) {
				console.log(err);
			}
			else {
				res.json(doc);
			}
		})
	}
};









