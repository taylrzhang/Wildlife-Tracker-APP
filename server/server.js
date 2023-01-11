const express = require("express");
const app = express();
const path = require("path");

const apiRouter = require("./routes/api");

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
app.use(express.static(path.resolve(__dirname, "./client")));

app.use("/api", apiRouter);

// app.get("/", (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, "../index.html"));
// });

app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000);

module.exports = app;
