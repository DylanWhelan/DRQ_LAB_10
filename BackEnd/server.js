const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended : false}))

app.use(bodyParser.json())

const myConnectionString = 'mongodb+srv://Admin:NewPassWord@cluster0.fdgof.mongodb.net/movies?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, {useNewUrlParser: true});

const Schema = mongoose.Schema;

// This is how the server defines the Schema for the movies
var movieSchema = new Schema({
    Title:String,
    Year:String,
    Poster:String
});

var MovieModel = mongoose.model("movie", movieSchema);

// This is added to avoid any cors related errors
app.use(cors());

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// This is where the read page the react app grabs the movie json from
app.get('/api/movies', (req, res) => {
    MovieModel.find((err, data)=>{
        res.json(data);
    })
})

app.get('/api/movies/:id', (req, res)=>{
    console.log(req.params.id);

    // This will use the id input into the url to find which movie you wish to access with the api
    MovieModel.findById(req.params.id, (err, data) =>{
        res.json(data);
    })
})

// This is what is called when the create components submits
app.post('/api/movies', (req, res)=>{
    console.log("Movie recieved!");
    console.log(req.body.Title);
    console.log(req.body.Year);
    console.log(req.body.Poster);

    // This creates the movie json from the form input and passes it up to the mongodb server.
    MovieModel.create({
        Title:req.body.Title,
        Year:req.body.Year,
        Poster:req.body.Poster
    })

    // This tells the user that the movie was successfully added.
    res.send('Item Added');
})


// This is the function used to update the item on the mongodb database
app.put('/api/movies/:id', (req, res)=>{
    console.log("Update movie: " + req.params.id);
    console.log(req.body);

    // This is finds and update the associated movie object in the database
    MovieModel.findByIdAndUpdate(req.params.id,req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})