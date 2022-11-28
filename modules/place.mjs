import { pretyyCaptalize } from "./functions.mjs"

export class Place{
    constructor(){
        this.type = ''
        this.description = ''
        this.exame = ''
    }
    set type(newType){
        this._type = pretyyCaptalize(newType) 
    }
    get type(){
        return this._type
    }
    set description(newDescription){
        this._description = newDescription.trim()
    }
    get description(){
        return this._description
    }
    set exame(newExame){
        this._exame = newExame.trim()
    }
    get exame(){
        return this._exame
    }
}