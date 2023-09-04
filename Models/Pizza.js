const mongoose = require('mongoose')
const {model, Schema} = mongoose

const PizzaSchema = new Schema({
        pizzaId: {type: Number},
        name: {type: String},
        price: {type: Number},
        img: {type: String},
        ingredients: {type: Array},
        sizes: {type: Array},
        addings: {type: Array},
        isSpicy: {type: Boolean},
        spicyLvl: {type: Number},
        vegan: {type: Boolean}
      
})

const PizzaModel = model('Pizza', PizzaSchema)

module.exports = PizzaModel