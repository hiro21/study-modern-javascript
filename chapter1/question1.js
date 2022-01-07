const test1 = NaN
console.log(test1 + 0) // NaN

const test2 = Infinity
console.log(test2 + 0) // Infinity

const test3 = false
console.log(test3 + 0) // false -> 0

const test4 = true
console.log(test4 + 0) // 1

const test5 = null
console.log(test5 + 0) // null -> 0

const test6 = undefined
console.log(test6 + 0) // undefined -> NaN
