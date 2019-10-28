
let x = "deocute"
let pass = "123456"
let count = 0
while(count < 3){
let y = prompt("Nhap username di ")
let o = prompt("Nhap pass di ")
      if (x == y ){
        if(o == pass ){
        console.log("Nhap dung roi day")
        break
     } else {
        console.log("Nhap sai pass roi nhap lai di !")
        count +=1
    }    
}   else {
    console.log("Moi nhap lai username : "  )
    count +=1 
}
}