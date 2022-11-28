import { pretyyCaptalize } from "./functions.mjs"

export class Piece{
    constructor(){
        this.type
    }
    set type(newType){
        this._type = pretyyCaptalize(newType)
    }
    get type(){
        return this._type
    }
}