
//     const randomPromise = new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             resolve("dskjfgwlfb;af")
//         },2000);
//         // reject("loi roi nhe")     
//     })
// randomPromise.then((data)=> 
//     console.log(data)
//     // ,(errM) => console.log(errM)
//     );

const fetchData = async() => {
    try {
        const data = await fetch('http://quotes.rest/qod.json')
            .then((data) => {
                return data.json();
            })
            console.log(data.contents.quotes[0]);
    } catch (error) {
        console.log(error.message);
    }

}  

fetchData().then
