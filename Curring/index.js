function curr(a) {
  return function (b) {
    return function (c) {
      return a+b+c
    }
  }
}

console.log(curr(2)(3)(4))