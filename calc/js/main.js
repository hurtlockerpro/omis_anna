
class Calc{

    #calc
    #inputNumbers
    #btns

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
                
                if (event.target.innerText == '=')
                {
                    this.getResult()
                } 
                else if (event.target.innerText == 'CE')
                {
                    this.emptyNumbers()
                } else {
                    this.#inputNumbers.value += event.target.innerText
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

    LinkEventToInput(){
        this.#inputNumbers.addEventListener('keydown', (event) => {
            // if (event.keyCode)
            console.log(event.keyCode, ', ', event.key)
        })
    }

}


let calc = new Calc()
calc.LinkEventToButtons()
