let array = [
    {
        question : "John có 10 đôi tất. Nếu anh ta mất 7 chiếc tất riêng lẻ thì số đôi nhiều nhất mà anh ta còn lại là bao nhiêu? " ,
        answer : [6,7,5,4],
        dung : 6  
    },
    {
        question : "Số tiếp theo của dãy 19, 28, 37, 46, ... là số nào?",
        answer : [79,67,55,57],
        dung : 55
    },
    {
        question : "Căn bậc hai của 9 là ",
        answer : [1,3,4,2] ,
        dung : 3
    }
]
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
     return array;
}
let count = 0
let loop = true
let k = array.length
while(loop){
    let x = array.length
    let random = array[Math.floor(Math.random()*x)]
    shuffle(random.answer)
    let questions = `${random.question}`
    random.answer.forEach((v,i)=> {
        questions += `\n ${i + 1}. ${v}`
    })
    let nhap = Number(prompt(questions))
    let y = random.dung
    let h = random.answer[nhap-1]
    if(h == y){ 
        alert(`đúng`)
        count ++
    } 
    else{
        alert(`Sai`)
    }
let vitri = array.indexOf(random)
array.splice(vitri,1) 
if (array.length == 0){
    loop = false
}
}
alert(`bạn làm đúng ${count} / ${k} câu `)
