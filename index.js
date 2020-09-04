// Add function sayHello(name="") {
function map(src, cb) { 
  r = []
  for (let i = 0; i < src.length; i++) { 
    let theElement = src[i]
    r.push(cb(theElement))
  }
  return r 
}