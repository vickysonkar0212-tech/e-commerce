const mongoose = require('mongoose');

mongoose.connect(process.env.URL);

const db = mongoose.connection;

db.on("connected",()=>{
    console.log("database connected");
});

db.once("error", (err) => {
    console.log("database error:", err);
});

