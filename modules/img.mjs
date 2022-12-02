export class Img{
    constructor(){
        this.canvas = ''
        this.width = 0
        this.proportion = 0
        this.mouseDown = false
        this.mouseUp = true
        this.decrease = false
        this.increase = false
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
        console.log(event)
    }
    setMouseUp(event){
        this.resetAll()
        console.log(event)
    }
    mouseClick(){
        //alert('clicou')
    }
    toDecrease(){
        if(this.canvas.width>100){
            this.canvas.width=this.canvas.width-60
            this.canvas.height = this.canvas.width*this.proportion
        }
    }
    toIncrease(){
        if(this.canvas.width<700){
            this.canvas.width=this.canvas.width+60
            this.canvas.height = this.canvas.width*this.proportion
        }
    }
    resetAll(){
        this.mouseDown = false
        this.mouseUp = false
        this.decrease = false
        this.increase = false
    }
}