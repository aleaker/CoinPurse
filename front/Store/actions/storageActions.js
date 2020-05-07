import axios from "axios";
import {addFavorite} from "./favoritesActions";


export const setStorages = (storages,storagesArr) => (dispatch) =>
  dispatch({ type: "SET_STORAGES", storages,storagesArr });


export const fetchStorages = () => async (dispatch) => {
  let res = await axios.get("api/storages/fetchStorages");
  if(res.status == 204)
    {dispatch(setStorages(["emptyDb"]))
}else{ 
    let storagesArr=[];
    res.data.map(storage=>storagesArr.push(storage.coinId))
    dispatch(setStorages(res.data,storagesArr));}
};

export const addStorage = (storageData) => async (dispatch) => {
  let answ = await axios.post("api/storages/addStorage", storageData);
  answ.status == 201 ? dispatch(addFavorite(storageData[0].coinId),dispatch(fetchStorages())) : console.log(answ);
};

export const deleteStorage = (storageData) => async (dispatch) => {
  let answ = await axios.delete("api/storages/deleteStorage", {
    data: storageData,
  });
  answ.status == 204 ? dispatch(fetchStorages()) : console.log(answ.data);
};





