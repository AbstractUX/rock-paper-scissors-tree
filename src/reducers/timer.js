export default function(state = 50, action) {
  switch (action.type) {
    case 'COUNTDOWN':
      return state -= 1;
    default:
      return state;
  }
}
