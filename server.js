// Setup  Dependencies and JSon
const express = require ("express")
const cors = require("cors")


// Creates the React App
const app = express()

//Import JSON 
const projects = require("./projects.json")
const about = require("./about.json")



//Middleware
app.use(cors())


// Use acronym INDUCES

//INDEX ROUTE

app.get ("/", (req,res) => {
res.send("This is home")
})

app.get("/about", (req,res) => {

    res.send(about)
})

app.get("/projects", (req,res) => {
    res.send(projects)
})


//PORT is listening

const PORT = process.env.PORT || 3001
app.listen(PORT,()=>console.log(`Port is Listening ${PORT}`))