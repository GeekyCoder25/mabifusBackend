const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema(
	{
		firstname: {
			type: String,
			required: true,
		},
		lastname: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			min: 6,
		},
		report: [
			{
				title: String,
				size: String,
			},
		],
		dob: String,
		gender: String,
		phonenumber: String,
		bloodgroup: String,
		bloodtype: String,
		weight: String,
		height: String,
	},
	{ timestamps: true }
);

module.exports = mongoose.model('user', UserSchema);
