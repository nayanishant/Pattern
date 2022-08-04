const half_pyramid_reverse = (number) => {
    let rotated_pyramid = ''
    for( let i = 1; i <= number; i++) {
        for(let j = 1; j <= number; j++) {
            if(j <= number - i) {
                rotated_pyramid += ' '
            } else {
                rotated_pyramid += '*'
            }
        }
        rotated_pyramid += '\n'
    }
    return rotated_pyramid
}

console.log(half_pyramid_reverse(5))


//          *
//         **
//        ***
//       ****
//      *****