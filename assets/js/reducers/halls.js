var existing_halls = [
];
const halls = (state, action) => {
  switch (action.type) {
    case 'INITIAL_STATE':
      return action.halls
    default:
      return []
  }
}

export default halls
