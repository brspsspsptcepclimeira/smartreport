export class Img{
    constructor(){
        this.canvas = document.createElement('canvas')
        this.width = 0
        this.proportion = 0
        this.mouseDown = false
        this.mouseUp = true
        this.resize = false
        this.selectedFileinWE = ''
        this.fullImg = document.createElement('img')
        this.currentImg = document.createElement('img')
        this.cropX1 = 0
        this.cropX2 = 0
        this.cropY1 = 0
        this.cropY2 = 0
        this.lastMousePopsition = 0
        this.colorLine = '#000000'
        this.crop = false
        this.elipse = false
        this.formCaller = ''
        this.indexText = 0
        this.quillPanel
        this.imgList = []
        this.currentIndex = 0
        this.line = false
        this.marck = false
        this.marckNumber = 1
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
        this.counter = 0
        this._mouseDown = newMouseDown
    }
    get mouseDown(){
        return this._mouseDown
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
    set currentImg(newCurrentImg){
        this._currentImg = newCurrentImg
    }
    get currentImg(){
        return this._currentImg
    }
    set colorLine(newColorLine){
        this._colorLine = newColorLine
    }
    get colorLine(){
        return this._colorLine
    }
    set crop(newCrop){
        this._crop = newCrop
    }
    get crop(){
        return this._crop
    }
    set elipse(newElipse){
        this._elipse = newElipse
    }
    get elipse(){
        return this._elipse
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
    set lastMousePopsition(newLastMousePosition){
        this._lastMousePOsition = newLastMousePosition
    }
    get lastMousePopsition(){
        return this._lastMousePOsition
    }
    set resize(newResize){
        this._resize = newResize
    }
    get resize(){
        return this._resize
    }
    set currentIndex(newCurrentIndex){
        this._currenteIndex = newCurrentIndex
    }
    get currentIndex(){
        return this._currenteIndex
    }
    set line(newLine){
        this._line = newLine
        this.ctx.setLineDash([])
    }
    get line(){
        return this._line
    }
    set marck(newMarck){
        this._marck = newMarck
    }
    get marck(){
        return this._marck
    }
    set marckNumber(newMarckNumber){
        this._marckNumber = newMarckNumber
    }
    get marckNumber(){
        return this._marckNumber
    }
    getMousePosition(event){
        let thisRectCanvas = this.canvas.getBoundingClientRect()
        return {
            x: event.clientX - thisRectCanvas.left,
            y: event.clientY - thisRectCanvas.top, 
            X: event.clientX,       
        }
    }
    setMouseMove(event){
        if(this.mouseDown){
            let rectW = 0
            let rectH = 0
            let posX = this.getMousePosition(event).x
            let posY = this.getMousePosition(event).y
            //console.log(`${posX} - ${posY}`)
            if(posX>this.canvas.width || posX<0 || posY>this.canvas.height || posY<0){
                this.resetAll()
                return
            }
            if(this.resize){
                this.counter++
                if(posX>this.lastMousePopsition-1){
                    this.toIncrease()
                }else if ((posX<this.lastMousePopsition+1)){
                    this.toDecrease()
                }
            console.log(`${posX} - ${this.lastMousePopsition}`) 
            if(this.counter>5){
                this.lastMousePopsition = posX
                this.counter = 0
                }
            }
            if(this.crop){
                rectW = posX-this.cropX1
                rectH = posY-this.cropY1
                this.ctx.strokeStyle = '#aa2210'
                this.ctx.setLineDash([4, 2])
                this.ctx.drawImage(this.currentImg, 0, 0, this.canvas.width, this.canvas.height)
                this.ctx.strokeRect(this.cropX1, this.cropY1, rectW, rectH);
            }
            if(this.elipse){
                rectW = posX-this.cropX1
                rectH = posY-this.cropY1
                this.ctx.strokeStyle = this.colorLine
                this.ctx.setLineDash([4, 2])
                this.ctx.drawImage(this.currentImg, 0, 0, this.canvas.width, this.canvas.height)
                this.drawEllipse(this.ctx, this.cropX1, this.cropY1, rectW, rectH)
            }
            if(this.line){
                let x0 = this.cropX1
                let y0 = this.cropY1
                this.ctx.strokeStyle = this.colorLine
                this.ctx.drawImage(this.currentImg, 0, 0, this.canvas.width, this.canvas.height)
                this.ctx.beginPath();
                this.ctx.moveTo(x0, y0);
                this.ctx.lineTo(posX, posY)
                this.ctx.stroke()
                console.log(`${x0} - ${y0} - ${posX} - ${posY}`)
                //this.drawArrow(x0, y0, this.posX, this.posY, 3)
            }
        }
    }
    setMouseDown(event){
        this.mouseDown=true
        if(this.crop || this.elipse || this.line){
            this.lastMousePopsition = this.getMousePosition(event).X
            this.cropX1=this.getMousePosition(event).x
            this.cropY1=this.getMousePosition(event).y
            //console.log(`${this.cropX1} - ${this.cropY1}`)
        }
    }
    setMouseUp(event){
        this.cropX2=this.getMousePosition(event).x
        this.cropY2=this.getMousePosition(event).y
        if(this.crop){
            this.toCrop()
            this.line=false
            this.marck = false
        }
        if(this.line){
            this.drawArrow(this.cropX2, this.cropY2, this.cropX1, this.cropY1, 2)
            this.crop = false
            this.marck = false
        }
        if(this.marck){
            /* this.ctx.fillStyle = this.colorLine;
            this.ctx.font = '14pt Arial';
            this.ctx.textAlign = "center"
            this.ctx.fillText(this.marckNumber, this.cropX2, this.cropY2);
            this.marckNumber++
            this.crop = false
            this.line = false */
            //this.toWrite()
        }
        if(this.crop || this.elipse || this.line){
            this.currentImg.src = this.canvas.toDataURL()
            this.imgList.push(this.currentImg.src)
            this.currentIndex = this.imgList.length-1
        }
        this.resetAll()
    }
    mouseClick(event){
        /* this.cropX1=this.getMousePosition(event).x
        this.cropY1=this.getMousePosition(event).y
        if(this.marck){
            this.ctx.font = '48px serif';
            this.ctx.fillText('Hello world', posX, posY);
            this.marck = false
        } */
    }
    toDecrease(){
        if(this.canvas.width>200){
            this.canvas.width=this.canvas.width-1
            this.canvas.height = this.canvas.width*this.proportion
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(this.currentImg, 0, 0, this.canvas.width, this.canvas.height)
        }
    }
    toIncrease(){
        if(this.canvas.width<700 && this.canvas.height<450){
            this.canvas.width=this.canvas.width+1
            this.canvas.height = this.canvas.width*this.proportion
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(this.currentImg, 0, 0, this.canvas.width, this.canvas.height)
        }
    }
    resetAll(){
        this.mouseDown = false
        this.mouseUp = false
        this.resize = false
        this.crop = false
        this.elipse = false
        this.line = false
        this.marck = false
    }
    selecionarImagem(files){
        if(files.length>0){
            this.imgList=[]
            this.selectedFileinWE = files[0]
            const readFile = new FileReader()
            readFile.onload = (textImg)=>{
                let imagemBase64 = textImg.target.result
                this.fullImg.src = imagemBase64
                let promise = new Promise(()=>{
                    this.fullImg.onload = ()=>{
                        this.imgList.push(this.fullImg.src)
                        this.currentIndex =0
                        this.currentImg.src = this.imgList[this.currentIndex]
                        this.width = this.currentImg.width
                        this.proportion = this.currentImg.height/this.currentImg.width
                        /* if(this.currentImg.width>700){
                            this.canvas.width = 700
                        }else{
                            this.canvas.width = this.currentImg.width
                        }                        
                        this.canvas.height = this.canvas.width*this.proportion*/
                        this.toFit(this.canvas.width, this.canvas.height)
                        this.canvas.height = this.canvas.width*this.proportion
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
        let thisX = x
        let thisY = y
        while(thisY>1000){
            thisX--
            thisY = thisX*this.proportion
        }
        this.canvas.width=thisX
        this.canvas.height=thisY
        /* if(y>1000){
            this.canvas.height = 1000
            this.canvas.width = 1000/this.proportion
        } */
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
    drawEllipse(ctx, x, y, w, h) {
        var kappa = .5522848,
            ox = (w / 2) * kappa, // control point offset horizontal
            oy = (h / 2) * kappa, // control point offset vertical
            xe = x + w,           // x-end
            ye = y + h,           // y-end
            xm = x + w / 2,       // x-middle
            ym = y + h / 2;       // y-middle
      
        ctx.beginPath();
        ctx.moveTo(x, ym);
        ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
        ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
        ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
        //ctx.closePath(); // not used correctly, see comments (use to close off open path)
        ctx.stroke();
      }
    /*   drawLine(){
        if(this.line){
            let x0 = this.cropX1
            let y0 = this.cropY1
            console.log(`${x0} - ${y0}`)
        }        
      } */
    changeImg(up, down){
        const max = this.imgList.length-1
        if(!up && !down){
            console.log(`Retornando: Índice atual = ${this.currentIndex} de ${max} elementos.`)
            return
        }
        if(up && (0<=this.currentIndex && this.currentIndex<max)){
            this.currentIndex++
            console.log(`Subindo: Índice atual = ${this.currentIndex} de ${max} elementos.`)
        }else if(down && (this.currentIndex>0)){
            this.currentIndex--
            console.log(`Descendo: Índice atual = ${this.currentIndex} de ${max} elementos.`)            
        }
        this.currentImg.src = this.imgList[this.currentIndex]
        this.proportion = this.currentImg.height/this.currentImg.width
        this.canvas.width = 700
        this.canvas.height = 700*this.proportion
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.toFit(this.canvas.width, this.canvas.height)
        this.ctx.drawImage(this.currentImg, 0, 0, this.canvas.width, this.canvas.height)
    }
    drawArrow(fromx, fromy, tox, toy, arrowWidth){
        //variables to be used when creating the arrow
        var headlen = 10;
        var angle = Math.atan2(toy-fromy,tox-fromx);
     
        //this.ctx.save();
        this.ctx.strokeStyle = this.colorLine;
        this.ctx.drawImage(this.currentImg, 0, 0, this.canvas.width, this.canvas.height)
        //starting path of the arrow from the start square to the end square
        //and drawing the stroke
        this.ctx.beginPath();
        this.ctx.moveTo(fromx, fromy);
        this.ctx.lineTo(tox, toy);
        this.ctx.lineWidth = arrowWidth;
        this.ctx.stroke();
     
        //starting a new path from the head of the arrow to one of the sides of
        //the point
        this.ctx.beginPath();
        this.ctx.moveTo(tox, toy);
        this.ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),
                   toy-headlen*Math.sin(angle-Math.PI/7));
     
        //path from the side point of the arrow, to the other side point
        this.ctx.lineTo(tox-headlen*Math.cos(angle+Math.PI/7),
                   toy-headlen*Math.sin(angle+Math.PI/7));
     
        //path from the side point back to the tip of the arrow, and then
        //again to the opposite side point
        this.ctx.lineTo(tox, toy);
        this.ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),
                   toy-headlen*Math.sin(angle-Math.PI/7));
     
        //draws the paths created above
        this.ctx.stroke();
        this.ctx.restore();
        console.log('certo')
    }
    toWrite(textLabel){
        this.ctx.fillStyle = this.colorLine;
        this.ctx.font = '14pt Arial';
        this.ctx.textAlign = "center"
        this.ctx.fillText(textLabel, this.cropX2, this.cropY2)
        this.currentImg.src = this.canvas.toDataURL()
        this.imgList.push(this.currentImg.src)
        this.currentIndex = this.imgList.length-1
    }
}