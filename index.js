const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
require("dotenv").config()
const Pizza = require('./Models/Pizza.js')
const Drink = require('./Models/Drink.js')
const Sauce = require('./Models/Sauce.js')


const app = express()

app.use(express.json())
app.use(cors({credentials: true, origin: ["http://localhost:3000"]}))

mongoose.connect(process.env.MONGODB_LINK)

app.post('/products', async (req, res) => {
    const prodName = req.body.productName
    const specialtiesArr = req.body.specialties
    
    if(prodName === 'pizza'){
        if (specialtiesArr[0].noSpicy && specialtiesArr[1].onlyVegan){
             const allProducts = await Pizza.find({isSpicy: !specialtiesArr[0].noSpicy, vegan: specialtiesArr[1].onlyVegan })
             res.json(allProducts)
        }
        else if (specialtiesArr[0].noSpicy && !specialtiesArr[1].onlyVegan){
            const allProducts = await Pizza.find({isSpicy: !specialtiesArr[0].noSpicy})
             res.json(allProducts)
        }
        else if (!specialtiesArr[0].noSpicy && specialtiesArr[1].onlyVegan){
            const allProducts = await Pizza.find({vegan: specialtiesArr[1].onlyVegan })
             res.json(allProducts)
        }
        else{
            const allProducts = await Pizza.find()
             res.json(allProducts)
        }
     
    }
    else if (prodName === 'sauces'){
        const allProducts = await Sauce.find()
        res.json(allProducts)
    }
    else if (prodName === 'drinks'){
        if  (specialtiesArr[0].noSugar){
            const allProducts = await Drink.find({isSweet: !specialtiesArr[0].noSugar})
            res.json(allProducts)
        }else{
            const allProducts = await Drink.find()
            res.json(allProducts)
        }      
    }
})

app.post('/product', async (req, res) => {
    const {id, product} = req.body

    if(product === 'pizza'){
        const prodToSend = await Pizza.findOne({_id: id})
        res.json(prodToSend)
    }
    else if(product === 'drinks'){
        const prodToSend = await Drink.findOne({_id: id})
        res.json(prodToSend)
    }
    else if(product === 'sauces'){
        const prodToSend = await Sauce.findOne({_id: id})
        res.json(prodToSend)
    }

})


app.listen(5000)

