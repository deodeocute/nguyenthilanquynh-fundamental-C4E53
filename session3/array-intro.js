
let menu = [ "chó" , "mèo" ,"gà", "lợn" , "chim" , "chuột"]
 for(i = 0 ; i < menu.length ;i++ ){
  console.log(`${i+1}  ${menu[i]}`)}
// let a = Number(prompt("Mời nhập vào một số"))
// console.log(`ban vừa nhập ${a} :  ${menu[a-1]}`)

// forEach
// menu.forEach((value, index) => {
//     console.log(`${index+1} ${value}`)
// })

// //create
// let con = "cá"
// menu.push("bò")
// menu.push(con)
// console.log(menu)
// let b = prompt("Mời bạn nhập vào một con gì đó : ")
// menu.push(b)
// console.log(menu)

//Update
// let c = Number(prompt("Nhập số : "))
// let d = prompt(" Nhập con : ")
// menu[c] = d
// console.log (menu.indexOf("gà"))

let x = prompt("Nhập con muốn sửa ")
let y = prompt("Nhâp con : ")
z = menu.indexOf(x)
menu[z] = y
console.log(menu)

//delete
// menu.splice(0,1)
// console.log (menu)

let x = prompt("Nhập con muốn xóa ")
k = menu.indexOf(x)
menu.splice(k,1)
console.log(menu)


