const mongoose = require('mongoose')
const {model, Schema} = mongoose

const SauceSchema = new Schema({
        name: {type: String},
        price: {type: Number},
        img: {type: String},   
})

const SauceModel = model('Sauce', SauceSchema)

module.exports = SauceModel