const hollow_rect = (rows, columns) => {
    let hollowRect = ''
    for(let i = 1; i <= rows; i++) {
        for(let j = 1; j <= columns; j++) {
            if(i == 1 || i == rows || j == 1 || j == columns) {
                hollowRect += '*'
            } else {
                hollowRect += ' '
            }
        }
        hollowRect += "\n"
    }
    return hollowRect
}

console.log(hollow_rect(5, 4))



//              ****
//              *  *
//              *  *
//              *  *
//              ****
