let person = {
    name: "Dẹo Dẹo" ,
    age : 19 , 
    location : "Hà Nội" ,
    status : true
}
console.log(person)
let nhap = prompt("Nhập vào key muốn thay đổi : ")
console.log(person[nhap])
let doi = prompt("Nhập vào cái muốn đổi")
person[nhap] = doi
console.log(person)

let xoa = prompt("Nhập vào cái key muốn xóa")
delete person[xoa]
console.log(person)