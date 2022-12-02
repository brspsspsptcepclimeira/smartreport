import { pretyyCaptalize } from "./functions.mjs"

export class Veicle{
    constructor(){
        this.tipo = ''
        this.marca = ''
        this.modelo = ''
        this.cor = ''
        this.placa = ''
        this.placaFake = ''
        this.isMecosul = false
        this.chassi = ''
        this.chassiFake = ''
        this.isChassi17 = true
        this.motor = ''
        this.motorFake = ''
        this.cambio = ''
        this.cambioFake = ''
        this.posicaoEmbate = ''
        this.danos = ''
        this.pneus = ''
        this.sistemas = ''
    }
    set tipo(newTipo){
        this._tipo = pretyyCaptalize(newTipo)
    }
    get tipo(){
        return this._tipo
    }
    set marca(newMarca){
        this._marca = pretyyCaptalize(newMarca)
    }
    get marca(){
        return this._marca
    }
    set modelo(newModelo){
        this._modelo = newModelo
    }
    get modelo(){
        return this._modelo
    }
    set cor(newCor){
        this._cor = pretyyCaptalize(newCor)
    }
    get cor(){
        return this._cor
    }
    set placa(newPlaca){
        this._placa = newPlaca.trim().toUpperCase()
        let numbers = 0
        for(let i=0; i<=newPlaca.length; i++){
            if(newPlaca[i] >= 0 && newPlaca[i] <= 9){
                numbers++
            }
            if(numbers == 3){
                this.isMecosul = true
            }else{
                this.isMecosul = false
            }
        }
    }
    get placa(){
        return this._placa
    }
    set placaFake(newPlacaFake){
        this._placaFake = newPlacaFake.trim()
    }
    get placaFake(){
        return this._placaFake
    }
    set chassiFake(newChassiFake){
        this._chassiFake = newChassiFake.trim()
    }
    get chassiFake(){
        return this._chassiFake
    }
    set chassi(newChassi){
        this._chassi = newChassi.trim().toUpperCase()
        if(newChassi.trim().length!=17){
            this.isChassi17 = false
        }
    }
    get chassi(){
        return this._chassi
    }
    set motor(newMotor){
        this._motor = newMotor.trim().toUpperCase()
    }
    get motor(){
        return this._motor
    }
    set motorFake(newMotorFake){
        this._motorFake = newMotorFake.trim().toUpperCase()
    }
    get motorFake(){
        return this._motorFake
    }
    set cambio(newCambio){
        this._cambio = newCambio.trim().toUpperCase()
    }
    get cambio(){
        return this._cambio
    }
    set cambioFake(newCambioFake){
        this._cambioFake = newCambioFake.trim().toUpperCase()
    }
    get cambioFake(){
        return this._cambioFake
    }
    set posicaoEmbate(newPosicaoEmbate){
        this._posicaoEmbate = newPosicaoEmbate.trim()
    }
    get posicaoEmbate(){
        return this._posicaoEmbate
    }
    set danos(newDanos){
        this._danos = newDanos
    }
    get danos(){
        return this._danos
    }
    set pneus(newPneus){
        this._pneus = newPneus
    }
    get pneus(){
        return this._pneus
    }
    set sistemas(newSistemas){
        this._sistemas = newSistemas
    }
    get sistemas(){
        return this._sistemas
    }
}


//************** Testes  */

const carro = new Veicle
carro.tipo = 'automóvel'
carro.marca = 'fiat'
carro.modelo = 'Pálio'
carro.cor = 'amarelo'
carro.placa = 'dup-4i98'
carro.chassi = 'sdf345tre12a34362'
carro.motor = 'asdhgf123'
carro.placaFake = 'wer9874'
carro.chassiFake = '12345678976544'
carro.motorFake = 'motorfake123'
carro.cambio = 'cambio'
carro.cambioFake = 'cambiofake'

//console.log(`${carro.isMecosul}\n${carro.tipo}\n${carro.marca}\n${carro.modelo}\n${carro.placa}\n${carro.chassi}\n${carro.isChassi17}\n${carro.placaFake}\n${carro.chassiFake}\n${carro.motorFake}\n${carro.cambio}\n${carro.cambioFake}`)