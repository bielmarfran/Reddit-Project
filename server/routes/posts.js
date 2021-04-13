const express = require('express');
const router = express.Router();
const { sequelize, User, Post } = require('../models');

router.get("/", async(req, res) =>{
    const uuid = req.uuid;
    console.log(req.uuid);
    try {
        const user = await User.findOne({
            where: { uuid },
            include: 'posts'
        })
        return res.json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error :'Error Get'})
    }

});

router.post('/', async(req, res) =>{
    const { userUuid, name} = req.body
    try {
        const user = await User.findOne( { where: { uuid: userUuid }})
        
        const post = await Post.create({ name, userId: user.id })
        return res.json(post)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
});


module.exports = router;