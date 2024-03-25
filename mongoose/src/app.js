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
    lowercase:true,
    trim:true,
    minlength:2,
    maxlength:20
    
  },
  department: String,
  classesassign: Number,
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
      name: "i",
      department: "CS",
      classesassign: 10,
    });
   const result= await Faculty.insertMany([facultyFour]);
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
    const result = await  Faculty.findByIdAndUpdate(
      { _id: "6601094eac43c01c6e00e0a1" },
      {
        $set: { department: "cs",name:"Nitin Dixit" },
      },
      {
        new:true,
        useFindAndModify:false
      }
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }

};

// updatedocument();

// deletedocument by using mongoose

const deletedocument=async (_id)=>{

  try{
  const result=  await Faculty.deleteOne({_id})
  }
  catch(err){
   console.log(err);
  }

}



// deletedocument("660195db48a0d1cafd6613f9");
