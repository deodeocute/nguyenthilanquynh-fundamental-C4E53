const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
    };
    // for (let x in product) {
    // console.log(x);
    // }
    // x là keys
    let y = Object.keys(product)
    let x = Object.values(product)
    for (let i = 0 ; i <y.length ; i++){
        console.log(`${y[i]} : ${x[i]}`)
    }
    
    