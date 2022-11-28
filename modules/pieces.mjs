import { pretyyCaptalize } from "./functions.mjs"

export class Piece{
    constructor(){
        this.type
        this.description
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
}