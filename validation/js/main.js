
// 1 find element
let input = document.getElementById('exampleInputText')

// find error element
let alertDanger = document.querySelector('div .alert-danger')

// find success element
let alertSuccess = document.querySelector('div .alert-success')

// find save button
let btnSave = document.getElementById('btnSave')


function checkInput(){

    // 2 text length
    //console.log( input.value)
    if (input.value.toString().trim().length <= 3)
    {
        // 3 show error
        // 3.1. 
        //background-color
        //border-top
        // method -> ()
        // property -> no () -> ''
        input.style.border = '1px'
        input.style.borderStyle = 'solid'
        input.style.borderColor = 'red'

        // 3.2.
        // v 1 
        //alertDanger.style.display = 'block'
        alertDanger.removeAttribute('style')


    } else {
        input.style.border = '1px'
        input.style.borderStyle = 'solid'
        input.style.borderColor = 'gray'

        alertDanger.style.display = 'none'  // style="display:none;"

    }
    
}

input.addEventListener('keyup', (event) => {
    checkInput()
})


btnSave.addEventListener('click', (event) => {

    event.preventDefault()

    console.log('button was clicked')
    // checkInput()
})



