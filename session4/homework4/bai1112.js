let product = 
[
    dthoai1 = {
    Name : "Xiaomi portable charger 20000mah",
    Brand :"Xiaomi" ,
    Price : 428 ,
    Color : "White" ,
    Category : "Charger",
    Providers :["phukienze dientuccc"]
    },
    dthoai2 = {
    Name : "VSmart Active 1",
    Brand :"VSmart" ,
    Price :5487 ,
    Color : "Black" ,
    Category: "Phone",
    Providers :["tgdd","ddghn","vhStore"] , 
},
    dthoai3 = {
    Name : "IPhone X" ,
    Brand   : "Apple",
    Price : 21490 ,
    Color :"Gray" ,
    Category: "Phone",
    Providers : ["tgdd"]
    },
    dthoai4 = {
    Name : "Samsung Galaxy A9" ,
    Brand :"Samsung" , 
    Price : 8490 ,
    Color :  "Blue" ,
    Category : "Phone",
    Providers :["tgdd"]
    },
]
for(let i = 0;i < product.length ;i++){
    console.log(` Name: ${product[i].Name} \n Price : ${product[i].Price} \n Providers: ${product[i].Providers} `)
}

let input = prompt("Enter providers: ").toLowerCase()
for(j = 0 ; j < product.length ; j++){
    let x = product[j].Providers
    if ( x.includes(input)){
       console.log(` Name: ${product[j].Name} \n Price : ${product[j].Price} \n Brand :${product[j].Brand} \n Color : ${product[j].Color} \n Category: ${product[j].Category} \n Providers : ${product[j].Providers}`)        
    }
}