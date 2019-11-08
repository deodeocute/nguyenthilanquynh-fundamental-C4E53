function is_inside(A,B){
        if (A[0] > B[0] && A[1] > B[1]){
            return true
        }else {
            return false
        }
 }
 let x = is_inside([200, 120], [140, 60, 100, 200])
 console.log(x)
 if ( x === true){
    console.log( `Your function is correct `)
 }else if (x === false){
    console.log( `Your function is correct `)
 }
 else {
    console.log(`Oops, bugs detected`)
 }