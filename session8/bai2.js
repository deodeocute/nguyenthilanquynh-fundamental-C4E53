const start = document.getElementById("start")
const stop = document.getElementById("stop")
const input = document.getElementById("input") 
const demnguoc = document.getElementById("demnguoc")

start.addEventListener('click', ()=>{
    demnguoc.innerHTML = input.valueAsNumber
    dung = setInterval(()=> {
        if(demnguoc.innerHTML >0)
        demnguoc.innerHTML--
        else{
            demnguoc.innerHTML = "Time's out"
        }
    },1000)
})

stop.addEventListener('click', ()=>{
    clearInterval(dung)
})