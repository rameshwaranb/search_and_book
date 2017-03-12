
export const getInitialState = () => {
  return dispatch => {
    fetch('/getHalls')
    .then(response => response.json())
    .then(json => dispatch(initialState(json)))
  }
}

export const initialState = (json) => ({
  type: 'INITIAL_STATE',
  halls: json.halls
})

