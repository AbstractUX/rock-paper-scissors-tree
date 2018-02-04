export default function(state = null, action) {
  switch (action.type) {
    case 'START_GAME':
      return 'gameStarted';
    case 'LOSE_GAME':
      return 'lostGame';
    case 'TIMES_UP':
      return 'timesUp';
    default:
      return 'gameStarted';
  }
}
