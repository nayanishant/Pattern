const Floyds_triangle = (number) => {
    let store = ''
    let n = 1
    for(let i = 1; i <= number; i++) {
        for(let j = 1; j <= i; j++) {
            store += n
            n++
        }
        store += '\n'
    }
    return store
}

console.log(Floyds_triangle(5))


//          1
//          23
//          456
//          78910
//          1112131415