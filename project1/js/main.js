

let inputTitle = document.getElementById('inputTitle')
let menuIsActive = document.getElementById('menuIsActive')

let btn = document.querySelector('#frmAddNewMenuItem > button[type="button"]')

let menuItems = document.getElementById('menuItems')

btn.addEventListener('click', () => {
    console.log('button is clicked. Input has: ' + inputTitle.value + 
    ' is Checked: ' + menuIsActive.checked
    )

    let menuItem = generateMenuItem(inputTitle.value)
    menuItems.append(menuItem)

})


function generateMenuItem(menuTitle){
   
    let a = document.createElement('a') // <a></a>
    a.classList.add('nav-link')  // <a class="nav-link"></a>
    a.href = 'http://google.com' // <a class="nav-link" href="http://"></a>
    a.innerText = menuTitle // <a class="nav-link" href="http://">My Link</a>


    let li = document.createElement('li') // <li ></li>
    li.classList.add('nav-item') // <li class="nav-item"></li>
    if (menuIsActive.checked == true)
    { 
        li.classList.add('isActive')
    }

    li.innerHTML = a.outerHTML
     /*
    <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                */

    console.log('a (html): ', a.outerHTML)
    console.log(li)

    return li
}
generateMenuItem('моя ссылка 1')

/*
btn.addEventListener('dblclick', myCallback)


function myCallback(){
    let btn = document.querySelector('button[type="submit"]')
    console.log('my callback function init' + btn)
    this.btn
}
*/

// Lambda functions
// 1 variant 
let showTextInConsole = () => console.log('my callback function init 11111')

// 2 variant
let showTextInConsole2 = firstname => console.log('Hello ' + firstname)
/*
function showTextInConsole2(firstname){
    console.log('Hello ' + firstname)
}
*/

/*
let obj = {
    key1:"value1",
    key2: function(){
        console.log('key2:', this.key1)
    }, 
    key3:() => {
        console.log('key3: ', this.key1)
    }
}
obj.key2()
obj.key3()
*/

// 3 variant
let showTextInConsole3 = (firstname, lastname) => {
    let x = 10 
    console.log('Hello ' + firstname + ' ' + lastname)
    btn
    return x
}



showTextInConsole3('Vladimir', 'Kjahrenov')










console.log('agsegs') 