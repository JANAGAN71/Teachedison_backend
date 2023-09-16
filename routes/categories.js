const router = require("express").Router();
const User = require("../models/User");
const Categories = require("../models/Category");


//Post Category
router.post("/", async (req, res) => {
    const newCategory = new Categories(req.body);
    try {
        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory);
    }
    catch (err) {
        res.status(500).json(err);
    }
});


//Get All Categories
router.get("/", async (req, res) => {
    try {
        const allCate = await Categories.find();
        res.status(200).json(allCate);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
