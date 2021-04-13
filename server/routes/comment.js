const express = require('express');
const router = express.Router();
const { sequelize, User, Post, Comment  } = require('../models');

router.get("/", async(req, res) =>{
  
});

router.post('/' , async(req, res) =>{
    const {  body , postUuid, userUuid } = req.body //
    try {

        //console.log( postUuid, userUuid  );
        const user = await User.findOne( { where: { uuid: userUuid }}) 

        const post = await Post.findOne( { where: { uuid: postUuid }})
       
        const comment = await Comment.create({ body, userId: user.id , postID: post.id  })
  
        return res.json(comment)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
});


module.exports = router;