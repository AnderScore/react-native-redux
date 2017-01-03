const initialState = {
  message: "Unknown"
}

export const weather = (state = initialState, action) => {
  if(action.type === 'LONDON') {
    return Object.assign({}, state, {message: action.data})
  }
  return state
}