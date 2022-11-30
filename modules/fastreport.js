import { todayDate, zeroToLeft } from "./functions.mjs";
import { generateFakeReport, Report} from "./report.mjs";
import { quillObjective, quillQuestions, quillHistoric } from "./quills.mjs";
//const myReport = generateFakeReport()
const report = new Report('0')
function ini(){
    document.querySelector('#input-designated-date').value = todayDate('Sun May 11,2014')
    document.querySelector('#input-execution-date').value = todayDate()+'T12:00'
    document.querySelector('#input-director').value = "Samuel Alves de Melo Neto"
    document.querySelector('#input-expert').value = "Marcos Capristo"
    document.querySelector('#input-city-epc').value = "Limeira"
    document.querySelector('#idelpol').value="Del. Sec. Limeira Plantão"
    document.querySelector('#iobjective').value = "Realizar Exame Inicial"
}
document.onload = ini()
//************************************************* Menu
document.querySelector('#menu-number').addEventListener('click', ()=>{showModal('#form-number-report', document.querySelector('#input-number-report'))})
document.querySelector('#menu-preamble').addEventListener('click', ()=>{showModal('#form-preamble', document.querySelector('#input-delegate'))})
document.querySelector('#menu-objective').addEventListener('click', ()=>{showModal('#form-objective', document.querySelector('#irdo'))})
document.querySelector('#menu-historic').addEventListener('click', ()=>{showModal('#form-historic', document.querySelector('#input-execution-date'))})
document.querySelector('#menu-print').addEventListener('click', ()=>{print()})
//************************************************* Botões das Janelas */
document.querySelectorAll('.btn-close').forEach(element=>{
    element.addEventListener('click', ()=>{
        hideModal()
    })
})
document.querySelector('#btn-form-number-report').addEventListener('click', ()=>{
    writeToHTML()
    showModal('#form-preamble', document.querySelector('#input-delegate'))
})
document.querySelector('#btn-form-preamble').addEventListener('click', ()=>{
    writeToHTML()
    showModal('#form-objective', document.querySelector('#irdo'))
})
document.querySelector('#btn-form-objective').addEventListener('click', ()=>{
    writeToHTML()
    showModal('#form-historic',document.querySelector('#input-execution-date'))
})
document.querySelector('#send-questions').addEventListener('click', ()=>{
    report.questions = []
    let lista = quillQuestions.getText().split('\n')
    for(let i=0; i<lista.length; i++){
        if(lista[i].length>5){
            report.questions.push(lista[i])
        }
    }
    showModal('#form-objective')
    quillObjective.root.innerHTML = report.writeObjective()
})
document.querySelector('#btn-form-historic').addEventListener('click', ()=>{
    writeToHTML()
    showModal('#form-informs')
})
//************************************************** Ícones das Janelas */
document.querySelector('#magic-number').addEventListener('click', ()=>{
    report.number = document.querySelector('#input-number-report').value
    report.designatedDate = document.querySelector('#input-designated-date').value
    document.querySelector('#editor-number').value = report.writeFullReportNumber()
})
document.querySelector('#toolbar-preamble-magic').addEventListener('click', ()=>{
    report.city = document.querySelector('#input-city-epc').value
    report.director = document.querySelector('#input-director').value
    report.directorGender = document.querySelector('#select-director').selectedIndex
    report.delegate = document.querySelector('#input-delegate').value;
    report.delegateGender = document.querySelector('#select-delegate').selectedIndex
    report.expert = document.querySelector('#input-expert').value
    report.expertGender = document.querySelector('#select-expert').selectedIndex
    document.querySelector('#editor-preamble').value=report.writePreamble()
})
document.querySelector('#magic-objective').addEventListener('click', ()=>{
    report.rdo = `${document.querySelector('#selectrdo').value.trim()} ${document.querySelector('#irdo').value.trim()}`
    report.chamber = `${document.querySelector('#idelpol').value}`
    report.objective = `${document.querySelector('#iobjective').value}`
    report.nature = `${document.querySelector('#inature').value}`
    report.reportedAs = `${document.querySelector('#ireportedas').value}`
    quillObjective.root.innerHTML = report.writeObjective()
})
document.querySelector('#btn-questions').addEventListener('click', ()=>{
    showModal('#form-questions')
    quillQuestions.format('list', 'ordered');
    quillQuestions.focus()
})
document.querySelector('#magic-historic').addEventListener('click', ()=>{
    let data = new Date(document.querySelector('#input-execution-date').value)
    report.executionDate = `${data.getFullYear()}-${data.getMonth()+1}-${data.getDate()}`
    report.executionHour = `${zeroToLeft(data.getHours())}h${zeroToLeft(data.getMinutes())}`
    report.ftp = document.querySelector('#iftp').value
    report.ftpGender = document.querySelector('#select-ftp').selectedIndex
    if(document.querySelector('#iguarnicaopatente').value.trim()=='' || document.querySelector('#iguarnicaonome').value.trim()=='' ){
        report.garrison = ''
    }else{
        let policia = document.querySelector('#selectguarnicao').value
        let parca = `${document.querySelector('#iguarnicaopatente').value} ${document.querySelector('#iguarnicaonome').value}`
        let vtr = document.querySelector('#iguarnicaovtr').value
        report.garrison = `Quando da chegada da equipe, a ${policia}, representada na pessoa ${parca}, de posse da viatura ${vtr}, guarnecia o local.`
    }
    if(document.querySelector('#check-authorit').checked){
        report.delegatePresent = true
    }else{
        report.delegatePresent = false
    }
    report.executionTypePlace = document.querySelector('#ilocaltype').value
    quillHistoric.root.innerHTML = report.writeHistoric(document.querySelector('#selectlocal').selectedIndex)
})
//************************* Comandos de Seleção - Comboboxes*/
document.querySelector('#selectlocal').addEventListener('change', ()=>{
    document.querySelector('#ilocaltype').placeholder = document.querySelector('#selectlocal').value
})
//************************ Atualizar o relatório */
function writeToHTML(){
    let statement = `<h1>${document.querySelector('#editor-number').value.trim()}</h1>`
    statement += `<p class = 'article-preamble'>${document.querySelector('#editor-preamble').value.trim()}</p>`
    statement += quillObjective.root.innerHTML
    statement += quillHistoric.root.innerHTML
    document.querySelector('#report').innerHTML = statement
}    
//********************** Exibe Janela de Edição */
function showModal(element_, withfocus=''){
    if(element_==''){
        hideModal()
        return
    }
    const fade = document.querySelector('#fade').style 
    const modal = document.querySelector(element_).style
    hideModal()
    modal.zIndex = '100'
    fade.opacity = '1'
    fade.pointerEvents = 'all'
    fade.transition = '0.5s'
    modal.opacity = '1'
    modal.pointerEvents = 'all'
    modal.transition = '0.5s'
    if(withfocus!=''){
        withfocus.focus()
    }
}
//***************************** Fecha janela de edição */
function hideModal(){
    const fade = document.querySelector('#fade').style 
    const modal = document.querySelectorAll('.modal')
    const subModal = document.querySelectorAll('.submodal')
    modal.forEach(element => {
        element.style.opacity = '0'
        element.style.pointerEvents = 'none'
        element.style.zIndex = '1'
        element.style.transition = '0.5s'
    })
    subModal.forEach(element => {
        element.style.opacity = '0'
        element.style.pointerEvents = 'none'
        element.style.transition = '0.5s'
        element.style.zIndex = '1'
    })
    fade.opacity = '0'
    fade.pointerEvents = 'none'
    fade.transition = '0.5s'
}
//*****************************Esconde Janelas modais auxiliares */
function hideSubModal(element_){
    let element = element_.parentNode
        element.style.opacity = '0'
        element.style.pointerEvents = 'none'
        element.style.transition = '0.5s'
        element.style.zIndex = '1'
        if(previusForm==''){
            return
        }else{
            showModal(previusForm)
            previusForm = ''
        }
    }