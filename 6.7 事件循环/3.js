const p1 = new Promise((resolve) => {
  resolve()
}).then(function f1() {
  console.log(1)
  const p2 = new Promise(resolve => {
    resolve()
  }).then(function f3() {
    console.log(2)
  }).then(function f4() {
    console.log(4)
  })
}).then(function f2() {
  console.log(3)
})

console.log(0)