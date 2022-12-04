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
        this.cropX1 = 0
        this.cropX2 = 0
        this.cropY1 = 0
        this.cropY2 = 0
        this.crop = false
        this.formCaller = ''
        this.indexText = 0
        this.quillPanel
    }
    set width(newWidth){
        this._width = newWidth
        this.__height = this._width*this.proportion
    }
    get width(){
        return this._width
    }
    get height(){
        return this.__height
    }
    set proportion(newProportion){
        this._proportion = newProportion
        this.__height = this.width*this.proportion
    }
    get proportion(){
        return this._proportion
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
    set crop(newCrop){
        this._crop = newCrop
    }
    get crop(){
        return this._crop
    }
    set cropX1(newCropX1){
        this._cropX1 = newCropX1
    }
    get cropX1(){
        return this._cropX1
    }
    set cropX2(newCropX2){
        this._cropX2 = newCropX2
    }
    get cropX2(){
        return this._cropX2
    }
    set cropY1(newCropY1){
        this._cropY1 = newCropY1
    }
    get cropY1(){
        return this._cropY1
    }
    set cropY2(newCropY2){
        this._cropY2 = newCropY2
    }
    get cropY2(){
        return this._cropY2
    }
    set formCaller(newFormCaller){
        this._formCaller = newFormCaller
    }
    get formCaller(){
        return this._formCaller
    }
    set indexText(newIndexText){
        this._indexText = newIndexText
    }
    get indexText(){
        return this._indexText
    }
    set quillPanel(newQuillPanel){
        this._quillPanell = newQuillPanel
    }
    get quillPanel(){
        return this._quillPanell
    }
    getMousePosition(event){
        let thisRectCanvas = this.canvas.getBoundingClientRect()
        return {
            x: event.clientX - thisRectCanvas.left,
            y: event.clientY - thisRectCanvas.top,        
        }
    }
    setMouseMove(event){
        if(this.mouseDown){
            let rectW = 0
            let rectH = 0
            let posX = this.getMousePosition(event).x
            let posY = this.getMousePosition(event).y
            console.log(`${posX} - ${posY}`)
            if(posX>this.canvas.width || posX<0 || posY>this.canvas.height || posY<0){
                this.resetAll()
                return
            }
            if(this.crop){
                rectW = posX-this.cropX1
                rectH = posY-this.cropY1
                this.ctx.strokeStyle = "#ff0000"
                this.ctx.drawImage(this.currentImg, 0, 0, this.canvas.width, this.canvas.height)
                this.ctx.strokeRect(this.cropX1, this.cropY1, rectW, rectH);
            }
        }
    }
    setMouseDown(event){
        this.mouseDown=true
        if(this.crop){
            this.cropX1=this.getMousePosition(event).x
            this.cropY1=this.getMousePosition(event).y
            //console.log(`${this.cropX1} - ${this.cropY1}`)
        }
    }
    setMouseUp(event){
        if(this.crop){
            this.cropX2=this.getMousePosition(event).x
            this.cropY2=this.getMousePosition(event).y
            console.log(`${this.cropX1} - ${this.cropY1} - ${this.cropX2} - ${this.cropY2}`)
            this.toCrop()
        }
        this.resetAll()
    }
    mouseClick(){
        //alert('clicou')
    }
    toDecrease(){
        if(this.canvas.width>100){
            this.canvas.width=this.canvas.width-60
            this.canvas.height = this.canvas.width*this.proportion
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(this.currentImg, 0, 0, this.canvas.width, this.canvas.height)
        }
    }
    toIncrease(){
        if(this.canvas.width<700 && this.canvas.height<450){
            this.canvas.width=this.canvas.width+60
            this.canvas.height = this.canvas.width*this.proportion
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(this.currentImg, 0, 0, this.canvas.width, this.canvas.height)
        }
    }
    resetAll(){
        this.mouseDown = false
        this.mouseUp = false
        this.decrease = false
        this.increase = false
        this.crop = false
    }
    selecionarImagem(files){
        if(files.length>0){
            //let ctx = cvs.getContext('2d')
            this.selectedFileinWE = files[0]
            const readFile = new FileReader()
            readFile.onload = (textImg)=>{
                let imagemBase64 = textImg.target.result
                this.fullImg.src = imagemBase64
                let promise = new Promise(()=>{
                    this.fullImg.onload = ()=>{
                        this.currentImg.src = this.fullImg.src
                        this.width = this.currentImg.width
                        this.proportion = this.currentImg.height/this.currentImg.width
                        if(this.currentImg.width>700){
                            this.canvas.width = 700
                        }else{
                            this.canvas.width = this.currentImg.width
                        }                       
                        this.canvas.height = this.canvas.width*this.proportion
                        this.toFit(this.canvas.width, this.canvas.height)
                        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                        this.ctx.drawImage(this.currentImg, 0, 0, this.canvas.width, this.canvas.height)
                    }
                })
            }    
            readFile.readAsDataURL(this.selectedFileinWE)         
        }else{
            alert('Nenhuma Imagem selecionada.')
        }
    }
    toFit(x, y){
        if(y>400){
            this.canvas.height = 450
            this.canvas.width = 450/this.proportion
        }
    }
    toCrop(){
        let w = this.cropX2-this.cropX1
        let h = this.cropY2-this.cropY1
        let imgX = this.cropX1/this.canvas.width*this.currentImg.width
        let imgY = this.cropY1/this.canvas.height*this.currentImg.height
        let imgW = w/this.canvas.width*this.currentImg.width
        let imgH = h/this.canvas.height*this.currentImg.height
        this.proportion = h/w
        this.canvas.width = 700
        this.canvas.height = 700*this.proportion
        this.toFit(this.canvas.width, this.canvas.height)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(this.currentImg, imgX, imgY, imgW, imgH, 0, 0, this.canvas.width, this.canvas.height)
        this.currentImg.src = this.canvas.toDataURL()
    }
    toFullImg(){
        this.proportion = this.fullImg.height/this.fullImg.width
        this.currentImg.src=this.fullImg.src
        this.canvas.width = 700
        this.canvas.height = 700*this.proportion
        this.toFit(this.canvas.width, this.canvas.height)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(this.currentImg, 0, 0, this.canvas.width, this.canvas.height)
    }
}