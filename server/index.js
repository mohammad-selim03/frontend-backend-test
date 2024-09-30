const express = require("express");
const cors = require("cors")

const app = express();  

app.use(cors());
app.use(express())

const port = 4000;


app.get("/", (req, res) => {
    res.send("server running...")
})

app.get("/api/v1/recipes", async(req, res) => {
    const recipes = await fetch("https://dummyjson.com/recipes")
    const data = await recipes.json()
    res.send(data)
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})