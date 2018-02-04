export default function(state = 0, action) {
  switch (action.type) {
    case 'ADD_POINT':
      return state += 1;
    case 'LOSE_POINT':
      return state -= 1;
    default:
      return state;
  }
}
