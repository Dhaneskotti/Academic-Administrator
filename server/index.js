// const {json} = require('body-parser');
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");
const { json } = require("body-parser");
const app = express();

app.use(cors({ origin: "http://localhost:4200" }));

// app.use(bodyParser());
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 100000,
  })
);

app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

mongoose.connect("mongodb://localhost:27017/academy", (err) => {
  if (err) {
    console.log("DB not Connected");
  } else {
    console.log("DB Connected Successfully");
  }
});

// Student DataBase
const std_schema = {
  firstName: String,
  lastName: String,
  fatherName: String,
  motherName: String,
  fatherOccupation: String,
  motherOccupation: String,
  fatherMobile: Number,
  motherMobile: Number,
  username: String,
  password: String,
  registerno: String,
  deptbranch: String,
  mobile: Number,
  email: String,
  dob: String,
  address: String,
  city: String,
  state: String,
  zipcode: String,
  country: String,
  //   atted:Number,
  gender: String,
  img: String,
};

const dbStudentModel = mongoose.model("studentList", std_schema);

app.get("/student", async (req, res) => {
  const data = await dbStudentModel.find({});
  return res.json(data);
});

app.get("/student/:id", async (req, res) => {
  const data = await dbStudentModel.findOne({ registerno: req.params.id });
  return res.json(data).status(200);
});

app.post("/student", async (req, res) => {
  await new dbStudentModel(req.body).save();
  return res.status(200).json({ message: "data recevied" });
});

app.put("/student", async (req, res) => {
  const _id = req.body.id;
  const payload = req.body;
  delete payload.id;
  await dbStudentModel.findByIdAndUpdate(_id, payload);
  return res.json({ status: true, message: "success" });
});

app.delete("/student/:id", async (req, res) => {
  await dbStudentModel.findByIdAndRemove(req.params.id);
  return res.json({ status: true, message: "sessage" });
});

// Teacher DataBase

const teach_schema = {
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  staffId: Number,
  subject: String,
  mobile: Number,
  email: String,
  dob: String,
  address: String,
  city: String,
  state: String,
  zipcode: String,
  country: String,
  gender: String,
  img: String,
};

const dbTeacherModel = mongoose.model("teacherList", teach_schema);

app.get("/teacher", async (req, res) => {
  const data = await dbTeacherModel.find({});
  return res.json(data).status(200);
});

app.post("/teacher", async (req, res) => {
  await new dbTeacherModel(req.body).save();
  res.status(200).json({ message: "Data Add Successfully" });
});

app.delete("/teacher/:id", async (req, res) => {
  await dbTeacherModel.findByIdAndRemove(req.params.id);
  return res.json({ status: true, message: "teacher Deleted" });
});

app.put("/teacher", async (req, res) => {
  const _id = req.body.id;
  const payload = req.body;
  delete payload.id;
  await dbTeacherModel.findByIdAndUpdate(_id, payload);
  return res.json({ status: true, message: "successfully updated" });
});

app.get("/teacher/:id", async (req, res) => {
  const a = await dbTeacherModel.findOne({ staffId: req.params.id });
  return res.json(a).status(200);
});

//Department DataBase

const dept_schema = {
  deptId: Number,
  deptName: String,
  hodName: String,
  stud: Number,
};

const dbDeptModel = mongoose.model("departmentList", dept_schema);

app.post("/department", async (req, res) => {
  await new dbDeptModel(req.body).save();
  res.status(200).json({ message: "Data Add Successfully" });
});

app.get("/department", async (req, res) => {
  const data = await dbDeptModel.find({});
  // {status:data.length > 0? true: false, message:data.length > 0?'sucess':'incorec '}
  return res.json(data).status(200);
});

app.delete("/department/:id", async (req, res) => {
  await dbDeptModel.findByIdAndRemove(req.params.id);
  return res.json({ status: 200, Message: "dept Successfully deleted" });
});

app.put("/department", async (req, res) => {
  const _id = req.body.id;
  const payload = req.body;
  delete payload.id;
  await dbDeptModel.findByIdAndUpdate(_id, payload);
  return res.json({ status: 200, message: "successfully Updated" });
});

//Event DataBase
const Event_schema = {
  eventName: String,
  eventDate: String,
  eventDesc: String,
};

const dbEventModel = mongoose.model("eventData", Event_schema);

app.post("/event", async (req, res) => {
  await new dbEventModel(req.body).save();
  res.status(200).json({ message: "Event Data Add Successfully" });
});

app.get("/event", async (req, res) => {
  const data = await dbEventModel.find({});
  return res.json(data).status(200);
});

app.delete("/event/:id", async (req, res) => {
  const _id = req.params.id;
  await dbEventModel.findByIdAndRemove({ _id });
  return res.json({ status: 200, Message: "event Successfully deleted" });
});

//Auth

app.post("/auth", async (req, res) => {
  try {
    let id = await req.body.adminID;
    let pass = await req.body.password;
    // console.log(`adminId ${a} password ${b}`);
    let data = await dbTeacherModel.findOne({ staffId: id });
    // res.json({ id, pass });
    if (pass == data.password && id == data.staffId) {
      res.json({ data });
      res.status(201);
      console.log("AdminId and Password are Valid");
    } else {
      console.log("Incorrect AdminId and Password");
    }
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
});

app.post("/auth/stud", async (req, res) => {
  const data = await req.body;
  const regNo = await req.body.registerno;
  const pass = await req.body.studPass;
  const dbData = await dbStudentModel.findOne({ registerno: regNo });
  // console.log(dbData);
  console.log(
    `reg ${regNo} pass ${pass} dbreg ${dbData.registerno} dbpass ${dbData.password}`
  );
  if (regNo == dbData.registerno && pass == dbData.password) {
    res.json({ dbData });
    res.status(201);
    console.log("AdminId and Password are Valid");
  } else {
    console.log("Incorrect AdminId and Password");
  }
});

app.get("/auth", async (req, res) => {
  let data = await dbTeacherModel.find({});
  return res.json(data).status(200);
});

app.get("/auth/stud/:id", async (req, res) => {
  let data = await dbStudentModel.findOne({ registerno: req.params.id });
  return res.json(data).status(200);
});

app.listen(3000, (err) => {
  if (err) {
    console.log("port error");
  } else {
    console.log("port 3000");
  }
});
