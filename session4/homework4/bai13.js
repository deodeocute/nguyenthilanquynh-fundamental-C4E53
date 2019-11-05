console.log(`Hi there , this is your learning task to front-end developer career `)
let task =[
    { 
        name : "HTML" ,
        sth : "Complete : False"
    },
    {
        name :"CSS" ,
        sth : "Complete : False"
    },
    {
        name :"Basics of Javascript" ,
        sth : "Complete : False"
    },
    {  
        name :"Git",
        sth : "Complete : False"
    }
]
for (let i = 0 ; i < task.length ; i++){
    console.log(`${i+1}.${task[i].name} \n  ${task[i].sth}`  )
}
let input = prompt('Enter your command (New , update , delete , complete').toLowerCase()
if (input == "new"){
    let moi = prompt(`Enter new task`)
    task.push({
        name: moi,
        sth: "Complete : False"
    })
    for (let i = 0 ; i < task.length ; i++){
        console.log(`${i+1}.${task[i].name} \n  ${task[i].sth}`  )
    }
}else if (input == "update"){
    let vitri = Number(prompt("Enter posision"))
    let sua = prompt("Enter new title")
    task[vitri-1].name = sua
    for (let i = 0 ; i < task.length ; i++){
        console.log(`${i+1}.${task[i].name} \n  ${task[i].sth}`  )
    }      


}