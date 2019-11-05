let count = 1
while(count < 3 ){
    let x = Math.random()
    var n = parseFloat(x) 
    console.log(Math.round(n*1000)/1000)
    count++
}

let array = [2 , 4,6 ,3 , 7]
let dodai = array.length
let rand = Math.random()
console.log(array[Math.floor(rand * dodai)])