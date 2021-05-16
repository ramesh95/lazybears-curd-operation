const Express = require("express");
const app = Express();
const router = require("./router/router");
import * as mongoose from 'mongoose';

var MAIN_DATABASE=process.env["MAIN_DATABASE"]
var MONGO_HOST=process.env["MONGO_HOST"]
var MONGO_USER=process.env["MONGO_USER"]
var MONGO_PASSWORD=process.env["MONGO_PASSWORD"]

app.use('/', router)

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MAIN_DATABASE}?retryWrites=ture`;
// const uri = "mongodb+srv://rameshbishwas:Ramesh7250607210@projectcluster-svwva.mongodb.net/mydb?retryWrites=ture";

mongoose.connect(uri, {useNewUrlParser: true,}).then(async () => {
    console.log("successfully connected");
}).catch((e) => {
    console.log(e); 
});

const port = 8080;

app.listen(port, () => console.log(`server started on port ${port}`))

module.exports = app