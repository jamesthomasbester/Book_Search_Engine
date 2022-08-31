const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://jamesbester:typo123@cluster0.jpy13lp.mongodb.net/?retryWrites=true&w=majority",
{ 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}, 
() => console.log("connected to db"),
e => console.error(e)
)

module.exports = mongoose.connection;