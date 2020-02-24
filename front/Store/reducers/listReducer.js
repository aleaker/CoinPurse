export default function(state = [], action) {
    switch (action.type) {
      case "SET_LIST":
        return action.coinNames;
      default:
        return state;
    }
  }
  