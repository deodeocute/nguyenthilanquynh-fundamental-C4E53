alert("Hi there , this i dev dictionary ")
let dictionary = {
    debug : 'The process of figuring out why your program has a certain error and how to fix it',
    done :  'When your task is complete, the only thing you have to do is to wait for, users to use it (no additional codes or actions needed)',
    defect :"The formal word for 'error' ",
    pm :    'The short version of Project Manager, the person in charge of the final result of a project',
    "ui/ux" : 'UI means User Interface, UX mean User Experience, are the process define how your products looks and feels'
}
// while(true){
let input = prompt("Enter a keyword").toLowerCase()
let x = Object.keys(dictionary)
let y = Object.values(dictionary)
if ( x.includes(input)){
    alert(`${input} : ${dictionary[input]}` )
}
else{
    alert(`We could not find your word : ${input}`)
    let y = prompt(`We could not find your word : ${input} ,leave your explanation`)
    alert('Done')
    x = input
    dictionary[x] = y
let z = Object.keys(dictionary)
let k = Object.values(dictionary)
let tieude2 = [ "Keyword" , "Explanation"]
console.log(`${tieude2[0]} : ${tieude2[1]}`  )
for(let j = 0 ; j< z.length ; j++){
console.log(`${z[j]}   : ${k[j]}` )
}
}

