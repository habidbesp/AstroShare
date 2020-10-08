const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const imageSchema = new Schema({
	date: String,
	explanation: String,
	hdurl: String,
	media_type: String,
	service_version: String,
	title: String,
	url: String,
	owner: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	comments: [
		{
			type: Schema.Types.ObjectId,
			ref: "Comments",
		},
	],
});

const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
