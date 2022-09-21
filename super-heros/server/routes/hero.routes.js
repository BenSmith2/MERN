// import controller
const heroController = require("../controllers/hero.controller")

//define routes
module.exports = app => {
    //create a new hero app.post
    app.post("/api/hero/new", heroController.createHero)
    //read display all heros app.get
    app.get("/api/heros", heroController.findAllHeros)
    //read display one hero app.get
    app.get("/api/hero/:id", heroController.displayHero)
    //update a hero app.put
    app.put("/api/hero/update/:id", heroController.updateHero)
    //delete a hero
    app.delete("/api/hero/delete/:id", heroController.deleteHero)
}