import express from "express"

const port = 3000;
const app = express();

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs");
})

// REDIRECTS TO LOGIN PAGE
app.post("/user", (req, res) =>{
    res.render("login/user.ejs")
});

app.post("/organisation", (req, res) =>{
    res.render("login/organisation.ejs")
});


// REDIRECTS TO PROFILE PAGE
app.post("/Myprofile", (req, res) =>{
    res.render("profile/userProfile.ejs");
});

app.post("/orgProfile", (req, res) =>{
    res.render("profile/orgProfile.ejs")
});



app.listen(port, () => {
    console.log(`App is runnning on port ${port}`);
});