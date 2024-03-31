const mongoose = require("mongoose");
const validator = require("validator");
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
// var validateEmail = function(email) {
//   var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   return re.test(email)
// };
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    minlength: 2,
    maxlength: 20,
  },
  department: String,
  classesassign: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("classes not assign accurately");
      }
    },
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [validator.isEmail, "Please fill a valid email address"],
    // trim: true,
    // lowercase: true,
    // unique: true,
    // required: 'Email address is required',
    // validate: [validateEmail, 'Please fill a valid email address'],
    // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  dob: {
    type: Date,
    validate: [validator.isDate, "Please Enter a valid date of birth"],
  },
});

//create a models means defining the collections of the database

const Faculty = mongoose.model("Faculty", schema);

//create and insert the document

const createDocument = async () => {
  try {
    // const facultyOne = new Faculty({
    //   name: "Priush narRwariya",
    //   department: "CS",
    //   classesassign: 3,
    // });

    // const facultyTwo = new Faculty({
    //   name: "Deepak gupta",
    //   department: "CS",
    //   classesassign: 2,
    // });

    // const facultyThree = new Faculty({
    //   name: "CP bhargav",
    //   department: "CS",
    //   classesassign: 4,
    // });

    const facultyFour = new Faculty({
      name: "Pradeep yadav",
      department: "CS",
      classesassign: 4,
      email: "pradeep23",
      dob: "02/01/2004",
    });
    const result = await Faculty.insertMany([facultyFour]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
createDocument();

const readdocument = async () => {
  const result = await Faculty.find().select({ name: 1 }).sort({ name: -1 });
  console.log(result);
};

// readdocument();

//update the document

const updatedocument = async () => {
  try {
    const result = await Faculty.findByIdAndUpdate(
      { _id: "6601094eac43c01c6e00e0a1" },
      {
        $set: { department: "cs", name: "Nitin Dixit" },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// updatedocument();

// delete document by using mongoose

const deletedocument = async (_id) => {
  try {
    const result = await Faculty.deleteOne({ _id });
  } catch (err) {
    console.log(err);
  }
};

// deletedocument("660195db48a0d1cafd6613f9");

// Normalization
// 1,2,3,3.5, 4 NF

// 10 users
// Fetch 10 users
// 100000 * 10000 - 100000000 // n-1 problem
// join table 10 sec
// 1*1 = 1

// users -> post(userID) -> comment(postID, userID)
// chat -> messsage(user1ID, user2ID) -> users
