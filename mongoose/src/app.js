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
    require: true,
  },
  ctype: String,
  videos: Number,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// collection create
const Technology = new mongoose.model("Technology", technologySchema);

// create document or insert
// const createDocument = async () => {
//   try {
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

//     const result = await Technology.insertMany([
//       JSData,
//       VueData,
//       FigmaData,
//       MongoData,
//     ]);

//     // console.log(result, "result");
//   } catch (err) {
//     console.log(err, "err");
//   }
// };

// createDocument();

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
      .countDocuments()
    // .limit(1);  // only show first data
    console.log(result, "find");
  } catch (err) {
    console.log(err, "err");
  }
};

getDocument();
