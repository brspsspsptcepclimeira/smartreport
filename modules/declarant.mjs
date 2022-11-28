import { pretyyCaptalize } from "./functions.mjs"

export class Declarant{
    constructor(name){
        this.name = name
        this.qualification = ''
        this.statement = ''
    }
    set name(newName){
        this._name = pretyyCaptalize(newName)
    }
    get name(){
        return this._name
    }
    set qualification(newQualification){
        this._qualification = newQualification
    }
    get qualification(){
        return this._qualification.trim()
    }
    set statement(newStatement){
        this._statement = newStatement.trim()
    }
    get statement(){
        return this._statement
    }
}