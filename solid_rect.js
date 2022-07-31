// print a solid rectangle
const solid_rect = (rows, columns) => {
    let solidRect = ''
    for(let i = 1; i <= rows; i++) {
        for(let j = 1; j <= columns; j++) {
            solidRect += '*'
        }
        solidRect += '\n'
    }
    return solidRect
}

console.log(solid_rect(5, 4))



//          ****
//          ****
//          ****
//          ****
//          ****