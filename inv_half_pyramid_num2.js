const invHalfPyramidNum2 = (number) => {
    let store = ''
    for(let i = 1; i <= number; i++) {
        for(let j = 1; j <= number - i + 1; ++j) {
            store += i
        }
        store += '\n'
    }
    return store
}

console.log(invHalfPyramidNum2(5))


//          11111
//          2222
//          333
//          44
//          5