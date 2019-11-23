// const calculator = document.getElementById("yolo")
// const zero = document.getElementById(0)
// const mot = document.getElementById(1)
// const hai = document.getElementById(2)
// const ba = document.getElementById(3)
// const bon = document.getElementById(4)
// const nam = document.getElementById(5)
// const sau = document.getElementById(6)
// const bay = document.getElementById(7)
// const tam = document.getElementById(8)
// const chin = document.getElementById(9)
// const cong = document.getElementById("plus")
// const tru = document.getElementById("minus")
// const nhan = document.getElementById("times")
// const chia = document.getElementById("divided by")
// const bang = document.getElementById("equals")
// const ac = document.getElementById("AC")
// const num = document.getElementById("num")

// console.dir(calculator.textContent)
// console.dir(zero)

// zero.addEventListener('click',()=>{
//     yolo.innerHTML += zero.innerText
// })
// mot.addEventListener('click',()=>{
//     yolo.innerHTML += mot.innerText
// })
// hai.addEventListener('click',()=>{
//     yolo.innerHTML += hai.innerText
// })
// ba.addEventListener('click',()=>{
//     yolo.innerHTML += ba.innerText
// })
// bon.addEventListener('click',()=>{
//     yolo.innerHTML += bon.innerText
// })
// nam.addEventListener('click',()=>{
//     yolo.innerHTML += nam.innerText
// })
// sau.addEventListener('click',()=>{
//     yolo.innerHTML += sau.innerText
// })
// bay.addEventListener('click',()=>{
//     yolo.innerHTML += bay.innerText
// })
// tam.addEventListener('click',()=>{
//     yolo.innerHTML += tam.innerText
// })
// chin.addEventListener('click',()=>{
//     yolo.innerHTML += chin.innerText
// })
// cong.addEventListener('click',()=>{
//     yolo.innerHTML += cong.innerText
// })
// tru.addEventListener('click',()=>{
//     yolo.innerHTML += tru.innerText
// })
// nhan.addEventListener('click',()=>{
//     yolo.innerHTML += nhan.innerText
// })
// chia.addEventListener('click',()=>{
//     yolo.innerHTML += chia.innerText
// })
// ac.addEventListener('click',()=>{
//     yolo.innerHTML += ac.innerText
// })


// console.log(num)
// // em khong biet lam nua dauuuuuuuuuuu =(((

    let btnAC = document.getElementById('btn_AC');
    let screen = document.getElementById('screen');
    let btnEqual = document.getElementById('btn_equal');
    let btnNumbers = document.getElementById('numbers');
    let btnOperators = document.getElementById('operators');
    
    btnAC.addEventListener('click', () => {
      screen.value = 0;
    })
    
    btnEqual.addEventListener('click', () => {
      let result = eval(screen.value);
      screen.value = result;
    })
    
    for (let index = 0; index < btnNumbers.children.length; index++) {
      const eachBtnNumbers = btnNumbers.children[index];
      eachBtnNumbers.addEventListener('click', () => {
        if (screen.value == 0) {
          screen.value = "";
        }
        screen.value += eachBtnNumbers.innerText;
      })
    }
    
    for (let index = 0; index < btnOperators.children.length - 1; index++) {
      const eachBtnOperators = btnOperators.children[index];
      eachBtnOperators.addEventListener('click', () => {
        let screenArr = screen.value.split("");
        let lastChar = screenArr[screenArr.length - 1];
        if (0 <= lastChar && lastChar <= 9) {
          screen.value += eachBtnOperators.innerText;
        } else {
          screenArr[screenArr.length - 1] = eachBtnOperators.innerText;
          let newValue = screenArr.join("");
          screen.value = newValue;
        }
      })
    }