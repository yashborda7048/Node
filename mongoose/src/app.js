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

const userSchema = new mongoose.Schema({
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
const User = new mongoose.model("User", userSchema);

// create document or insert
const createDocument = async () => {
  try {
    const userData = new User({
      name: "yash",
      ctype: "developer",
      videos: 0,
      active: true,
    });
    const result = await userData.save();
    console.log(result, "result");
  } catch (err) {
    console.log(err, "err");
  }
};

createDocument();
