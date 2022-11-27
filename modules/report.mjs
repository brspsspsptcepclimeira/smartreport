import { formatMilhar, formatDate, pretyyCaptalize as pretyyCaptalize } from './functions.mjs'
import { Declarant } from './declarant.mjs'
import { generateFakeReport } from './document.mjs'

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
        this.executionTypePlace = ''
        this.executionCity = 'Limeira'
        this.executionPlace = ''
        this.declarants = []
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
    set executionTypePlace(newExecutionTypePlace){
        this._executionTypePlace = newExecutionTypePlace.trim()
    }
    get executionTypePlace(){
        return this._executionTypePlace
    }
    set executionCity(newExecutionCity){
        this._executionCity = pretyyCaptalize(newExecutionCity)
    }
    get executionCity(){
        return this._executionCity
    }
    set executionPlace(newExecutionPlace){
        this._executionPlace = newExecutionPlace.trim()
    }
    get executionPlace(){
        return this._executionPlace
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
        return `Em ${designatedDate}, na cidade de ${city} e no Instituto de Criminalística, da Superintendência da Polícia Técnico-Científica, da Secretaria de Segurança Pública do Estado de São Paulo, em conformidade com o disposto no art. 178 do Decreto-Lei 3689 de 3-10-1941 e Decreto-Lei 42847 de 9-2-1998, ${director}, foi ${expert} para proceder ao Exame Pericial especificado em requisição de exame assinada pela Autoridade Policial, ${delegate}.`
    }
    writeObjective(){
        let rdo = this.rdo
        if(rdo.trim()==''){
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
            questions = '.'
        }else{
            questions = `, e visava dar resposta aos seguintes quesitos:`
            for (let i=0; i<this.questions.length; i++){
                questions += `${this.questions[i]}`
            }
        }
        return `O objetivo do exame pericial, em conformidade com a requisição ${rdo} - ${chamber}, era ${objective}, sendo sua natureza, ${nature}${reportedAs}${questions}`
    }
    writeHistoric(){
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
            ftp += ', fotógrafo técnico pericial, dirigiram-se'
        }else if(this.ftpGender==1){
            ftp += ', fotógrafa técnico pericial, dirigiram-se'
        }else{
            ftp = 'dirigiu-se'
        }
        const typeLocal = this.executionTypePlace
        const city = this.executionCity
        const local = this.executionPlace
        return `Em ${date} às ${hour}, ${expert} ${ftp} ao local indicado, ${typeLocal}, situado na cidade de ${city}, ${local}, e realizaram o exame requisitado.`
    }
}


//******** TESTES ********************************************************************************************
  
createNewReport()

function createNewReport(){
    //const report = new Report('12345')
    //report.designatedDate = '11/10/2010'
    //report.nature = 'o levantamento de local de furto'
    //report.reportedAs = 'relatado como sendo uma colisão com duas vítimas fatais'
    //report.rdo ='rdo qw7894-1'
    //report.questions.push('valor1', 'valor2')
    //report.declarants.push(new Declarant('MARCELO DE OLIVEIRA CAPRISTO'), new Declarant('marcia regina de oliveira capristo'), new Declarant('fernanda e silva dos santos'))
    //console.log(report.declarants[0].name)
    //console.log(report.designatedDate)
    //console.log(report.writeFullReportNumber())
    //console.log(report.writePreamble())
    //console.log(report.writeObjective())
    //console.log(report.questions[0])
    // console.log(report.writeHistoric())
    generateFakeReport()
}