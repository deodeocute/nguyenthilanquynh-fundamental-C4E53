let a = prompt("Nhập 1 trong 4 chữ c , r , u , d ").toLowerCase()
let menu = ["chim" , "chuồn chuồn","cá" , "mèo" , "sóc" , "chuột" ]
if ( a == "c"){
    let them = prompt()
    console.log("Muốn thêm con gì ? ", them)
    menu.push(them)
    console.log(menu)
}else if (a == "r"){
    for(i = 0 ; i < menu.length ;i++ ){
        console.log(`${i+1}  ${menu[i]}`)} 
}else if (a == "u"){
    let up = prompt("Muốn nhập theo i hay v ? ")
    if (up == "i"){
        vitri = Number(prompt("Nhập vào vị trí"))
        if (0 <= vitri && vitri < menu.length){
            let fix = prompt("Nhập con muốn sửa")
            menu[vitri] = fix 
            console.log(menu)
        }else{
        console.log("không có vị trí đấy")
    }

}   else if (up == "v"){
    let con = prompt("Nhập con muốn sửa ")
    let y = prompt("Nhâp con : ")
    z = menu.indexOf(con)
    menu[z] = y
    console.log(menu)
    if(z = -1 ){
        console.log("Không có con đấy")
    }
}
}else if (a == "d"){
    let de = prompt("Muốn nhập theo i hay v ? ")
    if (de == "i"){
        vitri = Number(prompt("Nhập vào vị trí"))
        if (0 <= vitri && vitri < menu.length){
            menu.splice(vitri,1)
            console.log(menu)
        }else {console.log("Lỗi rồi nhá")}
    }else if (de == "v"){
        let babe = prompt("Nhập con muốn xóa ")
        xoa2=menu.indexOf(babe)
        menu.splice(xoa2,1)
        console.log(menu)
        if (xoa2 = -1){
            console.log ("Làm gì có con đấy mà xóa")
        }
    }
}else{
    console.log("Lỗi cú pháp rồi em ơiiii")
}

