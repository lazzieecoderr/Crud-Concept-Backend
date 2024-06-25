import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/Config.js";
import userRoute from "./Routers/UserRouter.js"

//dotenv configuration
dotenv.config();

//express initialization
const app = express();

//default middlewares
app.use(express.json());
app.use(cors());

//Database connection
connectDB();

//default route
app.get("/", (req, res) => {
  // res.send("Welcome to our API");
  res
    .status(200)
    .send(
      `<span style="background-color:aqua;color:black;font-weight:bold; font-size:80px">Welcome to our API</span>`
    );
});

//custom routes
app.use("/api",userRoute)


//port configuration
app.listen(process.env.PORT, () => {
  console.log("Server is running on port");
});
