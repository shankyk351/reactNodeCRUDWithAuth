const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const ItemSchema = new Schema({
    name: {
        type: 'string',
        required: true
    }, 
    date: {
        type: Date,
        default: Date.now
    }
});

// Mongoose#model(modelName, [schemaName], [collectionName], [skipInit])
module.exports = Item = mongoose.model('shoppingCollection', ItemSchema, 'shoppingCollection');