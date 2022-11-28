import { pretyyCaptalize } from "./functions.mjs";

export class Corpuses{
    constructor(){
        this.name = ''
        this.age = ''
        this.sex = ''
        this.description = ''
    }
    set name(newName){
        this._name = pretyyCaptalize(newName)
    }
    get name(){
        return this._name
    }
    set age(newAge){
        this._age = newAge.trim()
    }
    get age(){
        return this._age
    }
    set sex(newSex){
        this._sex = newSex.trim()
    }
    get sex(){
        return this._sex
    }
    identify(){
        return `Corpo apresentado como sendo de ${this.name}, pessoa do sexo ${this.sex}, que quando em vida atingiu a idade de ${this.age} anos.`
    }
}