var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongo = require("mongoose");
const { mongoURI } = require('./config/keys')
const { connectToDb } = require('./db/connection')

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

app.post("/api/SaveUser", function (req, res) {
    var mod = new Model(req.body);
    if (req.body.mode === "Save") {
        mod.save(function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send({
                    data: "Record has been Inserted..!!"
                });
            }
        });
    } else {
        Model.findByIdAndUpdate(req.body.id, {
                PROGRAM: req.body.PROGRAM,
                YEAR: req.body.YEAR,
                PROJECT: req.body.PROJECT,
                STUDENT: req.body.STUDENT,
                PROJECTMANAGERANDMENTOR: req.body.PROJECTMANAGERANDMENTOR,
                MENTORS: req.body.MENTORS
            },
            function (err, data) {
                if (err) {
                    res.send(err);
                } else {
                    res.send({
                        data: "Record has been Updated..!!"
                    });
                }
            });
    }
});

app.post("/api/deleteUser", function (req, res) {
    Model.remove({
        _id: req.body.id
    }, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send({
                data: "Record has been Deleted..!!"
            });
        }
    });
})

app.get("/api/getUser", function (req, res) {
    Model.find({}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/index.html"));
  });

app.listen(process.env.PORT || 8080,  () => {
    console.log("App listening on port 8080!");
})
