export default function(state = [], action) {
    switch (action.type) {
      case "SET_FAVORITES":
        return action.favorites;
      default:
        return state;
    }
  }
  