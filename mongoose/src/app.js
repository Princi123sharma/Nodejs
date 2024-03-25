const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config();

mongoose
  .connect("mongodb://127.0.0.1:27017/facultydata", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

//define the schema of the database

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: String,
  classesassign: Number,
});

//create a models means defining the collections of the database

const Faculty = mongoose.model("Faculty", schema);

//create and insert the document

const createDocument = async () => {
  try {
    const facultyOne = new Faculty({
      name: "Priush narwariya",
      department: "CS",
      classesassign: 3,
    });

    const facultyTwo = new Faculty({
      name: "Deepak gupta",
      department: "CS",
      classesassign: 2,
    });

    const facultyThree = new Faculty({
      name: "CP bhargav",
      department: "CS",
      classesassign: 4,
    });

    const facultyFour = new Faculty({
      name: "Rashimi pandey",
      department: "CS",
      classesassign: 3,
    });
    await Faculty.insertMany([
      facultyOne,
      facultyTwo,
      facultyThree,
      facultyFour,
    ]);
    // console.log(result);
  } catch (err) {
    console.log(err);
  }
};
// createDocument();

const readdocument = async () => {
  const result = await Faculty.find({ classesassign: 3 }).select({ name: 1 });
  console.log(result);
};

readdocument();
