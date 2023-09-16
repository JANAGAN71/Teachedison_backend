const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: Array,
        required: true,
    },
}, { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);