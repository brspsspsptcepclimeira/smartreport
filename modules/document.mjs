import {Report} from './report.mjs'
import PizZip from "pizzip"
import Docxtemplater from "docxtemplater"
import { readFileSync, writeFileSync } from "fs"
import { resolve } from "path"
// Instancia um novo relatório Fake em um documento docx
export function generateFakeReport(){
    const reportFake = new Report('45789')
    reportFake.expert = 'marcos capristo'
    reportFake.delegate = 'tabajara zuliani dos santos'
    reportFake.rdo = 'rdo po9874-1'
    reportFake.nature = 'o levantamento de local de acidente de trânsito'
    reportFake.reportedAs = 'relatado como sendo a ocorrência de uma colisão frontal com uma vítima fatal'
    reportFake.questions = ['houve crime? ', 'É possível determinar a velocidade de marcha dos veíuclos?', 'É possivel determinar quem deu causa ao acidente?']
    reportFake.designatedDate = '12-2-2018'
    reportFake.executionHour = '14h00'
    reportFake.ftp='regis fernando de oliveira'
    reportFake.executionTypePlace = 'um trecho da rodovia Anhanguera'
    reportFake.executionPlace = 'na pista Sul, an altura do km 125'
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
        report_number: reportFake.writeFullReportNumber(),
        preamble: reportFake.writePreamble(),
        objective: reportFake.writeObjective(),
        historic: reportFake.writeHistoric(),
        footer: `${reportFake.writeFullReportNumber()} | ${reportFake.rdo} - ${reportFake.chamber}`
    });
    const buf = doc.getZip().generate({
        type: "nodebuffer",
        compression: "DEFLATE",
    });
    // buf is a nodejs Buffer, you can either write it to a
    // file or res.send it with express for example.
    writeFileSync(resolve('../docx/', "output.docx"), buf);
}