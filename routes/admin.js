var express = require("express");
var Class = require("../models/class");
var Teacher = require("../models/teacher");
var Student = require("../models/student");
var Admin = require("../models/admin");
router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Show Dashboard");
});

router.get("/classes", function (req, res, next) {
  // res.send("Show All Classes");
  // Class.find({}).exec(function (err, data) {
  //   if (err) {
  //     return next(err);
  //   }
  //   res.json(data);
  // });
  Class.find({})
    .populate("teacher")
    .populate("students.sid")
    .exec()
    .then(
      (classes) => {
        res.json(classes);
      },
      (err) => next(err)
    );
});

router.get("/classes/:cid", function (req, res, next) {
  Class.find({ _id: req.params.cid })
    .populate("teacher")
    .populate("students.sid")
    .exec()
    .then(
      (classes) => {
        res.json(classes);
      },
      (err) => next(err)
    );
});

router.get("/students", function (req, res, next) {
  // res.send("Show All Students");
  Student.find({})
    .exec()
    .then(
      (classes) => {
        res.json(classes);
      },
      (err) => next(err)
    );
});

router.get("/teachers", function (req, res, next) {
  res.send("Show All Teachers");
});

router.get("/teachers/:tid", function (req, res, next) {
  //   res.send("Show one Teachers");
  Teacher.findById(req.params.tid)
    .then(
      (teacher) => {
        res.statuscode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(teacher);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

router.get("/students/:sid", function (req, res, next) {
  //   res.send("Show one Students");
  Student.findById(req.params.sid)
    .then(
      (student) => {
        res.statuscode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(student);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

//POST

router.post("/addteacher", function (req, res, next) {
  //   res.send("Adding a new Teacher");
  Teacher.create(req.body)
    .then(
      (teacher) => {
        res.statuscode = 200;
        console.log("Teacher has been added");
        res.setHeader("Content-Type", "application/json");
        res.json(teacher);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

router.post("/addclass", function (req, res, next) {
  //   res.send("Adding a new class");
  Class.create(req.body)
    .then(
      (class1) => {
        res.statuscode = 200;
        console.log("Class has been added");
        res.setHeader("Content-Type", "application/json");
        res.json(class1);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

router.post("/addstudent", function (req, res, next) {
  //   res.send("Adding a new student");
  Student.create(req.body)
    .then(
      (student) => {
        res.statuscode = 200;
        console.log("Student has been added");
        res.setHeader("Content-Type", "application/json");
        res.json(student);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

//PUT
router.put("/assignstudent/:cid/:sid", function (req, res, next) {
  Class.findOneAndUpdate(
    { _id: req.params.cid },
    {
      //''
      $push: {
        students: { sid: req.params.sid },
      },
    },
    { new: true, upsert: false },
    function (err, data) {
      if (err) {
        return next(err);
      }
      res.json(data);
    } //upsert:add to start, new:new element
  );
});

router.put("/assignteacher/:cid/:tid", function (req, res, next) {
  //   res.send("Adding a teacher to class");
  Class.findOneAndUpdate(
    { _id: req.params.cid },
    { teacher: req.params.tid },
    function (err, data) {
      if (err) {
        return next(err);
      }
      res.json(data);
    }
  );
});

//Delete
router.delete("/delteacher/:tid", function (req, res, next) {
  //   res.send("Deleting a teacher ");
  Teacher.deleteOne({ _id: req.params.tid }, function (err, data) {
    if (err) {
      return next(err);
    }
    res.json(data);
  });
});

router.delete("/delstudent/:sid", function (req, res, next) {
  //   res.send("Deleting a student");
  Student.deleteOne({ _id: req.params.sid }, function (err, data) {
    if (err) {
      return next(err);
    }
    res.json(data);
  });
});

router.delete("/delclass/:cid", function (req, res, next) {
  //   res.send("Deleting a class");
  Class.deleteOne({ _id: req.params.cid }, function (err, data) {
    if (err) {
      return next(err);
    }
    res.json(data);
  });
});

module.exports = router;
