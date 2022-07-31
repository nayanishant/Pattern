const half_pyramid = (number) => {
    let halfPyramid = ''
    for(let i = 1; i <= number; i++) {
        for(let j = 1; j <= i; j++) {
            halfPyramid += "*"
        }
        halfPyramid += "\n"
    }
    return halfPyramid
}

console.log(half_pyramid(5))


//          *
//          **
//          ***
//          ****
//          *****