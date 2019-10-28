let count = 0
while (count < 100){
let a = prompt("Nhập 1 trong 4 chữ c , r , u , d (create / read / update / delate ) ").toLowerCase()
let menu = ["chim" , "chuồn chuồn","cá" , "mèo" , "sóc" , "chuột" ]

if ( a == "c"){
    let them = prompt("Muốn thêm con gì vào shop động vật ? ")
    menu.push(them)
    console.log(menu)
}else if (a == "r"){
    for(i = 0 ; i < menu.length ;i++ ){
        console.log(`${i+1}  ${menu[i]}`)} 
}else if (a == "u"){
    let up = prompt("Muốn nhập theo i hay v (index / value) ? ")
    if (up == "i"){
        vitri = Number(prompt("Nhập vào vị trí"))
        if (0 <= vitri && vitri < menu.length){
            let fix = prompt("Nhập con muốn sửa")
            menu[vitri-1] = fix 
            for(i = 0 ; i < menu.length ;i++ ){
                console.log(`${i+1}  ${menu[i]}`)} 
        }else{
        alert("làm gì có con đấy mà sửa")
    }

}   else if (up == "v"){
    let con = prompt("Nhập con muốn sửa ")
        if(menu.includes(con)){
            let y = prompt("Nhâp con : ")
            let z = menu.indexOf(con)
            menu[z] = y
            for(i = 0 ; i < menu.length ;i++ ){
            console.log(`${i+1}  ${menu[i]}`)} 
            }
        else{
        alert("lỗi rồi")   }  
}else if (a == "d"){
    let de = prompt("Muốn nhập theo i hay v ? ")
    if (de == "i"){
        vitri = Number(prompt("Nhập vào vị trí"))
        if (0 <= vitri && vitri < menu.length){
            menu.splice(vitri,1)
            for(i = 0 ; i < menu.length ;i++ ){
            console.log(`${i+1}  ${menu[i]}`)} 
        }else {alert("Lỗi rồi nhá")}
    }else if (de == "v"){
        let babe = prompt("Nhập con muốn xóa ")
        xoa2=menu.indexOf(babe)
        menu.splice(xoa2,1)
        for(i = 0 ; i < menu.length ;i++ ){
            console.log(`${i+1}  ${menu[i]}`)} 
        if (xoa2 = -1){
            alert ("Làm gì có con đấy mà xóa")
        }
    }
}else{
    alert("Lỗi cú pháp rồi em ơiiii")
    loop = false
}
}
}