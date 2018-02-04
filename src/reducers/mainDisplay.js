export default function(state = null, action) {
  switch (action.type) {
    case 'START_GAME':
      return 'gameStarted';
    case 'LOSE_GAME':
      return 'lostGame';
    default:
      return 'gameStarted';
  }
}
