// 1. khởi tạo
// 1.1 object rỗng
// let person = {}

// 1.2 object có nhiều hơn 1 cặp property và value

let person = {
    name: "Dẹo Dẹo" ,
    age : 19 , 
    location : "Hà Nội" ,
    status : true
}
console.log(person)

// //Read 1
// console.log(person.name)
// //read 2
// let a = prompt("Mời nhập vào gì đó ")
// console.log(person[a])
// console.log(person["status"])

// //create
// person.school = "Thủy lợi university"
// person["GPA"] = 3
// console.log(person)

//update
// person.school = "hjkgfkewfr"
// console.log(person)

//delete
delete person.age
console.log(person)
