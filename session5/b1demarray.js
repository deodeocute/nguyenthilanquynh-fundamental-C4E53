let arr = [`to`, `be`, `that`, `of`, `elon`, `to`, `this`, `now`, `back`, `cool`, `hey`, `love`, `of`, `life`, `that`, `rain`, `summer`, `color`, `now`, `of`, `hat`, `late`,`sorry`, `my`, `team`]
console.log(`${arr}`)
let ans = deduplicate(arr);
console.log(`${ans}`);
function deduplicate(arr) {
    let isExist = (arr, x) => {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === x) return true;
    }
    return false;
}

let ans = [];
arr.forEach(element => {
    if(!isExist(ans, element)) ans.push(element);
});
return ans;}
var indices = [];
for (i= 0 ; i< ans.length ; i++){
    let count = 0
    var element = ans[i];
    var idx = arr.indexOf(element);
    while (idx != -1) {
    indices.push(idx)
    idx = arr.indexOf(element, idx + 1);
    count ++
    }
console.log(`${element} : ${count}`);

}