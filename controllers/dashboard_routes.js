const router = require('express').Router();

const {FoodEntry, WaterEntry } = require('../models');

const withAuth = require('../utils/auth');

router.get('/', withAuth, async(req, res)=>{
    try{
        const foodData = await FoodEntry.findAll({
            where:{
                userId: req.session.userId
            }
        })
        const waterData = await WaterEntry.findAll({
            where:{
                userId: req.session.userId
            }
        })
        const foodEntries = foodData.map((foodEntry)=>foodEntry.get({
            plain:true
        }));
        const waterEntries = waterData.map((waterEntry)=>waterEntry.get({
            plain:true
        }))
        res.render('DailyConsumption', {
            layout:'main',
            foodEntries,
            waterEntries
        })
    }
    catch (err){
        res.redirect('login')
    }
})
module.exports = router;