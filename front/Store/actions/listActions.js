import axios from "axios";

export const setList = coinNames => dispatch =>
  dispatch({ type: "SET_LIST", coinNames });