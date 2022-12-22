const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Food } = require('../models/foodModel');


router.get('/:category_id', (req, res) => {
    Food.find({category_id:req.params.category_id}, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving  :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;