const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");  

dotenv.config();

// set up server
const app = express();
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server start on port ${PORT}`));

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin : ["http://localhost:3000"],
    credentials : true
}));

//connect to MongoDB
mongoose.connect(process.env.MDB_CONNECT,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
},
(err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
});

// set up routes
app.use("/auth", require("./routers/userRouter"));
app.use("/customer", require("./routers/customerRouter"));
