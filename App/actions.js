export const london = (dispatch) => {
  return function (dispatch) {
    dispatch({
          type: 'LONDON',
          data: "Rain"
        })
  }
}