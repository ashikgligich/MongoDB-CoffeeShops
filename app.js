const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const routes = require("./Routes/index");
const errorHandlers = require("./Error/errorHandler");
// Takes the raw requests and turns them into usable properties on req.body
/* app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); */
//Body Parser deprecated as of Express 4.16
app.use(express.json());
app.use(express.urlencoded());
//routes, imported from routes folder above

app.use("/", routes);
//Global Route Error Handler
app.use(errorHandlers.notFound);
app.use(errorHandlers.catchErrors);
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
