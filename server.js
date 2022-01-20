const express = require("express");
const connectDB = require("./config/db");
const app = express();
const path = require("./routes/contacts");

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

//Serve static assets in production
if (process.env.NODE_ENV === "production") {
  console.log("env");
  //set static folder, The root (cliend/build) argument specifies the root directory from which to serve static assets.
  app.use(express.static("client/build"));
  // send currentdir/client/build/index.html
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
