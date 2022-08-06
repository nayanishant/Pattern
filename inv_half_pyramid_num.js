const invHalfpyramidnum = (number) => {
    let inv_pyramid = ''
    for( let i = number; i >= 1; i--) {
        for( let j = 1; j <= i; ++j) {
            inv_pyramid += j
        }
        inv_pyramid += '\n'
    }
    return inv_pyramid
}

console.log(invHalfpyramidnum(5))


//              12345
//              1234
//              123
//              12
//              1