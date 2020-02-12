export default function(state = [], action) {
  switch (action.type) {
    case "FETCH_COINS":
      return action.coins;
    default:
      return state;
  }
}
