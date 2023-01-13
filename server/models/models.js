const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://taylrzhang:3377926Taylor@cluster0.zgchm2g.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: "animalTracking",
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const animalSchema = new Schema({
  name: { type: String, required: true },
  type: String,
  description: String,
  img: String,
  location: {
    type: Schema.Types.ObjectId,
    ref: "location",
  },
  date_create: Date,
});

const Animal = mongoose.model("Animal", animalSchema);

const locationSchema = new Schema({
  animal_name: {
    type: Schema.Types.ObjectId,
    ref: "animal",
  },
  name: String,
  lat: Number,
  lng: Number,
  date_create: Date,
});

const Location = mongoose.model("Location", locationSchema);

module.exports = {
  Animal,
  Location,
};
