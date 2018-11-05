const handleUserGet = Model => (req,res) => {
    Model.find({}, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
}

const handleUserDelete = Model => (req,res) => {
    Model.remove({
        _id: req.body.id
    }, (err) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                data: "Record has been Deleted..!!"
            });
        }
    });
}

const handleUserSave = Model => (req,res) => {
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
            (err, data) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send({
                        data: "Record has been Updated..!!"
                    });
                }
            });
    }
}



module.exports = {
    handleUserGet,
    handleUserDelete,
    handleUserSave
}