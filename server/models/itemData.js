const mongoose = require('mongoose')
mongoose.pluralize(null);

const itemsDataSchema = new mongoose.mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    }
});

const ItemsDataModel = mongoose.model("items", itemsDataSchema)
module.exports = ItemsDataModel;

