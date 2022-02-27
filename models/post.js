const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  //timestamp : true, creates a createdAt and updatedAt field while you are inserting documents in the document itself, by default it is not added. The latter getTimestamp () is a function which finds created date.
  { timestamps: true }
)

module.exports = mongoose.model('Post', PostSchema)
