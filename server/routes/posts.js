const express = require('express');
const router = express.Router();
const { sequelize, User, Adventure } = require('../models');

router.get("/", async(req, res) =>{
    const uuid = req.uuid;
    console.log(req.uuid);
    try {
        const user = await User.findOne({
            where: { uuid },
            include: 'adventures'
        })
        return res.json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error :'Error Get'})
    }

});

router.post("/", (req, res) => {
    res.send("Test");
});


module.exports = router;