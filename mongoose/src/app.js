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
const createDocument = async () => {
  try {
    const JSData = new Technology({
      name: "JS",
      ctype: "Front end",
      active: true,
    });

    const VueData = new Technology({
      name: "Vue",
      ctype: "Front end",
      active: true,
    });

    const FigmaData = new Technology({
      name: "Figma",
      ctype: "Front end",
      active: true,
    });

    const MongoData = new Technology({
      name: "Mongo DB",
      ctype: "Database",
      active: true,
    });

    const result = await Technology.insertMany([
      JSData,
      VueData,
      FigmaData,
      MongoData,
    ]);
    
    console.log(result, "result");
  } catch (err) {
    console.log(err, "err");
  }
};

createDocument();
