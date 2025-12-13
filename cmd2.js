const { exec } = require("child_process");
const express = require("express");
const app = express();

app.get("/run", (req, res) => {
    const cmd = req.query.cmd;
    exec(cmd, (err, out) => {
        res.send(out);   // unsafe: user-controlled command
    });
});

app.listen(3000);
