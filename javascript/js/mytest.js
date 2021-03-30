
//form  = ''
class Squares{

    #form // <- this
    #txtInput
    #btnInput

    divColors = ['#FF5733', '#6D8AD2', '#54B33A'] // 0, 1, 2 

    constructor(frmName, _width = 50, _height = 50){

        this._width = _width
        this._height = _height

        //console.log("constructor: x= ", x, ", y = ", y, ", z = ", z )
        console.log('form[name="', frmName,  '"]')

        this.#form = document.querySelector('form[name="' + frmName + '"]')
        this.#txtInput = this.#form.querySelector('input[type="text"]')
        this.#btnInput = this.#form.querySelector('input[type="button"]')

        this.linkEventToButton()
        this.linkEventToInput()
    }

    getInputValue(){
        console.log(this.#txtInput.value)
        return this.#txtInput.value
    }

    linkEventToButton(){
        this.#btnInput.addEventListener('click', () => {
            console.log('button clicked')
            
            this.getInputValue()

            document.write(this.drawSquare()) 
        })
    }

    linkEventToInput(){
        this.#txtInput.addEventListener('keydown', (event) => {
            //console.log(event.keyCode, " key: ", event.key)
            if ((event.keyCode < 47 || event.keyCode > 57) && event.keyCode != 8 && event.keyCode != 13)
            {
                event.preventDefault()
            } else if (event.keyCode == 13){
                document.write(this.drawSquare()) 
            } 
        
        })
    }

    drawSquare(){

        let divHTML = ''
        for (let index = 0; index < this.getInputValue(); index++) 
        {
            let div = this.generateDivObject()
            let randnomNumber = this.getRandomInt(0, this.divColors.length - 1)
            div.style.backgroundColor = this.divColors[randnomNumber]
            
            divHTML = divHTML + div.outerHTML
        }

        return divHTML
    }

    generateDivObject(){
        // <div style="width: 100px; height:100px;border: 1px solid black;"></div>
        
        let div = document.createElement('div')

        div.style.width = this._width + 'px'
        div.style.height = this._height + 'px'
    
        div.style.border = '1px'
        div.style.borderStyle = 'solid'
        div.style.borderColor = 'black'
    
        return div
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


} // class end

let square1 = new Squares('frmSquares1')

let square2 = new Squares('frmSquares2')


function test(){}


test()