const Router = require("express");
const Set = require("../models/set.js")

const router = new Router();

router.post('/create', async (request, response) => {
    try {
        console.log(request.body);
        const {name, description} = request.body;
        const set = new Set({name, description});
        console.log(name);
        console.log(description);
        console.log("");
        console.log("Attempting to Save");
        await set.save();
        console.log("Save successful");
        return response.json({message: "Set has been created"});
    }   
    catch(event){
        console.log(`set.routes.js error + ${event}`);
        response.send({message: `set.routes.js error + ${event}`})
    }
})

module.exports = router;