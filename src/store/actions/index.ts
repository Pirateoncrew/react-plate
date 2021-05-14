export function addNote(payload) {
  const action = {
    type: "Add_NOTE",
    payload: payload,
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action) {
  return (dispatch) => {
    dispatch(action);
  };
}
