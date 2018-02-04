export default function(state = 0, action) {
  switch (action.type) {
    case 'LEVEL_UP':
      return state += 1;
    default:
      return state;
  }
}
