import {Report} from './report.mjs'
const report = new Report('45789')
import PizZip from "pizzip"
import Docxtemplater from "docxtemplater"
import { readFileSync, writeFileSync } from "fs"
import { resolve } from "path"
// Load the docx file as binary content
const content = readFileSync(
    resolve('../docx/', "template.docx"),
    "binary"
)
const zip = new PizZip(content)
const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
});
// Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
doc.render({
    first_name: report.writeFullReportNumber(),
    last_name: report.writePreamble(),
    //phone: "0652455478",
    //description: "New Website",
});
const buf = doc.getZip().generate({
    type: "nodebuffer",
    compression: "DEFLATE",
});
// buf is a nodejs Buffer, you can either write it to a
// file or res.send it with express for example.
writeFileSync(resolve('../docx/', "output.docx"), buf);