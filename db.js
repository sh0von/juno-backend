// const mongoose = require('mongoose');
// const mongoURI = "mongodb+srv://dbstring";

// const connectToMongo = () => {
//     mongoose.connect(mongoURI, { dbName: 'noteslify' }, (err) => {
//         console.log("Connected To Mongo Successfully!!");
//         console.log(err);
//     })
// }

// module.exports = connectToMongo;





const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://minarsvn:1K8oXVXRqxmaW7Hy@cluster0.pad3few.mongodb.net";

const connectToMongo = () => {
    mongoose.connect(mongoURI, { dbName: 'juno' }, () => {
        console.log("Connected To Mongo Successfully!!");
    })
};

module.exports = connectToMongo;
