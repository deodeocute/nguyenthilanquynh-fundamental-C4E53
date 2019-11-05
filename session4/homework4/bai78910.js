let product = 
[
    dthoai1 = {
    Name : "Xiaomi portable charger 20000mah",
    Brand :"Xiaomi" ,
    Price : 428 ,
    Color : "White" ,
    Category : "Charger"
    },
    dthoai2 = {
    Name : "VSmart Active 1",
    Brand :"VSmart" ,
    Price :5487 ,
    Color : "Black" ,
    Category: "Phone"
    },
    dthoai3 = {
    Name : "IPhone X" ,
    Brand   : "Apple",
    Price : 21490 ,
    Color :"Gray" ,
    Category: "Phone"
    },
    dthoai4 = {
    Name : "Samsung Galaxy A9" ,
    Brand :"Samsung" , 
    Price : 8490 ,
    Color :  "Blue" ,
    Category : "Phone"
    },
]
let tengia = ["Name" , "Price"]
let abc = tengia.values()
for(i = 0 ; i < product.length ; i++){
    console.log("---------------------------------------")
    for ( let value of tengia){
    console.log( ` ${i} .${value} : ${product[i][value]} `)   
    }
}
let input = prompt("Enter your categoty Phone/Charger ").toLowerCase()
for(j = 0 ; j < product.length ; j++){ 
    if (product[j].Category.toLowerCase() == input){
        console.log(`---------------------------------------`)
        console.log( `Name: ${product[j].Name} \nPrice: ${product[j].Price}`)    
        }
    }

let nhap = Number(prompt("Enter product posision"))
    console.log(` Name: ${product[nhap-1].Name} \n Price : ${product[nhap-1].Price} \n Brand :${product[nhap-1].Brand} \n Color : ${product[nhap-1].Color} \n Category: ${product[nhap-1].Category}`)



