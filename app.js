const express = require("express");
const app = express();

// mongodb://nerochen25:Nero4157067502@ds243254.mlab.com:43254/nero-database

app.get("/", (req, res) => {
    res.send("Hello Nero, Dante, Nico and V!");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {console.log(`Listening on port ${port}`)});
