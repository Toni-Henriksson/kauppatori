const express = require("express")
const app = express();
const mongoose = require('mongoose');

const ItemsDataModel = require('./models/itemData');

const cors = require('cors');
require("dotenv").config();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://tonba:Asted9292@cluster-kauppapaikka.qzja2.mongodb.net/kauppapaikka?retryWrites=true&w=majority");

// Endpoint gets all items listed for sale
app.get("/getItems", (req, res) => {
    ItemsDataModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

// Endpoint to add item for sale
app.post("/createListing", async (req, res) => {
    const data = req.body;
    console.log(data)
    const newData = new ItemsDataModel(data);
    await newData.save();
    res.json(data);
});

app.listen(process.env.PORT || 3001, () => {
    console.log("Server running");
});