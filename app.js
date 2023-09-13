const express = require("express");
const resumeController = require("./controllers/resumeController.js");
const  formController = require("./controllers/formController.js");
const app = express()
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs")
app.use(express.static("public"));

app.get("/", resumeController)
app.post("/resume", formController)






app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})