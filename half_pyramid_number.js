const half_pyramid_num = (number) => {
    let numberPyramid = ''
    for( let i = 1; i <= number; i++) {
        for( let j = 1; j <= i; j++) {
            numberPyramid += j
        }
        numberPyramid += '\n'
    }
    return numberPyramid
}

console.log(half_pyramid_num(5))


//                  1
//                  12
//                  123
//                  1234
//                  12345