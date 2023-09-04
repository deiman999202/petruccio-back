const mongoose = require('mongoose')
const {model, Schema} = mongoose

const DrinkSchema = new Schema({
        name: {type: String},
        price: {type: Number},
        img: {type: String},
        isSweet: {type: Boolean}      
})

const DrinkModel = model('Drink', DrinkSchema)

module.exports = DrinkModel