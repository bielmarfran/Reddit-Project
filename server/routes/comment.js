const express = require('express');
const router = express.Router();
const { sequelize, User, Post, Comment  } = require('../models');

router.get("/", async(req, res) =>{
  
});

router.post('/' , async(req, res) =>{
    const {  body , postUuid } = req.body //
    const userUuid = req.uuid;
    try {
        const user = await User.findOne( { where: { uuid: userUuid }}) 

        const post = await Post.findOne( { where: { uuid: postUuid }})
        post.countComments ++;
        
        await post.save()
       
        const comment = await Comment.create({ body, userId: user.id , postID: post.id , order: post.countComments+1 })
  
        return res.json(comment)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
});


module.exports = router;