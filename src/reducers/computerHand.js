export default function(state = 'rock', action) {
  switch (action.type) {
    case 'CHANGE_HAND':
      console.log('next computer hand is: ', action.payload);
      return action.payload;
  }

  return state;
}
