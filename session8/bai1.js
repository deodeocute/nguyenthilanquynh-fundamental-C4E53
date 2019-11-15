const cong = document.getElementById("cong")
const tru = document.getElementById("tru")
const number = document.getElementById("giua")

cong.addEventListener('click' , ()=>{
    number.textContent ++
    
})
tru.addEventListener('click' , ()=>{
    number.textContent --
})
