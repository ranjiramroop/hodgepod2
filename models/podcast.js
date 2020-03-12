const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const podcastSchema = new Schema({
  title_original: { type: [String], required: true },
  publisher_original: { type: [String], required: true },
  thumbnail: String,
  id: String,
  website: String,
  description_original: String
});

const Podcast = mongoose.model("Podcast", podcastSchema);

module.exports = Podcast;
