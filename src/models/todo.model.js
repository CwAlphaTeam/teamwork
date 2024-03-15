"use strict";
/* ====================================================== */
/*                     BLOG API - TODO                    */
/* ====================================================== */
const mongoose = require("mongoose");

// Schema
const TodoSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			trim: true,
			unique: true,	
			required: [true, "Email must be required"],
		},

		description: String,
        isDone:{
            type:Boolean,
            required: [true, "Is done information must be required"]
        }
	},
	{
		collection: "todos",
		timestamps: true,
	}
);

module.exports = mongoose.model("Todo", TodoSchema);
