import { formatMilhar, formatDate, pretyyCaptalize } from './functions.mjs'
import { Declarant } from './declarant.mjs'
import { Place } from './place.mjs'
import { Veicle } from './veicles.mjs'
import { Piece } from './pieces.mjs'
import { Corpuses } from './corpuses.mjs'

export class Report{
    constructor(rawNumber){
        this.designatedDate = new Date()
        this.number = rawNumber
        this.city = 'Limeira'
        this.director = 'Samuel Alves de Melo Neto'
        this.directorGender = 0
        this.expert = 'Marcos Capristo'
        this.expertGender = 0
        this.delegate = 'Rodrigo Rodrigues'
        this.delegateGender = 0
        this.delegatePresent = false
        this.rdo = ''
        this.chamber = 'Del. Sec. Limeira Plantão'
        this.objective = 'realizar exame inicial'
        this.nature = ''
        this.reportedAs = ''
        this.questions = []
        this.executionDate = new Date() //Desenvolver
        this.executionHour = '12h00'
        this.ftp = ''
        this.ftpGender = 0
        //this.executionChamber= ''
        //this.executionCity = 'Limeira'
        this.executionPlace = ''
        this.garrison = ''
        this.delegatePresent = false
        //this.declarants = []
        this.informs = ''
        //this.places = []
        this.place = ''
        //this.veicles = []
        this.veicle = ''
        //this.pieces = []
        this.piece = ''
        //this.corpuses = []
        this.corpuse = ''
        this.conclusion = ''
    }
    set number(newNumber){
        this._number = formatMilhar(newNumber)
    }
    get number(){
        return(this._number)
    }
    set designatedDate(newDate){
        let myDate = typeof newDate === 'string' ? new Date( newDate.replace(/-/g, '\/')) : newDate
        this._designatedDate = formatDate(myDate)
        this._year = new Date(myDate).getFullYear()
    }
    get designatedDate(){
        return this._designatedDate
    }
    get year(){
        return this._year
    }
    set city(newCity){
        this._city = pretyyCaptalize(newCity)
    }
    get city(){
        return this._city
    }
    set director(newDirector){
        this._director = pretyyCaptalize(newDirector)
    }
    get director(){
        return this._director
    }
    set directorGender(newDirectorGender){
        this._directorGender = newDirectorGender
    }
    get directorGender(){
        return this._directorGender
    }
    set expert(newExpert){
        this._expert = pretyyCaptalize(newExpert)
    }
    get expert(){
        return this._expert
    }
    set expertGender(newExepertGender){
        this._expertGender = newExepertGender
    }
    get expertGender(){
        return this._expertGender
    }
    set delegate(newDelegate){
        this._delegate = pretyyCaptalize(newDelegate)
    }
    get delegate(){
        return this._delegate
    }
    set delegateGender(newDelegateGender){
        this._delegateGender = newDelegateGender
    }
    get delegateGender(){
        return this._delegateGender
    }
    set rdo(newRdo){
        this._rdo = newRdo.trim().toUpperCase()
    }
    get rdo(){
        return this._rdo
    }
    set chamber(newChamber){
        this._chamber = pretyyCaptalize(newChamber)
    }
    get chamber(){
        return this._chamber
    }
    set objective(newObjective){
        this._objective = newObjective.trim()
    }
    get objective(){
        return this._objective
    }
    set nature(newNature){
        this._nature = newNature.trim()
    }
    get nature(){
        return this._nature
    }
    set reportedAs(newReportedAs){
        this._reportedAs = newReportedAs
    }
    get reportedAs(){
        return this._reportedAs
    }
    set executionDate(newDate){
        let myDate = typeof newDate === 'string' ? new Date( newDate.replace(/-/g, '\/')) : newDate
        this._designatedDate = formatDate(myDate)
    }
    get executionDate(){
        return this._designatedDate
    }
    set executionHour(newHour){
        this._executionHour = newHour.trim()
    }
    get executionHour(){
        return this._executionHour
    }
    set ftp(newFtp){
        this._ftp = pretyyCaptalize(newFtp)
    }
    get ftp(){
        return this._ftp
    }
    set ftpGender(newFtpGender){
        this._ftpGender = newFtpGender
    }
    get ftpGender(){
        return this._ftpGender
    }
   /*  set executionChamber(newExecutionChamber){
        this._executionChamber = pretyyCaptalize(newExecutionChamber)
    }
    get executionChamber(){
        return this._executionChamber
    } */
    /* set executionCity(newExecutionCity){
        this._executionCity = pretyyCaptalize(newExecutionCity)
    }
    get executionCity(){
        return this._executionCity
    } */
    set executionPlace(newExecutionPlace){
        this._executionPlace = newExecutionPlace.trim()
    }
    get executionPlace(){
        return this._executionPlace
    }
    set garrison(newGarrison){
        this._garrison = newGarrison.trim()
    }
    get garrison(){
        return this._garrison
    }
    set informs(newInforms){
        this._informs = newInforms.trim()
    }
    get informs(){
        return this._informs
    }
    set place(newPlace){
        this._place = newPlace.trim()
    }
    get place(){
        return this._place
    }
    set veicle(newVeicle){
        this._veicle = newVeicle.trim()
    }
    get veicle(){
        return this._veicle
    }
    set piece(newPiece){
        this._piece = newPiece.trim()
    }
    get piece(){
        return this._piece
    }
    set corpuse(newCorpuse){
        this._corpuse = newCorpuse.trim()
    }
    get corpuse(){
        return this.corpuse
    }
    writeHeader(){
        const statement =  `<p class='class-header'><strong>SECRETARIA DA SEGURANÇA PÚBLICA</strong></p><p class='class-header'><strong>SUPERINTENDÊNCIA DA POLÍCIA TÉCNCIO-CIENTÍFICA</strong></p><p  class='class-header'>INSTITUTO DE CRIMINALÍSTICA</p><P  class='class-header'>PERITO CRIMINAL DR. OCTÁVIO DE BRITO ALVARENGA</P><p class='class-header'>NÚCLEO DE AMERICANA (LIM)</p>`
        return ''
    }
    writeFullReportNumber(){
        return `Laudo ${this.number}/${this.year}`
    }
    writePreamble(){
        const designatedDate = this.designatedDate
        const city = this.city 
        let director = this.director
        if(this.directorGender==0){
            director = `pelo Diretor deste Instituto de Criminalística, Dr. ${director}`
        }else if(this.directorGender==1){
            director = `pela Diretora deste Instituto de Criminalística, Dra. ${director}`
        }else{
            director = `pelo(a) Diretor(a) deste Instituto de Criminalística, Dr(a). ${director}`
        }
        let expert = this.expert
        if(this.expertGender==0){
            expert = `designado o Perito Criminal ${expert}`
        }else if(this.expertGender==1){
            expert = `designada a Perita Criminal ${expert}`
        }else{
            expert = `designado(a) o(a) Perito(a) Criminal ${expert}`
        }
        let delegate = this.delegate
        if(this.delegateGender==0){
            delegate = `o Delegado de Polícia Dr. ${delegate}`
        }else if(this.delegateGender==1){
            delegate = `a Delegada de Polícia Dra. ${delegate}`
        }else{
            delegate = `o(a) Delegado(a) de Polícia Dr(a). ${delegate}`
        }
        return `Em ${designatedDate}, na cidade de ${city} e no Instituto de Criminalística, da Superintendência da Polícia Tecnico-Científica, da Secretaria de Segurança Pública do Estado de São Paulo, em conformidade com o disposto no art. 178 do Decreto-Lei 3689 de 03-10-1941 e Decreto-Lei 42847 de 09-02-1998, ${director}, foi ${expert} para proceder ao Exame Pericial especificado em requisição de exame assinada pela Autoridade Policial, ${delegate}.`
    }
    writeObjective(){
        let rdo = this.rdo
        if(rdo.length<6){
            rdo = `recebida via telefonema e e-mail`
        }else{
            rdo = `referente ao ${rdo}/${this.year}`
        }
        const chamber = this.chamber
        const objective = this.objective
        const nature = this.nature
        let reportedAs = this.reportedAs
        if(reportedAs.length<15){
            reportedAs = ''
        }else{
            reportedAs = `, ${reportedAs}`
        }
        let questions = ''
        if(this.questions.length<1){
            questions = '.</p>'
        }else{
            questions = `, e visava dar resposta aos seguintes quesitos:</p>`
            for (let i=0; i<this.questions.length; i++){
                questions += `<p class='i-questions'>${i+1}. ${this.questions[i]}</p>`
            }
            //questions += '</ol>'
        }
        return `<h2 class='class-subtitle2'>Objetivo</h2><p class = 'class-paragraph'>O objetivo do exame pericial, em conformidade com a requisição ${rdo} - ${chamber}, era ${objective}, sendo sua natureza, ${nature}${reportedAs}${questions}`
    }
    writeHistoric(index){
        const date = this.executionDate
        const hour = this.executionHour
        let expert = this.expert
        if(this.expertGender==0){
            expert += ', perito criminal,'
        }else if(this.expertGender==1){
            expert += `, perita criminal,`
        }
        let ftp = ` e ${this.ftp}`
        if(this.ftpGender==0){
            ftp += ', fotógrafo técnico pericial'
        }else if(this.ftpGender==1){
            ftp += ', fotógrafa técnica pericial'
        }else{
            ftp = 'dirigiu-se'
        }
        const typeLocal = this.executionTypePlace
        //const city = this.executionCity
        //const local = this.executionPlace
        const garrison = this.garrison
        let delegatePresent = ''
        if(this.delegatePresent){
            let delegate = this.delegate
            if(this.delegateGender==1){
                delegate = `A Delegada de Polícia, Dra. ${delegate}`
            }else{
                delegate = `O Delegado de Polícia, Dr. ${delegate}`
            }
            delegatePresent = `<p class = 'class-paragraph'>${delegate}, presente ao local, acompanhou o exame pericial.</p>`
        }
        let returnList = [] //0-Externo, 1-EPC, 2-Delpol, 3-Pátio
        returnList.push(`Em ${date} às ${hour}, ${expert} ${ftp}, dirigiram-se ao local indicado, ${typeLocal}, e realizaram o exame requisitado. ${garrison}`)
        returnList.push(`Em ${date} às ${hour}, ${expert} ${ftp}, procederam ao exame do veículo apresentado na base da ${typeLocal}.`)
        returnList.push(`Em ${date} às ${hour}, ${expert} ${ftp}, dirigiram-se ${typeLocal} e procederam ao exame requisitado. Quando da chegada da equipe, servidores indicaram o veículo a ser examinado.`)
        returnList.push(`dirigiram-se ao ${typeLocal} e proccederam ao exame requisitado. Quando da chegada da equipe, funcionários do pátio indicaram o veículo a ser examinado`)
        let delegate = ''
        if(this.delegatePresent == true){
            if(this.delegateGender==1){
                delegate = `A delegada de polícia, Dra. ${this.delegate}, presente ao local, acompanhou o trabalho da perícia.`
            }else if(this.delegateGender==0){
                delegate = `O delegada de polícia, Dr. ${this.delegate}, presente ao local, acompanhou o trabalho da perícia.`
            }else{
                delegate = ''
            }        
        }
        return `<h2 class='class-subtitle2'>Histórico</h2><p class = 'class-paragraph'>${returnList[index]}</p><p>${delegate}</p>`
    }
    writeDeclarations(){
        if (this.informs.length<20){
            return
        }
        /* let statements = `<h2 class='class-subtitle2'>Informes</h2>`
        for(let i = 0; i<this.declarants.length; i++){
            statements += `<h3>${this.declarants[i].name} - ${this.declarants[i].qualification}</h3><p class = 'class-paragraph'>${this.declarants[i].statement}</p>`
        }
        return statements */
        return this.informs
    } 
    writePlace(){
        if(this.place.length < 20){
            return ''
        }
        /*let statement = `<h2 class='class-subtitle2'>Descrição e Exame do Local</h2>`
        if(this.places.length > 1){
            statement = `<h2 class='class-subtitle2'>Descrição e Exame dos Locais</h2>`
        }
        for(let i=0; i<this.places.length; i++){
            statement+=`<h3>${this.places[i].type} - Características e Descrição</h3><p>${this.places[i].description}</p><h3>Exame</h3><p>${this.places[i].exame}</p>`
        }
        return statement */
        return this.place
    }
    writeVeicle(){
        let statement = ''
        if(this.veicle.length<20){
            return ''
        }
        /* else if(this.veicles.length==1){
            statement = `<h2 class='class-subtitle2'>Descrição e Exame do Veículo</h2>`
        }else{
            statement = `<h2 class='class-subtitle2'>Descrição e Exame dos Veículos</h2>`
        }
        for(let i=0; i<this.veicles.length; i++){
            statement += `<h3>${this.veicles[i].tipo}, da marca ${this.veicles[i].marca}, modelo ${this.veicles[i].modelo}, na cor ${this.veicles[i].cor}</h3><p></p>`
        }
        return statement */
        return this.veicle
    }
    writePiece(){
        /* let statement = ''
        if(this.pieces.length < 1){
            return ''
        }else if(this.pieces.length == 1){
            statement = `<h2 class='class-subtitle2'>${this.pieces[0].type} - Descrição e Exame</h2>${this.pieces[0].description}`
        }else{
            statement = `<h2 class='class-subtitle2'>Descrição e Exame das Peças</h2>`
            for(let i=0; i<this.pieces.length; i++){
                statement += `<h3>${this.pieces[i].type}</h3>${this.pieces[i].description}`
            } 
        }
        return statement */
        if(this.piece<20){
            return
        }
        return this.piece
    }
    writeCorpuses(){
        /* let statement = ''
        if(this.corpuses.length < 1){
            return ''
        }else if(this.corpuses.length == 1){
            statement = `<h2 class='class-subtitle2'>Descrição e Exame do Cadáver</h2>`
        }else{
            statement = `<h2 class='class-subtitle2'>Descrição e Exame dos Cadáveres</h2>`
        }
        for(let i=0; i<this.corpuses.length; i++){
            statement += `<h3>${this.corpuses[i].identify()}</h3>${this.corpuses[i].description}`
        }         
        return statement */
        if(this.corpuse.length == 0){
            return
        }
        return this.corpuse
    }
    writeConclusion(){
        let statement = `<h2 class='class-subtitle2'>Conclusão</h2>`
        if(this.questions.length>0){
            statement += `<p class = 'class-paragraph'>Em resposta aos quesitos</p><ol>`
            for(let i=0; i<this.questions.length; i++){
                statement += `<li>${this.questions[i]}</li>`
            }
            statement += `</ol>`
        }
        return statement
    }
}


//******** TESTES ********************************************************************************************
//console.log(generateFakeReport())

export function generateFakeReport(){
    const reportFake = new Report('45789')
    reportFake.expert = 'marcos capristo'
    reportFake.delegate = 'tabajara zuliani dos santos'
    reportFake.rdo = 'rdo po9874-1'
    reportFake.nature = 'o levantamento de local de acidente de trânsito'
    reportFake.reportedAs = 'relatado como sendo a ocorrência de uma colisão frontal com uma vítima fatal'
    reportFake.questions = ['houve crime? ', 'É possível determinar a velocidade de marcha dos veículos?', 'É possível determinar quem deu causa ao acidente?']
    reportFake.designatedDate = '12-2-2018'
    reportFake.executionHour = '14h00'
    reportFake.ftp='regis fernando de oliveira'
    reportFake.executionTypePlace = 'um trecho da rodovia Anhanguera'
    reportFake.executionPlace = 'na pista Sul, na altura do km 125'
    reportFake.garrison = 'Quando da chegada da equipe, a Polícia Militar, representada na pessoa do Cabo PM Carvalho, guarnecia o local, deu informes e acompanhou o exame.'
    reportFake.delegatePresent = true
    //const marcelo = new Declarant('MARCELO DE OLIVEIRA CAPRISTO')
    //marcelo.qualification = 'Proprietário do Imóvel'
    //marcelo.statement = 'Declarou que estava em sua residência quando percebeu que coisas estranhas estavam acontecendo.'
    //const maria = new Declarant('MARIA DAS DORES E SILVA')
    //maria.qualification = 'Condutora do veículo automotor'
    //maria.statement = 'Declarou que conduzia seu veículo pela pista Sul, na faixa da direita, quando foi surpreendida pela passagem da motocicleta que vinha do acostamento.'
    //reportFake.declarants.push(marcelo, maria)
    /* const imovel = new Place
    imovel.type = 'Imóvel Residencial'
    imovel.description = 'Edificado em área urbana, de esquina, térreo, vedado em sua parte frontal por muro de alvenaria encimado por ofendículos do tipo ponta de lança, com um portão basculante instalado em sua parte frontal. Possuia dois quartos, uma cozinha, um banheiro e uma sala de estar.'
    imovel.exame = 'Por sobre o muro, na direção do portão basculante, havia manchas de sujidade compatíveis com apoio de dedos. A porta de acesso à sala se encontrava rompida. As janelas dos demais cômodos apresentavam sinais de arrombamento. No interior da casa, por sobre o piso, havia pegadas compatíveis com calçado número 42.'
    const via = new Place
    via.type = 'Via Pública'
    via.description = 'Rua de mão única, que se desenvolvia em sentido retilíneo e em leve aclive na direção Norte, encontrava-se em bom estado de conservação, com sinalização adequada e iluminação pública operante.'
    via.exame = 'Por sobre o pavimento asfáltico havia manchas hemáticas compatíveis com gotejamento dinâmico sucessivo, formando uma trilha sinuosa em direção ao calçamento do passeio à direita da via.'
    reportFake.places.push(imovel, via)
    const carro = new Veicle
    carro.tipo = `automóvel`
    carro.marca = `fiat`
    carro.modelo = `pálio`
    carro.cor = 'prata'
    const moto = new Veicle
    moto.tipo = `motocicleta`
    moto.marca = `Honda`
    moto.modelo = `CG 125`
    moto.cor = 'preta'
    reportFake.veicles.push(carro, moto)
    const faca = new Piece
    faca.type = `faca de mesa`
    faca.description = `faca constituída de um cabo e uma lâmina` 
    const cadeado = new Piece
    cadeado.type = 'Cadeado'
    cadeado.description = 'Cadeado com chave provido de gancho metálico.'
    reportFake.pieces.push(faca, cadeado)
    const joao = new Corpuses
    joao.name = `joão de oliveira das dores`
    joao.age = '32'
    joao.sex = 'masculino'
    reportFake.corpuses.push(joao) */
    return `${reportFake.writeHeader()}${reportFake.writeFullReportNumber()}${reportFake.writePreamble()}${reportFake.writeObjective()}${reportFake.writeHistoric()}${reportFake.writePlace()}${reportFake.writeVeicle()}${reportFake.writePiece()}${reportFake.writeConclusion()}`
}