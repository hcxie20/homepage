var mongoose = require("mongoose")

mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)

var commentSchema = mongoose.Schema({
    text: String,
    author: String
})

module.exports = mongoose.model("Comment", commentSchema)