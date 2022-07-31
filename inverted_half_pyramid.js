const inverted_half_pyramid = (number) => {
    let invertedHalfPyramid = ''
    for(let i = number; i >= 1; i--) {
        for(let j = 1; j <= i; j++) {
            invertedHalfPyramid += "*"
        }
        invertedHalfPyramid += "\n"
    }
    return invertedHalfPyramid
}

console.log(inverted_half_pyramid(5))


//                 *****
//                 ****
//                 ***
//                 **
//                 *