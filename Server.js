
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Config/db");
const cors=require("cors")



dotenv.config();
connectDB();


const app = express();
// ❗ THIS LINE IS MUST
app.use(cors())
app.use(express.json());


app.use("/api", require("./Routes/apiRoutes"));

const PORT = process.env.PORT || 5000;


app.listen(5000, () => {
  console.log("Server started on port 5000");
});
