export default function(state = [], action) {
    switch (action.type) {
      case "SET_SEARCHED":
        return action.searched;
      default:
        return state;
    }
  }