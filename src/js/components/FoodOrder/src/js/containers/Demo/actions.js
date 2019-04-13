export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

function increment(num) {
  return {
    type: INCREMENT,
    change: num
  }
}

function decrement(num) {
  return {
    type: DECREMENT,
    change: num
  }
}

export {
  increment,
  decrement,
}
