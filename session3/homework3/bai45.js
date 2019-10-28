let menu = [22,9, 70 , 46 , 52 , 100, 89, 220]
console.log(" Hello my name is Deocute and these are my sheep sizes " , menu)
for(let a = 1 ; a <5 ; a++ ){
    console.log ("MONTH ", a)
    for ( j = 0 ; j < menu.length ; j++){
        menu[j] +=50
    }
    console.log("One month has passed , now here is my flock ", menu)
    let max = menu[0]
for ( i = 0 ; i < menu.length ; i++ ){
    if (menu[i] > max) {
        max = menu[i]}
                }
console.log(`Now my biggest sheep has size ${max} let's shear it`)
let x = menu.indexOf(max)
menu[x] = 8
console.log("After shearing , here is my flock " , menu)
    
            }
let tong = 0
for (let b= 0 ; b<menu.length ; b++ ){
    tong += menu[b] 
}
console.log("My flock has size in total : ", tong)
console.log(`I would get ${tong} * 2$ = ` , tong *2)