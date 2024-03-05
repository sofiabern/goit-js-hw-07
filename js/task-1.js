const ulEl = document.querySelector('#categories')
// console.dir(ulEl)
const children = [...ulEl.children]
// console.log(children)
console.log(`Number of categories: ${children.length}`)

children.forEach((item, idx, arr) =>{
// console.log(arr[idx].children)
const descendants = arr[idx].children
// console.log(descendants)
console.log(`Category: ${descendants[0].textContent}`)
console.log(`Elements: ${descendants[1].children.length}`)
})
