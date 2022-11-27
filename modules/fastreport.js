import { generateFakeReport, Report} from "./report.mjs";
var quillFullReport = new Quill('#full-report', {theme: 'snow'});
const myReport = generateFakeReport()
quillFullReport.root.innerHTML = myReport
