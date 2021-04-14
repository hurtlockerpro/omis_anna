
class Calc{

    #calc
    #inputNumbers
    #btns

    allowKeys = [8, 13, 37, 39, 189] //
    mathActions = ['/', '+', '*', '-']

    lastSymbol = ''

    constructor(calcName = 'calc'){

        this.#calc = document.getElementById(calcName)

        this.#inputNumbers = this.#calc.querySelector('input[name="numbers"]')
        this.LinkEventToInput()

        this.#btns = this.#calc.getElementsByClassName('btn')
        // x[]

        console.log('---')
    }

    LinkEventToButtons(){

        for (let index = 0; index < this.#btns.length; index++) {
            //console.log(this.#btns[index])
            
            this.#btns[index].addEventListener('click', (event) => {
                //console.log(event)
                console.log(event.target.innerText)

                // remove last symbol if it is equal with current symbol
                this.checkLastSymbol(event.target.innerText)

                // save last symbol 
                this.lastSymbol = event.target.innerText
                
                if (event.target.innerText == '=')
                {
                    this.getResult()
                } 
                else if (event.target.innerText == 'CE')
                {
                    this.emptyNumbers()
                } else {

                    // variant 1 & varant 2
                    // any == number
                
                    if (this.#inputNumbers.value.toString().trim().length == 1 && parseInt(this.#inputNumbers.value) == 0){
                        this.#inputNumbers.value = ''
                    }
                    this.#inputNumbers.value += event.target.innerText

                    // set pointer into input 
                    this.#inputNumbers.focus()

                }
            })
        }
    }

    emptyNumbers(){
        this.#inputNumbers.value = '0'
    }

    getResult(){
        this.#inputNumbers.value = eval(this.#inputNumbers.value)
    }

    checkLastSymbol(key)
    {
        if (
            (this.mathActions.includes(key) && this.lastSymbol == key) 
            ||
            (this.mathActions.includes(key) && this.mathActions.includes(this.lastSymbol) && this.lastSymbol != key)
        )
        {
            // hsfkh stone sfkh ksfehsf
            // 5, 10
            let val = this.#inputNumbers.value.toString().trim()
            this.#inputNumbers.value = val.substring(0, val.length - 1)
        }
    }

    LinkEventToInput(){


        this.#inputNumbers.addEventListener('keydown', (event) => {


            
            console.log(event.keyCode, ', ', event.key)

            // remove last symbol if it is equal with current symbol
            this.checkLastSymbol(event.key)

            // save last symbol 
            this.lastSymbol = event.key


            // 96 - 105
            // 8, 13 , 37, 39, 189
            if ((event.keyCode < 48 || event.keyCode > 57) && this.allowKeys.includes(event.keyCode) == false)
            {
                event.preventDefault()
            } 
            else if (event.keyCode == 13)
            {
                this.getResult()
            }
        })
    }

}


let calc = new Calc()
calc.LinkEventToButtons()

