const Joi = require("joi");
const config = require("config");
const mongoose = require("mongoose");
const users = require("./routes/user");
const auth = require("./routes/auth");
const reset = require("./routes/update");
const deleted = require("./routes/delete");
const pagination = require("./routes/pagination");
const search = require("./routes/search");
const express = require("express");
const app = express();

// if(!config.get('jwtprivatekey')){
//     console.error('Fatal Error: jwtprivate key is not defined');
//     process.exit(1);
// }

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0-gar5o.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to mongodb"))
  .catch(() => console.error("Could not connect to mongodb"));

app.use(express.json());
app.get("/", (req, res) => {
  res.send(`Api's working fine!`);
});

//signup api
app.use("/api/user", users);
//login api
app.use("/api/auth", auth);
//update api
app.use("/api/reset", reset);
//delete api
app.use("/api/delete", deleted);
//pagination api
app.use("/api/paginated", pagination);
//search api
app.use("/api/search", search);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is listening on port ${port}`));
