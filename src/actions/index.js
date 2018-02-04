export function addPoint() {
  return {
    type: 'ADD_POINT'
  }
}

export function changeComputerHand(nextHand) {
  return {
    type: 'CHANGE_HAND',
    payload: nextHand
  }
}
