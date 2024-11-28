const express = require("express");
const app = express();
const port = 8000;


app.get("/", (req, res)=>{
    return res.send(`Print your message here`);
});

app.get("/:echo", (req, res)=>{
    return res.send(`Your echo message is <strong>${req.params.echo}!<strong/>`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
