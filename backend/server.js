const express=require("express");
const errorHandler=require("./middleware/errorHandler");
const connectDB=require("./config/dbConnection");
const dotenv=require("dotenv");

dotenv.config();

connectDB();
const app=express();
const port=process.env.PORT || 3001; 

//inbuilt middleware-provides a parser to parse the data string recieved from client's side
app.use(express.json());
//routes
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
