import actionType from './actionTypes'

const add = (num)=>({
  type: actionType.INSCRMENT,
  payload: num
})

const dec = (num)=>({
  type: actionType.DECREMENT,
  payload: num
})

const reset = (data)=>({
  type: actionType.RESET,
  payload: data
})

export {
  add,
  dec,
  reset
}

