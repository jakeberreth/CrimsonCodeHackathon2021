//connect to MongoDB

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Project1', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log("Error while connecting to MongoDB");
    console.log(error);
});

module.exports = {
    mongoose
};