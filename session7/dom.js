// const buttonSummit = document.getElementById("Submit")
const userInput = document.getElementById("user")
const text = document.getElementById("para")
const fatherDom = document.getElementById('user-list');
const them = document.getElementById("them")
const xoa = document.getElementById("xoa")

// console.dir (userInput)
// console.dir (buttonSummit)
// console.dir (text)

// buttonSummit.addEventListener('keyup', () => {
//     console.dir(userInput)
// })

//them1
// buttonSummit.addEventListener('click' , () => {
//     text.value = userInput.value
// })

// them.addEventListener('click' , () => {
//     fatherDom.innerHTML+=`<li>${userInput.value}<li>`
// })

// xoa.removeEventListener('click', ()=>{
//     fatherDom.innerHTML.re =`<li>${userInput.value}<li>`

// // })
// for(i =0 ; i< 3 ; i++){
// console.dir(fatherDom.innerHTML[i])}

xoa.addEventListener('click' , () => {
    let value = userInput.value
    if (value == ""){ 
    fatherDom.removeChild(fatherDom.lastElementChild)
    } else {
        let check = true
        console.log(value)
        for(let i = 0 ; i < fatherDom.children.length ; i++){
            console.log(fatherDom.children[i].textContent.toLowerCase())
            if (value.toLowerCase() == fatherDom.children[i].textContent.toLowerCase() ){
                console.log(fatherDom.children[i].textContent.toLowerCase())
                fatherDom.removeChild(fatherDom.children[i])
                check = false
                userInput.value=""
            }
        }if (check ){
        alert("sai rồi")
        }
    }
})