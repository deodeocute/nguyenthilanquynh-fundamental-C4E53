const x = document.getElementById("demo-a")
const button = document.getElementById("button")
const nhap = document.getElementById("userInput")
const select = document.getElementById("Color")
const xoa = document.getElementById("Remove")
const chonmau = document.getElementById("chonMau")

button.addEventListener("click" , ()=> {
    nhap.value = x.origin
})

chonmau.addEventListener('click', ()=>{
    select.remove( select.selectedIndex)
})
