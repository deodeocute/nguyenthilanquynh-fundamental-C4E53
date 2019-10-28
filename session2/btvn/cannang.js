let chieucao = parseFloat(prompt("Mời nhập vào chiều cao theo cm : "))
let can = parseFloat(prompt("Mời nhập vào cân nặng kg : "))
let a = chieucao / 100 
console.log (parseFloat(a))
let bmi = can / ( a*a )
console.log ("BMI : " ,parseFloat(bmi))
if (bmi < 16){
    console.log("Severely underweight")
}else if (bmi < 18.5){
    console.log("Underweight")
}else if (bmi < 25){
    console.log("Normal")
}else if (bmi < 30){
    console.log("Overweight")
}
else {
    console.log("Obese")
}