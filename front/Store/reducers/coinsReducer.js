export default function(state = [], action) {
  switch (action.type) {
    case "SET_COINS":
      return action.coins;
    default:
      return state;
  }
}
