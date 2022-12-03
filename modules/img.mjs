export class Img{
    constructor(){
        this.canvas = document.createElement('canvas')
        this.width = 0
        this.proportion = 0
        this.mouseDown = false
        this.mouseUp = true
        this.decrease = false
        this.increase = false
        this.selectedFileinWE = ''
        this.fullImg = document.createElement('img')
        this.currentImg = document.createElement('img')
    }
    set width(newWidth){
        this._width = newWidth
        this.__height = this.width*this.proportion
    }
    get width(){
        return this._width
    }
    set proportion(newProportion){
        this._proportion = newProportion
        this.__height = this.width*this.proportion
    }
    get proportion(){
        return this._proportion
    }
    get height(){
        return this.__height
    }
    set canvas(newCanvas){
        this._canvas = newCanvas
    }
    get canvas(){
        return this._canvas
    }
    get ctx(){
        return this.canvas.getContext('2d')
    }
    set mouseDown(newMouseDown){
        this._mouseDown = newMouseDown
    }
    get mouseDown(){
        return this._mouseDown
    }
    set decrease(newDecrease){
        this._decrease = newDecrease
    }
    get decrease(){
        return this._decrease
    }
    set increase(newIncrease){
        this._increasee = newIncrease
    }
    get increase(){
        return this._increase
    }
    set selectedFileinWE(newSelectedFileinWE){
        this._selectedFileinWE = newSelectedFileinWE
    }
    get selectedFileinWE(){
        return this._selectedFileinWE
    }
    set fullImg(newFullImg){
        this._fullImg = newFullImg
        //this.imgBase64.src = this._fullImg
    }
    get fullImg(){
        return this._fullImg
    }

    getMousePosition(event){
        let thisRectCanvas = this.canvas.getBoundingClientRect()
        let posX = event.clientX - thisRectCanvas.left
        if(posX<10){
            this.mouseDown = false
        }
        return {
            x: posX,
            y: event.clientY - thisRectCanvas.top        
        }
    }
    setMouseDown(event){
        this.mouseDown=true
        //console.log(event)
    }
    setMouseUp(event){
        this.resetAll()
        //console.log(event)
    }
    mouseClick(){
        //alert('clicou')
    }
    toDecrease(){
        if(this.canvas.width>100){
            this.canvas.width=this.canvas.width-60
            this.canvas.height = this.canvas.width*this.proportion
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(this.fullImg, 0, 0, this.canvas.width, this.canvas.height)
        }
    }
    toIncrease(){
        if(this.canvas.width<700){
            this.canvas.width=this.canvas.width+60
            this.canvas.height = this.canvas.width*this.proportion
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(this.fullImg, 0, 0, this.canvas.width, this.canvas.height)
        }
    }
    resetAll(){
        this.mouseDown = false
        this.mouseUp = false
        this.decrease = false
        this.increase = false
    }
    selecionarImagem(files, cvs){
        if(files.length>0){
            //let ctx = cvs.getContext('2d')
            this.selectedFileinWE = files[0]
            const readFile = new FileReader()
            readFile.onload = (textImg)=>{
                let imagemBase64 = textImg.target.result
                this.fullImg.src = imagemBase64
                let promise = new Promise(()=>{
                    this.fullImg.onload = ()=>{
                        this.width = this.fullImg.width
                        this.proportion = this.fullImg.height/this.fullImg.width
                        cvs.width = 700
                        cvs.height = 700*this.proportion
                        this.ctx.clearRect(0, 0, cvs.width, cvs.height)
                        this.ctx.drawImage(this.fullImg, 0, 0, cvs.width, cvs.height)
                    }
                })
            }    
            readFile.readAsDataURL(this.selectedFileinWE)         
        }else{
            alert('Nenhuma Imagem selecionada.')
        }
    }
}