import { todayDate, zeroToLeft } from "./functions.mjs"
import { generateFakeReport, Report} from "./report.mjs"
import { Img } from './img.mjs'
import { quillObjective, quillQuestions, quillHistoric, quillInforms, quillLocal, quillVeicle, quillThing, quillCorpuses, quillConclusion} from "./quills.mjs"
//const myReport = generateFakeReport()
const report = new Report('0')
const myImage = new Img
myImage.canvas = document.querySelector('#i-canvas')
myImage.currentIndex = 0
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
//************************************************* Variáveis Globias */
const atributos = `width=660, height=${window.innerHeight}, top=0, left=699, scrollbars=yes, status=no, toolbar=no,location=no, directories=no, menubar=no,resizable=no, fullscreen=no`
//************************************************* Menu
document.querySelector('#menu-number').addEventListener('click', ()=>{showModal('#form-number-report', document.querySelector('#input-number-report'))})
document.querySelector('#menu-preamble').addEventListener('click', ()=>{showModal('#form-preamble', document.querySelector('#input-delegate'))})
document.querySelector('#menu-objective').addEventListener('click', ()=>{showModal('#form-objective', document.querySelector('#irdo'))})
document.querySelector('#menu-historic').addEventListener('click', ()=>{showModal('#form-historic', document.querySelector('#input-execution-date'))})
document.querySelector('#menu-informs').addEventListener('click', ()=>{showModal('#form-informs')})
document.querySelector('#menu-local').addEventListener('click', ()=>{showModal('#form-local')})
document.querySelector('#menu-veicle').addEventListener('click', ()=>{showModal('#form-veicle')})
document.querySelector('#menu-thing').addEventListener('click', ()=>{showModal('#form-thing')})
document.querySelector('#menu-corpuses').addEventListener('click', ()=>{showModal('#form-corpuses')})
document.querySelector('#menu-conclusion').addEventListener('click', ()=>{
    toConclusion()
    showModal('#form-conclusion')
})
//document.querySelector('#menu-numerar').addEventListener('click', ()=>{ativarImagem()})
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
document.querySelector('#btn-form-informs').addEventListener('click', ()=>{
    report.informs = quillInforms.root.innerHTML
    writeToHTML()
    showModal('#form-local')
})
document.querySelector('#btn-form-local').addEventListener('click', ()=>{
    report.place = quillLocal.root.innerHTML
    writeToHTML()
    showModal('#form-veicle')
})
document.querySelector('#btn-form-veicle').addEventListener('click', ()=>{
    report.veicle = quillVeicle.root.innerHTML
    writeToHTML()
    showModal('#form-thing')
})
document.querySelector('#btn-form-thing').addEventListener('click', ()=>{
    report.piece = quillThing.root.innerHTML
    writeToHTML()
    showModal('#form-corpuses')
})
document.querySelector('#btn-form-corpuses').addEventListener('click', ()=>{
    report.corpuse = quillCorpuses.root.innerHTML
    writeToHTML()
    toConclusion()
    showModal('#form-conclusion')
})
document.querySelector('#btn-form-conclusion').addEventListener('click', ()=>{
    report.conclusion = quillConclusion.root.innerHTML
    writeToHTML()
    hideModal()
})
//************************************************** Ícones das Janelas */
document.querySelector('#magic-number').addEventListener('click', ()=>{
    report.number = document.querySelector('#input-number-report').value
    report.designatedDate = document.querySelector('#input-designated-date').value
    document.querySelector('#editor-number').value = report.writeFullReportNumber()
})
document.querySelector('#input-number-report').addEventListener('keyup', (e)=>{
    let key = e.which || e.keyCode;
        if(key=='13'){
            document.querySelector('#magic-number').click()
        }
})
document.querySelector('#input-designated-date').addEventListener('change', ()=>{
    document.querySelector('#magic-number').click()
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
document.querySelector('#magic-informs').addEventListener('click', ()=>{
    if(quillInforms.getText().trim()==''){
        quillInforms.root.innerHTML = `<h2>Informes</h2>`
    }
    quillInforms.root.innerHTML += `<h3>Declarações de ...</h3><p>... descreva aqui as informações prestadas ...</p>`
})
document.querySelector('#magic-local-house').addEventListener('click', ()=>{
    if(quillLocal.getText().trim()==''){
        quillLocal.root.innerHTML = `<h2>Descrição e Exame do Local</h2><h3>Características do Local</h3><p></p><h3>Exame</h3><p></p><p></p>`
    }
    window.open('./pages/imoveis.html', 'janela', atributos)
    
})
document.querySelector('#magic-local-street').addEventListener('click', ()=>{
    if(quillLocal.getText().trim()==''){
        quillLocal.root.innerHTML = `<h2>Descrição e Exame do Local</h2><h3>Características do Local</h3><p></p><h3>Exame</h3><p></p><p></p>`
    }
    window.open('./pages/via.html', 'janela', atributos)
})
document.querySelector('#magic-local-estruct').addEventListener('click', ()=>{
    if(quillLocal.getText().trim()==''){
        quillLocal.root.innerHTML = `<h2>Descrição e Exame do Local</h2><h3>Características do Local</h3><h3>Preservação</h3><h3>Exame</h3>`
    }
})
document.querySelector('#magic-carchash').addEventListener('click', ()=>{
    if(quillVeicle.getText().trim()==''){
        quillVeicle.root.innerHTML = `<h2>Descrição e Exame do Veículo</h2><p></p>`
    }
    window.open('./pages/veiculos.html', 'janela', atributos)
})
document.querySelector('#magic-veicle-estruct').addEventListener('click', ()=>{
    if(quillVeicle.getText().trim()==''){
        quillVeicle.root.innerHTML = `<h2>Descrição e Exame do Veículo</h2><p>Identificação ...</p><p>Placa de Identificação</p><p>Chassi</p><p>Motor</p><p>Localização e posição ...</p><p>Danos ...</p><p>Sistemas ...</p><p>Pneus ...</p>`
    }
})
document.querySelector('#img-close').addEventListener('click', ()=>{
    showModal(myImage.formCaller)
    alert(myImage.formCaller)
})
document.querySelector('#magic-things-knife').addEventListener('click', ()=>{
    window.open('./pages/knife.html', 'janela', atributos)
})
document.querySelector('#magic-things-gun').addEventListener('click', ()=>{
    window.open('./pages/gun.html', 'janela', atributos)
})
document.querySelector('#magic-things-bullet').addEventListener('click', ()=>{
    window.open('./pages/bullet.html', 'janela', atributos)
})
document.querySelector('#magic-things-estruct').addEventListener('click', ()=>{
    if(quillThing.getText().trim()==''){
        quillThing.root.innerHTML = `<h2>Descrição e Exame de Peça</h2><p></p>`
    }
})
document.querySelector('#magic-corpuses').addEventListener('click', ()=>{
    if(quillCorpuses.getText().trim()==''){
        quillCorpuses.root.innerHTML = `<h2>Descrição e Exame do Cadáver</h2><p></p><p>A descrição minuciosa do cadáver, suas características e determinação da causa da morte, são objetos de laudo pericial a ser expedido pelo Instituto Médico Legal.</p>`
    }
    window.open('./pages/corpuses.html', 'janela', atributos)
})
//************************* Caixas de Seleção */
document.querySelector('#select-director').addEventListener('change', ()=>{document.querySelector('#input-director').focus()})
document.querySelector('#select-expert').addEventListener('change', ()=>{document.querySelector('#input-expert').focus()})
document.querySelector('#select-delegate').addEventListener('change', ()=>{document.querySelector('#input-delegate').focus()})
document.querySelector('#selectrdo').addEventListener('change', ()=>{document.querySelector('#irdo').focus()})
document.querySelector('#select-ftp').addEventListener('change', ()=>{document.querySelector('#iftp').focus()})
document.querySelector('#selectguarnicao').addEventListener('change', ()=>{document.querySelector('#iguarnicaopatente').focus()})
document.querySelector('#selectlocal').addEventListener('change', ()=>{document.querySelector('#ilocaltype').focus()})
//document.querySelector('#select-ftp').addEventListener('change', ()=>{document.querySelector('#iftp').focus()})
//************************* Texto para Conclusão */
function toConclusion(){
    if(quillConclusion.getText().trim()!=''){
        return
    }
    let statement = `<h2>Conclusão</h2><p></p>`
    if(report.questions.length>0){
        statement += `<p>Em resposta aos quesitos:</p>`
        for(let i=0; i<report.questions.length; i++){
            statement += `<p class='i-questions'>${i+1}. ${report.questions[i]}</p><p class='i-resp-questions'></p>`
        }
        //statement += `</ol>`
    }
    statement += `<p>Este laudo segue assinado digitalmente e encontra-se arquivado no sistema GDL da Superintendência da Polícia Técnico Científica do Estado de São Paulo.</p>`
    if(document.querySelector('#check-signature').checked){
        statement += `<p id='signature-expert'>${report.expert}</p>`
        if(report.expertGender==1){
            statement += `<p class='signature-label-name' id='signature-label'>Perita Criminal</p>`
        }else{
            statement += `<p class='signature-label' id='signature-label'>Perito Criminal</p>`
        }
    }
    quillConclusion.root.innerHTML = statement
}
//************************* Comandos de Seleção - Comboboxes*/
document.querySelector('#selectlocal').addEventListener('change', ()=>{
    document.querySelector('#ilocaltype').placeholder = document.querySelector('#selectlocal').value
})





























export function showImageEditor(formCaller, indexText, quillPanel){
    myImage.formCaller = formCaller
    myImage.indexText = indexText
    myImage.quillPanel = quillPanel
    myImage.colorLine = document.querySelector('#img-color-line').value
    document.querySelector('#filedialogimg').addEventListener('change', ()=>{myImage.selecionarImagem(document.querySelector('#filedialogimg').files)})
    document.querySelector('#img_more').addEventListener('click', ()=>{
        myImage.resize = true
    }) 
    document.querySelector('#img-less').addEventListener('click', ()=>{
       myImage.elipse=true
    }) 
    document.querySelector('#i-canvas').addEventListener('dblclick', (event)=>{
        let x = myImage.getMousePosition(event).x
        let y = myImage.getMousePosition(event).y
        let legenda = document.querySelector('#canvas-label')
        legenda.value = ''
        legenda.style.display='block'
        legenda.style.left=`${x}px`
        legenda.style.top=`${y}px`
        legenda.style.color = myImage.colorLine
        legenda.focus()
    })
    document.querySelector('#canvas-label').addEventListener('keyup', (e)=>{
        let key = e.which || e.keyCode;
        if(key=='13'){
            let legenda = document.querySelector('#canvas-label')
            myImage.marck = true
            myImage.toWrite(legenda.value.trim())
            legenda.value = ''
            legenda.style.display = 'none'
        }
    })
    document.querySelector('#img-up').addEventListener('click', ()=>{myImage.changeImg(true, false)})
    document.querySelector('#img-down').addEventListener('click', ()=>{myImage.changeImg(false, true)})
    document.querySelector('#img-arrow').addEventListener('click', ()=>{myImage.line = true})
    //document.querySelector('#img-marck').addEventListener('click', (event)=>{myImage.marck = true})
    document.querySelector('#img-crop').addEventListener('click', ()=>{myImage.crop=true})
    document.querySelector('#img-full').addEventListener('click', ()=>{myImage.toFullImg()})
    document.querySelector('#img-color-line').addEventListener('change', ()=>{
        myImage.colorLine = document.querySelector('#img-color-line').value
    })
    document.querySelector('#img-send').addEventListener('click', ()=>{
        addImgToform()
    })
    myImage.mouseDown = false
    myImage.canvas.addEventListener('click', ()=>{myImage.mouseClick()})
    myImage.canvas.addEventListener('mousemove', (event)=>{
        myImage.setMouseMove(event)
    })
    myImage.canvas.addEventListener('mousedown', (event)=>{myImage.setMouseDown(event)})
    myImage.canvas.addEventListener('mouseup', (event)=>{myImage.setMouseUp(event)})
    showModal('#image-editor')
    if(myImage.selectedFileinWE==''){
        document.querySelector('#filedialogimg').click()
    }
}
function addCaptionToImg(){
    let caption = document.querySelector('#i-labelimg').value.trim()
    if(caption==''){
        caption='Imagem'
    }
    let position = myImage.indexText
    let data = `[textodalegendaasersubstituido]`
    myImage.quillPanel.clipboard.dangerouslyPasteHTML(position, data)
    let textHTML1 = myImage.quillPanel.root.innerHTML
    textHTML1 = textHTML1.replace(`[textodalegendaasersubstituido]`, `<p class="legenda">${caption}</p><P>`)
    myImage.quillPanel.root.innerHTML = textHTML1
    return caption.length
}
function addImgToform(){
    if(myImage.formCaller =='' || myImage.quillPanel==''){
        return
    }
    let dataURI = myImage.canvas.toDataURL()
    //myImage.quillPanel.insertText(myImage.indexText, '\n')
    let captionLength = addCaptionToImg()+3
    myImage.quillPanel.insertEmbed(myImage.indexText, 'image', dataURI)
    let indexToFocus = myImage.indexText+captionLength
    myImage.quillPanel.setSelection(indexToFocus, 0)
    myImage.quillPanel.focus()
    showModal(myImage.formCaller)
    myImage.quillPanel =''
    myImage.formCaller = ''
    //myImage.quillPanel.dispatchEvent('y')
}








































//************************ Atualizar o relatório */
function writeToHTML(){
    let statement = `<h1>${document.querySelector('#editor-number').value.trim()}</h1>`
    statement += `<p class = 'article-preamble'>${document.querySelector('#editor-preamble').value.trim()}</p>`
    if(quillObjective.getText().length>20){
        statement += quillObjective.root.innerHTML
    }
    if(quillHistoric.getText().length>20){
        statement += quillHistoric.root.innerHTML
    }
    if(quillInforms.getText().length>20){
        statement += quillInforms.root.innerHTML
    }
    if(quillLocal.getText().length>20){
        statement += quillLocal.root.innerHTML
    }
    if(quillVeicle.getText().length>20){
        statement += quillVeicle.root.innerHTML
    }
    if(quillThing.getText().length>20){
        statement += quillThing.root.innerHTML
    }
    if(quillCorpuses.getText().length>20){
        statement += quillCorpuses.root.innerHTML
    }
    if(quillConclusion.getText().length>20){
        statement += quillConclusion.root.innerHTML
    }
    //statement = statement.replaceAll('<p><br></p>', '')
    document.querySelector('#report').innerHTML = statement.replaceAll('<p><br></p>', '')
    numerarImage()
    listar()
}    
//********************** Exibe Janela de Edição */
export function showModal(element_, withfocus=''){
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
function numerarImage(){
    let imgIndex = 1
    let im = document.querySelectorAll('#report>.legenda')    
    im.forEach(elementImg=>{
        elementImg.innerHTML=`Figura ${imgIndex} - ${elementImg.textContent}`
        imgIndex++
        })
}
function listar(){
    let n2 = 1
    let n3 = 1
    let div = document.querySelector('#report')
    for(let i=0; i<div.children.length; i++){
        let element = div.children[i]
        if(element.tagName=='H2'){
            element.innerHTML = `<span class='numbertitle'>${n2}.</span> ${element.textContent}`
            n2++
            n3 = 1
        }
        if(element.tagName=='H3'){
            element.innerHTML = `<span class='numbertitle'>${n2-1}.${n3}.</span> ${element.textContent}`
            n3++
        }
        //console.log(div.children[i].tagName)
    }    
}
function ativarImagem(){
    alert('teste')
}