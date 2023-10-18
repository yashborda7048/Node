const mongoose = require("mongoose");

// connect with mongo database
mongoose
  .connect("mongodb://localhost:27017/project")
  .then(() => {
    console.log("connection successfull....");
  })
  .catch((err) => {
    console.log(err);
  });

const technologySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    //   //  unique: true,
    //   //  uppercase: true,
    //   //  trim: true,
    //   //  minlength: [2, "minimum 2 letters"],
    //   //  maxlength: 30,
  },
  ctype: {
    type: String,
    required: true,
    // enum: ["Front end", "Back end", "Database"]
  },
  videos: {
    type: Number,
    max: 300,
    max: 0,
    validate: {
      // // first method (recommended use this)
      validator: function(value) {
          return value.length < 0
      },
      message: "videos count should not be negative",
      
       // // second method
      // validator: function(value) {
      //   if (value < 0) {
      //       throw new Error("videos count should not be negative");
      //   }
      // },
    } 
  },
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// collection create
const Technology = new mongoose.model("Technology", technologySchema);

// create document or insert
const createDocument = async () => {
  try {
//     const JSData = new Technology({
//       name: "JS",
//       ctype: "Back end",
//       videos: 40,
//       active: true,
//     });

//     const VueData = new Technology({
//       name: "Vue",
//       ctype: "Front end",
//       videos: 50,
//       active: true,
//     });

//     const FigmaData = new Technology({
//       name: "Figma",
//       ctype: "Front end",
//       videos: 80,
//       active: true,
//     });

//     const MongoData = new Technology({
//       name: "Mongo DB",
//       ctype: "Database",
//       videos: 120,
//       active: true,
//     });

    const ValidationData = new Technology({
      name: "Testing",
      ctype: "Database",
      videos: -5,
      active: false,
    });

    const result = await Technology.insertMany([
      // JSData,
      // VueData,
      // FigmaData,
      // MongoData,
      ValidationData,
    ]);

    console.log(result, "result");
  } catch (err) {
    console.log(err, "err");
  }
};

createDocument();

const getDocument = async () => {
  try {
    const result = await Technology
      // .find({ctype: "Front end"}) // only get match to "Front end"
      .find({ ctype: { $eq: "Back end" } }) // only get match to "Front end"
      // .find({videos: {$gt : 50}}) // only get greater than 50
      // .find({ videos: { $gte: 50 } }) // only get greater than 50
      // .find({ ctype: { $in: ['Back end', 'Database'] }}) // only get type in [Back end, Database]
      // .find({$or : [
      //   {ctype: "Database"},
      //   {active: true}
      // ]}) // only get that data in type is 'Database' and active is true
      // .find({$and : [
      //   {ctype: "Database"},
      //   {active: true}
      // ]}) // only get that data in not type is 'Database' and active is true
      // .find({$nor : [
      //   {ctype: "Database"},
      //   {active: true}
      // ]}) // only get that data in not type is 'Database' and active is true

      .select({ name: 1 }) // only show {id, name}
      .countDocuments();
    // .limit(1);  // only show first data
    console.log(result, "find");
  } catch (err) {
    console.log(err, "err");
  }
};

// getDocument();

const updateDocument = async (id) => {
  try {
    const result = await Technology.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name: "Javascript",
        },
      },
      {
        new: true, // for new updated data show in result "Javascript Testing"
        useFindAndModify: false,
      }
    );
    console.log(result, "result");
  } catch (err) {
    console.log(err);
  }
};

// updateDocument("652ca198e17ec49ead0eea46");

const deleteDocument = async (_id) => {
  try {
    const result = await Technology.findOneAndDelete({ _id });
    console.log(result, "result");
  } catch (err) {
    console.log(err);
  }
};

// deleteDocument("652ca198e17ec49ead0eea46"); // delete "Javascript" data
