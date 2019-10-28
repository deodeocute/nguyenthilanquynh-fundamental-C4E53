let loop = true
let count = 0 
while(count < 3){
    let username = prompt("Moi nhap username : ")
    if ( username === "deocute"){
        console.log ( " Nhap dung roi")
        let pass = prompt("Nhap pass di ")
            if (pass === "deocute123"){
                alert("NHap dung roi ")
            } else {
            alert("NHap sai roi")
        count +=1
    }
    }
    else {console.log ("Sai roi nhe ")
    count +=1 
}
}


