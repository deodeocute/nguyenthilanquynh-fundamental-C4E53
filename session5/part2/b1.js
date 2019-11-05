let arr = [`to`, `be`, `that`, `of`, `elon`, `to`, `this`, `now`, `back`, `cool`, `hey`, `love`, `of`, `life`, `that`, `rain`, `summer`, `color`, `now`, `of`, `hat`, `late`,`sorry`, `my`, `team`]
let object = {}

for (i = 0 ; i < arr.length ; i++){
    let x = arr[i]
    let count = 0 
    for(j = 0; j < arr.length ; j++){
        let y = arr[j]
        if (x === y ){
            count ++
        }
    }
    object[x] = count
}
console.log(object)