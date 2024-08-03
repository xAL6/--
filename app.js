
const express = require("express");
const res = require("express/lib/response");
const path = require("path");
const app = express();

// Middleware
app.use(express.static("public"))
app.set("view engine","ejs")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// HTTP request handling
app.get('/',(req,res)=>{
    
    languages=[{
        name:"JavaScript",
        rating: 4.5,
        popularity: 10,
        trend: "growing"
    },{

        name:"Python",

        rating: 4.2,
        popularity: 8,
        trend: "stable"
    }
]
    res.render("index",languages)
})

// app.get("/:name",(req,res)=>{
//     let {name} = req.params
//     res.render("index",{name})
// })


app.get("/About", (req, res) => {
    res.redirect("/about");
});

app.get("/about", (req, res) => {
    let obj = {
        title: "About Us",
        content: "This is the about us page"
    };
    res.json(obj);
});


app.get("/fruit", (req, res) => {
    res.send("歡迎");

})

app.get("/fruit/:name", (req, res) => {
     res.send(`您好，${req.params.name}`);
})

app.post("/formhandling", (req, res) => {
    let {username,password}=req.body
    res.send(`伺服器已經收到表單,你所提交之資料為username: ${req.body.username}以及password: ${req.body.password}`)
})
app.get("*", (req, res) => {
    res.status(404)
    res.send("Page not found");
})

// Port callback
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
