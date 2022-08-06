const halfPyramidNum2 = (number) => {
    let store = ''
    for( let i = 1; i <= number; i++) {
        for(let j = 1; j <= i; j++) {
            store += i
        }
        store += '\n'
    }
    return store
}

console.log(halfPyramidNum2(5))

//              1
//              22
//              333
//              4444
//              55555