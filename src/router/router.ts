import { Resource } from "../resource/resource"
import express = require('express')
var bodyParser = require('body-parser');
var app = express();
var router = express.Router()
app.use(bodyParser.json());

router.get("/", function(req:any, res:any) {
    console.log("hhhhhhhhhhhhhhhhyyyyyyyyyy");
    res.send("Hello World");
});
router.post("/enquery", async function (req: any, res: any) {
    // console.log("hhhhhhhhhhhhhhhhhhhhhhhhhh");
    
    // let body = req.body
    let name = req.query.name
    let emailId = req.query.emailId
    let mobileNo = req.query.mobileNo
    let message = req.query.message
    // console.log("mmmmmmmmmmmmmmmmmmmmmmm4555555555555555", name, emailId, mobileNo, message);
    
    let resource = new Resource();
    let db = await resource.findData(name, emailId, mobileNo, "Hi Allok")
    // res.send(db);
    res.end();
});


module.exports = router;