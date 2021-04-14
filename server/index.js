const express = require ('express');
const app = express();
const PORT = 8080;
const cors = require('cors');
//const db = require("./db");

const cookieParser = require("cookie-parser");
const {createTokens, validateToken} = require('./Middleware/jtw')
const { sequelize, User, Post, Comment } = require('./models');


app.use(  express.json() );
app.use(  cookieParser() );
app.options('*', cors({credentials: true, origin: 'http://localhost:3000'}))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Credentials", 'true');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Origin');

    //app.use(cors({credentials: true, origin: 'http://localhost:3000'}));//
    next();
});


// Routers

const postRouter = require('./routes/posts');
app.use("/posts", validateToken , postRouter);


const commentRouter = require('./routes/comment');
app.use("/comment", validateToken , commentRouter);


const authRouter = require('./routes/auth');
app.use("/auth" , authRouter);





app.listen(PORT, async () => {
    console.log(`its alive on http://localhost:${PORT}`)
    await sequelize.authenticate()
    console.log('Database Connected')
})








app.post('/user', async(req, res) =>{

    const { username, email, password} = req.body
    try {
        const user = await User.create({username , email, password })
        
        return res.json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
});


/*


app.get('/user', validateToken , async(req, res) =>{
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




app.get('/users', async(req, res) =>{
    try {
        const users = await User.findAll()
        return res.json(users)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error :'Error Get'})
    }

});



app.get('/adventure', async(req, res) =>{
    try {
       const adventures = await Adventure.findAll({ include: 'user'  })
        return res.json(adventures)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
});


app.post('/tshirt/:id', (req, res) => {

    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo !'})
    }
    res.send({
        tshirt: `👕 with your logo ${logo} and ID of ${id}}`,

    });
});

app.delete('/user/:uuid', async(req, res) =>{
    const uuid = req.params.uuid
    try {
        const user = await User.findOne({ where: { uuid }})
        await user.destroy()
        return res.json( {message: 'User deleted!'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error :'Error Delete'})
    }

});
app.put('/user/:uuid', async(req, res) =>{
    const uuid = req.params.uuid
    const { username, email, password} = req.body
    try {
        const user = await User.findOne({ where: { uuid }})

        user.username = username
        user.email = email
        user.password = password

        await user.save()

        return res.json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error :'Error PUT'})
    }

});

*/

