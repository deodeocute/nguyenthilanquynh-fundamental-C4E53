let an = { ten :"An"   , days : 30,hour : 8, tien : 15}
let hoang = {ten :"Hoàng", days : 10 , hour : 15 ,tien : 20 }
let quynh = { ten : "Quỳnh" , days : 15 , hour : 7 ,tien : 15}

let x = Object.values(an)
let y = Object.values(hoang)
let z = Object.values(quynh)

console.log(x)
console.log(y)
console.log(z)

let luong1 = 1
let luong2 = 1
let luong3 = 1
for(b = 1 ; b< x.length ; b++){
    luong1 =  luong1 *x[b]
}
console.log(`Lương của An là ${luong1}`)

for(a = 1 ; a< y.length ; a++){
    luong2 =  luong2 *y[a]
}
console.log(`Lương của Hoàng là ${luong2}`)
for(c = 1 ; c< z.length ; c++){
    luong3 =  luong3 * z[c]
}
console.log(`Lương của Quỳnh là ${luong3}`)

console.log(`Tổng lương cả 3 người là ${luong1 + luong2 + luong3}`)

for()

for(j = 1 ; j < 4 ; j++){
    let luong[j] = 1
    for (i = 0 ; i< 4 ; i++){
        luong[j] = luong[j]*

    }


