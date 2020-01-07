export default function(state = [], action) {
  switch (action.type) {
    case "SET_MYWATCHLIST":
      return action.watched;
    default:
      return state;
  }
}
