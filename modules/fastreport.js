import { todayDate } from "./functions.mjs";
import { generateFakeReport, Report} from "./report.mjs";
import { quillObjective, quillQuestions } from "./quills.mjs";
//const myReport = generateFakeReport()
const report = new Report('0')
function ini(){
    document.querySelector('#input-designated-date').value = todayDate('Sun May 11,2014')
    document.querySelector('#input-execution-date').value = todayDate()+'T12:00'
    document.querySelector('#input-director').value="Samuel Alves de Melo Neto"
    document.querySelector('#input-expert').value="Marcos Capristo"
    document.querySelector('#input-city-epc').value="Limeira"
    document.querySelector('#input-delegate').value=""
}
document.onload = ini()
//************************************************* Menu
document.querySelector('#menu-number').addEventListener('click', ()=>{showModal('#form-number-report')})
document.querySelector('#menu-preamble').addEventListener('click', ()=>{showModal('#form-preamble')})
document.querySelector('#menu-objective').addEventListener('click', ()=>{showModal('#form-objective')})
document.querySelector('#menu-historic').addEventListener('click', ()=>{showModal('#form-historic')})
document.querySelector('#menu-print').addEventListener('click', ()=>{print()})
//************************************************* Botões das Janelas */
document.querySelectorAll('.btn-close').forEach(element=>{
    element.addEventListener('click', ()=>{
        hideModal()
    })
})
document.querySelector('#btn-form-number-report').addEventListener('click', ()=>{
    //report.writeFullReportNumber()
    writeToHTML()
    showModal('#form-preamble')
})
document.querySelector('#btn-form-preamble').addEventListener('click', ()=>{
    writeToHTML()
    showModal('#form-objective')
})
document.querySelector('#btn-form-objective').addEventListener('click', ()=>{
    writeToHTML()
    showModal('#form-historic')
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
    quillObjective.root.innerHTML = report.writeObjective()
})
document.querySelector('#btn-questions').addEventListener('click', ()=>{
    showModal('#form-questions')
    quillQuestions.format('list', 'ordered');
    quillQuestions.focus()
})
//************************ Atualizar o relatório */
function writeToHTML(){
    let statement = `<h1>${document.querySelector('#editor-number').value.trim()}</h1>`
    statement += `<p class = 'article-preamble'>${document.querySelector('#editor-preamble').value.trim()}</p>`
    statement += quillObjective.root.innerHTML
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