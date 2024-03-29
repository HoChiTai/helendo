const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Category = new Schema(
    {
        name: { type: String, required: true },
    },
    {
        collection: "categorys",
    }
);

module.exports = mongoose.model("Category", Category);
