let userinput = document.querySelector('#userinput')
let enter = document.querySelector('#enter')
let ul = document.getElementsByTagName('ul')



enter.addEventListener('click', createListElement = () => {
    console.log('clicks?');
    let li = document.createElement('li')
    console.log(li);
    li.textContent = userinput.value
    if (userinput.value == 0) {
        return
    }
    ul[0].appendChild(li)
})


document.body.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        console.log('clicks?');
        let li = document.createElement('li')
        console.log(li);
        li.textContent = userinput.value
        if (userinput.value == 0) {
            return
        }
        ul[0].appendChild(li)
    }



    console.log(e);
    // console.log(e.code);
    console.log(e.keyCode);
    // console.log(e.key);
})