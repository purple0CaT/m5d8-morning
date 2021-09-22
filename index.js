import request from "request";
import { pipeline } from "stream";
import fs from "fs-extra";
// import { PdfPrinter } from "pdfmake";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import PdfPrinter from "pdfmake/src/printer.js";
import Roboto from "pdfmake";

// const url = "https://skimdb.npmjs.com/registry/_changes?include_docs=true";

// request.get(url, (err, data) => {
//   console.log(data.body);
// });

// streams
// const source = request.get(url);
// const destination = process.stdout;

// pipeline(source, destination, (err) => {
//   if (err) console.log(err);
//   console.log("Stream ended successfully!");
// });
// console.log(url);

// Tooking file from json to console.log
// const source = fs.createReadStream("data.json");
// const destination = process.stdout;

// pipeline(source, destination, (err) => {
//   if (err) console.log(err);
//   console.log("Yay!");
// });

// COpying file from 1 to 2-nd
// const source = fs.createReadStream("data.json");
// const destination = fs.createWriteStream("copy.json");

// pipeline(source, destination, (err) => {
//   if (err) console.log(err);
//   console.log("Yay!");
// });
// SOURCE FILE -> TRANSFORM (COMPRESSION)-> DEST ANOTHER FILE
// import { createGzip } from "zlib";

//====================
// var PdfPrinter = require("./src/printer");
// FONTS
// const fonts = {
//   Roboto: {
//     normal: "./node_modules/pdfmake/fonts/Roboto/Roboto-Regular.ttf",
//     bold: "./node_modules/pdfmake/fonts/Roboto/Roboto-Medium.ttf",
//     italics: "./node_modules/pdfmake/fonts/Roboto/Roboto-Italic.ttf",
//     bolditalics: "./node_modules/pdfmake/fonts/Roboto/Roboto-MediumItalic.ttf",
//   },
// };

// var fs = require("fs");
// const printer = new PdfPrinter(Roboto);

console.log(Roboto);
const docDefinition = {
  content: [
    "First paragraph",
    "Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines",
  ],
};
const pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream("pdfs/basics.pdf"));
pdfDoc.end();
console.log(pdfDoc);
// const source = fs.createReadStream("data.json");
// const destination = fs.createWriteStream("data.json.gz");

console.log("END LINE !!!!!!!");
pipeline(source, destination, (err) => {
  if (err) console.log(err);
  console.log("Yay!");
});
