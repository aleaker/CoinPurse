import axios from "axios";
import {setError} from "./errorActions"

const setUser = user => dispatch => dispatch({ type: "SET_USER", user });


export const fetchUser = ()=>dispatch=>axios.get('/api/user/loggedUser').then(res=>res.data).then(user=>dispatch(setUser(user)))

export const loginUser = ({ username, password }) => dispatch =>
  axios
    .post("/api/user/login", { username, password })
    .then(res => res.data)
    .then(user => {
      dispatch(setUser(user));
    })

export const logOutUser = ({ username, password }) => dispatch =>
  axios.get("/api/user/logout").then(() => {
    dispatch(setUser({}));
  });

export const registerUser = ({ registerUsername, registerPassword, email},history) => 
dispatch => 
  axios
    .post("/api/user/register", { registerUsername, registerPassword, email })
    .then(res => res.data) //returns error msg as string or user
    .then(data => {typeof data == 'string' ? dispatch(setError(data)) :( dispatch(setUser(data)),history.push("/home"))})

export const isLoged = () => dispatch => {
  axios.get("/api/user").then(user => dispatch(setUser(user)));
};
