import express from "express";

const app = express();
const port = 8000;

app.get("/",(rep,res) => {
    res.send("Hello my friend.");
});
app.get("/about-us",(rep,res) => {
    res.send("About Us");
});
app.get("/Home",(rep,res) => {
    res.redirect("/about-us");
});

app.listen(port,() => {
    console.log(`https://${port}`);
});