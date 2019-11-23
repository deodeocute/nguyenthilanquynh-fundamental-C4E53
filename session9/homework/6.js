function doDai (x1,y1,x2,y2) {
    let k = Math.pow(x1-y1,2)
    let i = Math.pow(x2-y2,2)
    let z = Math.sqrt(k+i)
    console.log(z)
    return z;
}


const x = doDai(3, 10, 0, 6);
if (x !== 5) {
  console.log('Failed: the calculation is wrong');
} else {
  console.log('Passed, bravo')
}
