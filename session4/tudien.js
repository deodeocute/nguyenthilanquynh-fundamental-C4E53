let tudien = {
    btw : "By the way" ,
    lol :"laugh out loud " ,
    gn : "Good night",
    idc :"I dont care",
    ama :"As me anything"
}
let x = Object.keys(tudien)
for ( i = 0 ; i < x.length ; i++){
console.log(`${i+1} . ${x[i]}`)
}
while(true){
let nhap = prompt("Nhập vào từ muốn xem :").toLowerCase()
if(x.includes(nhap)){
    console.log(tudien[nhap])
}
else if (nhap == "e"){
    break
}
else {
    let nhap2 = prompt("Bạn có muốn thêm từ này vào từ điển k ?").toLowerCase()
    if (nhap2 == "y"){
        let ynghia= prompt("Nhập ý nghĩa của từ")
        tudien[nhap]= ynghia
        Object.keys(tudien).forEach((v,i)=>{
            console.log(`${i+1} . ${v}`)
        })
}
    else if (nhap2 == "n"){
        console.log("Thank U")}
}
}

