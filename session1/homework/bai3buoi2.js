let count = 0 
while (count < 3 ){
let so = Number(prompt("Mời nhập một số trong khoảng 1 - 100 : "))
if (so < 10 ){
    console.log("đồ dở hơi nhập số lớn hơn 10 diiii ")
    count += 1     
}   else if (so < 50){
    console.log ("nhập số lớn hơn 50 điiiii ")
    count += 1  
}
else {
    console.log("nhập vớ vẩn ")
    count += 1  
}
}