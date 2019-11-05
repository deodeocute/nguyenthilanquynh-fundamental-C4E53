// const inventory = [
//     {
//         name: `HP Envy 13aq`,
//         price: 21000,
//         brand: `HP`,
//         quantity: 5,
//     },
//     {
//         name: `Dell XPS 9370`,
//         price: 30000,
//         brand: `Dell`,
//         quantity: 1,
//     },
//     {
//         name: `Dell Inspiron 3567`,
//         price: 9300,
//         brand: `Dell`,
//         quantity: 12,
//     },
//     {
//         name: `Dell Latitude E5450`,
//         price: 8600,
//         brand: `Dell`,
//         quantity: 2,
//     },
//     {
//         name: `Asus Zenbook`,
//         brand: `Asus`,
//         price: 20000,
//         quantity: 4,
//     },
//     {
//         name: `HP Pavilion`,
//         brand: `HP`,
//         price: 14000,
//         quantity: 7,
//     },]


const Inventory = [
    {
        Name: "HP Envy 13aq",
        Price: 21000,
        Brand: "HP",
        Quantity: 5,
    },
    {
        Name: "Dell XPS 9370",
        Price: 30000,
        Brand: "Dell",
        Quantity: 12,
    },
    {
        Name: "Dell Latitude E5450",
        Price: 8600,
        Brand: "Dell",
        Quantity: 2,
    },
    {
        Name: "Asus Zenbook",
        Brand: "Asus",
        Price: 20000,
        Quantity: 4,
    },
    {
        Name: "HP Pavilion",
        Brand: "HP",
        Price: 14000,
        Quantity: 7,
    },
]
let inventoryByBrand = {}
let brandList = []
for(let i=0; i<Inventory.length;i++){
    brandList.push(Inventory[i].Brand.toLowerCase()) 
    inventoryByBrand[brandList[i]] = []  
}
for(let i=0; i<Inventory.length;i++){
    let Push = Inventory[i]
    inventoryByBrand[brandList[i]].push(Push)
}
// console.log(brandList)
console.log(inventoryByBrand)

let products = ``
let money = 0
let valueBrand = prompt("Which Brand?").toLowerCase()
if(brandList.includes(valueBrand)){
    inventoryByBrand[valueBrand].forEach((v) => {
        products += `\n${v.Name}`
        money += v.Price*v.Quantity*1000
    });
    alert(`There are ${inventoryByBrand[valueBrand].length} generations of '${valueBrand.toUpperCase()}' inventory: ${products} \nwith total value: ${money} VND`)
}

    