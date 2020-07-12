import axios from "axios";
import {setError} from "./errorActions"

const setUser = user => dispatch => dispatch({ type: "SET_USER", user });

export const fetchUser = ()=>async(dispatch)=>{
	const user = await axios.get('/api/user/loggedUser').data;
	dispatch(setUser(user));
};

export const loginUser = ({ username, password }) => async(dispatch) =>{
	const user = await (await axios.post("/api/user/login", { username, password })).data;
	dispatch(setUser(user));
};

export const logOutUser = async(dispatch) =>{
	const done = await axios.get("/api/user/logout");
    dispatch(setUser({}));
  };

export const registerUser = ({ username, password, email},history) => 
async(dispatch) =>{ 
	const data = await (await axios.post("/api/user/register", { username, password, email })).data; //returns error msg as string or user
	dispatch(
	typeof data == 'string' ? 
		setError(data)
		:
		(setUser(data),history.push("/home"))
	)
};

export const isLoged = () => async(dispatch) => {
	const user = await axios.get("/api/user");
	dispatch(setUser(user));
};
