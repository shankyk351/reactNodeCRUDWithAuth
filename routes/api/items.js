const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/item');


// @route   GET api/items
// @desc    GET All items
// @access  Public

router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items=>res.json(items));
})

// @route   POST api/items
// @desc    Create an Item
// @access  Public

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })

    newItem.save().then(item=>res.json(item));
})

// @route   POST api/items
// @desc    Update an Item
// @access  Public

router.post('/update', (req, res) => {
    Item.findById({_id: req.body._id}, function(err, task){
        task.name = req.body.name;

        task.save(function(err, task) {
            if (err) return res.status(500).send(err);
            res.status(200).json(task);
        });
    })   

    
})

// @route   DELETE api/items/:id
// @desc    Delete an Item
// @access  Public

router.delete('/:id', (req, res) => {

    Item.findById(req.params.id)
        .then(item=>{
            item.remove().then(()=>res.json({success: true}))
        }).catch(err=>{
            res.status(404).json({success: false});
        })
})

module.exports = router;