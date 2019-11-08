function  get_even_list(l ){
    var x = []
    for (let i= 0 ; i < l.length ; i++){
        if(l[i]%2 == 0){
            x.push(l[i])
        }
    }
    return x
}
let a = [1, 4, 5, -1, 10]
// console.log(get_even_list(a))

even_list = get_even_list([1, 2, 5, 9, -10, 6])

if (JSON.stringify(even_list) == JSON.stringify([2, -10, 6])){
    console.log("Your function is correct") }
else{
    console.log("Ooops, bugs detected")}