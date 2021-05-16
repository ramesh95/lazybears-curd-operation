// import * as mocha from 'mocha';
// import * as chai from 'chai';
// // import * as UUID from 'uuid'
// import { SchoolInfoModel } from './school-mode'
// const expect = chai.expect;
// var mongoose = require('mongoose');

// let testModel: SchoolInfoModel = new SchoolInfoModel();
// describe('Image test cases', function () {

//     before(async function () {
//         console.log("******BEGIN Tests*******");

//     });

//     after(async function () {
//         console.log("******END Tests*******");
//     });

//     it('Connect', function (done) {
//         this.timeout(5000);
//         const uri = "mongodb+srv://rameshbishwas:Ramesh7250607210@projectcluster-svwva.mongodb.net/mydb?retryWrites=ture";
//         mongoose.connect(uri, { useNewUrlParser: true, }).then(async () => {
//             console.log("conected")
//             done();
//         }).catch((err: any) => {
//             console.log(err);
//             done(err);

//         });
//     });

//     it('define schema', function (done) {
//         this.timeout(5000);
//         let model = new SchoolInfoModel();
//         testModel = model;
//         let promise = model.defineSchema()
//         promise.then(() => {
//             done();
//         })
//             .catch(err => {
//                 done(err);
//             });
//     });

//     it('Insert Data', function (done) {
//         this.timeout(5000);
//         let promise = testModel.insertData( "rose", "imagesrc", "hhhh", "yyyy", "nnnn", "jjjjj", "12345", "76rtty", "uuuu", "jjjj", 
//         "yyyyy", "hhhh", "uuuuu", "hhhhhh", "yyyyyyy", "tttttttttttt");
//         promise.then((t) => {
//             console.log(t);
//             done();
//         })
//             .catch(err => {
//                 done(err);
//             });
//     });

//     // it('find Data', function (done) {
//     //     this.timeout(5000);
//     //     let promise = testModel.find;
//     //     promise.then((t) => {
//     //         console.log(t);
//     //         done();
//     //     })
//     //         .catch(err => {
//     //             done(err);
//     //         });
//     // });
// });
