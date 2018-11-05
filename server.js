var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongo = require("mongoose");
const { mongoURI } = require('./config/keys')
const { connectToDb } = require('./db/connection')
const { handleUserGet,handleUserDelete,handleUserSave } = require('./controllers/User')

connectToDb(mongo, mongoURI)
.then(res => {
    console.log('Database connection details:-')
    console.log(JSON.stringify(res, undefined, 2))
})
.catch(console.log)



var app = express();
app.use(bodyParser());
app.use(bodyParser.json({
    limit: "5mb"
}));
app.use(bodyParser.urlencoded({
    extended: true
}));

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

var Schema = mongo.Schema;

var UsersSchema = new Schema({
    PROGRAM: {
        type: String
    },
    YEAR: {
        type: String
    },
    PROJECT: {
        type: String
    },
    STUDENT: {
        type: String
    },
    PROJECTMANAGERANDMENTOR: {
        type: String
    },
    MENTORS: {
        type: String
    }
}, {
    versionKey: false
});

var Model = mongo.model("users", UsersSchema, "users");

app.post("/api/SaveUser", handleUserSave(Model));
app.post("/api/deleteUser", handleUserDelete(Model))
app.get("/api/getUser", handleUserGet(Model))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/index.html"));
  });

app.listen(process.env.PORT || 8080,  () => {
    console.log("App listening on port 8080!\n");
})
