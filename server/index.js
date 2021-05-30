const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
//const db = require("./db");

const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const { createTokens, validateToken } = require("./Middleware/jtw");
const { sequelize, User, Post, Comment } = require("./models");

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
app.options("*", cors({ credentials: true, origin: "http://localhost:3000" }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Origin"
  );

  //app.use(cors({credentials: true, origin: 'http://localhost:3000'}));//
  next();
});

// Routers

const postRouter = require("./routes/posts");
app.use("/posts", validateToken, postRouter);

const commentRouter = require("./routes/comment");
app.use("/comment", validateToken, commentRouter);

const authRouter = require("./routes/auth");
app.use("/auth", authRouter);

app.listen(PORT, async () => {
  console.log(`its alive on http://localhost:${PORT}`);
  await sequelize.authenticate();
  console.log("Database Connected");
});

app.post("/logout", validateToken, async (req, res) => {
  const uuid = req.uuid;
  try {
    const user = await User.findOne({ where: { uuid: uuid } }).then(
      async function (user) {
        const acessToken = createTokens(user);
        res.cookie("access-token", acessToken, {
          maxAge: 0,
          httpOnly: true,
          path: "/",
          secure: false,
          sameSite: "Strict",
          domain: "localhost",
        });
        res.cookie("username", user.username, {
          maxAge: 0,
          httpOnly: false,
          path: "/",
          secure: false,
          sameSite: "Strict",
          domain: "localhost",
        });

        return res.json({ response: "Logout Successful" });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error POST" });
  }
});

app.post("/upload", validateToken, async (req, res) => {
  const uuid = req.uuid;
  console.warn("upload");
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  const user = await User.findOne({ where: { uuid: uuid } });

  sampleFile = req.files.myFile;
  console.log(sampleFile);
  const ext = sampleFile.name.substring(sampleFile.name.lastIndexOf("."));
  uploadPath = __dirname + "\\public\\" + req.username + ext;

  user.profilePicture = req.username + ext;

  user.save();
  console.log(uploadPath);

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);
    return res.json({ response: "File uploaded!" });
  });
});

app.use("/public", express.static("./public"));
//app.use(express.static("/public"));
/*
app.get("/public", (req, res) => {
  res.send("Hello World!");
  res.sendFile("//server/public/Carros.svg");
});
*/
//app.get("/upload", function (req, res) {
//
//});

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
