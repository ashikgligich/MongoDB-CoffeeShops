const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const cors = require("cors");
require("./config/passport-setup");
require("./db/mongoose"); //ensures mongoose runs and connects
const routes = require("./Routes/index");
app.use(cors());
// Takes the raw requests and turns them into usable properties on req.body
/* app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); */
//Body Parser deprecated as of Express 4.16
app.use(express.json());
app.use(express.urlencoded());
//routes, imported from routes folder above

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
