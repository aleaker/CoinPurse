export default function(state = [], action) {
    switch (action.type) {
      case "SET_STORAGES":
        return [action.storages,action.storagesArr]
      default:
        return state;
    }
  }
  