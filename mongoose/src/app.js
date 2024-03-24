const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { Student } = require("./Student");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

// const princi = new Student({name: "Ravi", age: 19, class: "BCA"});
// princi.save()

async function allData() {
  const students = await Student.findById("660078dcad2c988c5235a525");
  console.log(students)
}

allData()
