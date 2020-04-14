import axios from "axios";

export const setStorages = (storages) => (dispatch) =>
  dispatch({ type: "SET_STORAGES", storages });

export const fetchStorages = () => async (dispatch) => {
  let res = await axios.get("api/storages/fetchStorages");
  dispatch(setStorages(res.data));
};

export const addStorage = (storageData) => async (dispatch) => {
  console.log(storageData);
  let answ = await axios.post("api/storages/addStorage", storageData);
  answ.status == 201 ? dispatch(fetchStorages()) : console.log(answ);
};

export const deleteStorage = (storageData) => async (dispatch) => {
  console.log(storageData);
  let answ = await axios.delete("api/storages/deleteStorage", {
    data: storageData,
  });
  answ.status == 204 ? dispatch(fetchStorages()) : console.log(answ);
};
