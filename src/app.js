const express = require("express");
const path = require("path");
require("./db/conn");
const User = require("./models/usermessage") ;
const app = express();
const port = process.env.PORT || 3000;
// var reviewsRouter = require("./routes/reviews");

//setting the path
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))
// app.use("/reviews", reviewsRouter);
// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index', { text: 'This is EJS'})
})
app.post('/', async(req, res) => {
    try{
        const userData = new User(req.body);
         await userData.save();
         res.status(201).render("index");
    }catch(error){
        res.status(500).send(error);
    }
})

// const staticpath = path.join(__dirname,"../public");

//middleware
// app.use('/css', express.static(path.join(__dirname,"../node_modules")));
// app.use('/js', express.static(path.join(__dirname,"../node_modules")));
// app.use('/images', express.static(path.join(__dirname,"../node_modules")));
// app.use(express.static(staticpath))
// app.use('/css', express.static(__dirname + '../node_modules/dist/css'))
// app.use('/js', express.static(__dirname + '../public/js'))
// app.use('/images', express.static(__dirname + '../public/images'))

// app.set("views", path.join(__dirname, "views"));
// app.set(" view engine", "ejs");
// //routing
// app.get("/",(req,res)=>{
//     res.render("index");
// })

// server create
app.listen(port, () =>{
    console.log(`server is running  on port ${port}`);

} )
