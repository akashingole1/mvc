const mongoose = require("mongoose");
const users = require("./routes/user");
const auth = require("./routes/auth");
const reset = require("./routes/update");
const deleted = require("./routes/delete");
const pagination = require("./routes/pagination");
const search = require("./routes/search");
const utils = require("./app/utils/index");
const express = require("express");
const app = express();

// if(!config.get('jwtprivatekey')){
//     console.error('Fatal Error: jwtprivate key is not defined');
//     process.exit(1);
// }

mongoose
  .connect(utils.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to mongodb"))
  .catch(() => console.error("Could not connect to mongodb"));

app.use(express.json());
app.use("/assets", express.static("assets"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index");
  // res.send(`Api's working fine!`);
});
app.get("/about", (req, res) => {
  const features = [
    { id: 1, feature: "Templating using ejs" },
    { id: 2, feature: "CRUD operation using mvc pattern" },
    { id: 3, feature: "Pagination and search api" },
  ];
  res.render("pages/about", { features: features });
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
