import React from "react";

export default function storageDropDown({
  storageObjArr,
  storageObj,
  handleAddStorage,
  handelOneLessOrCancel,
  handleOneMore,
  handleChange,handleDeleteFromArray,
  coinId,
}) {
  return (
    <div>

      {!!storageObjArr.length
        && storageObjArr.map((storage,index) => (
            <div>
              <p>{storage.storageName}</p>
              <p>{storage.amount}</p>
            <button value={index} onClick={(e) => handleDeleteFromArray(e)}>X</button>
            </div>
          ))
       }
        

      <form>
        <input
          name="storageName"
          value={storageObj.storageName}
          placeholder="storage name"
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          name="amount"
          value={storageObj.amount}
          placeholder="amount"
          onChange={(e) => handleChange(e)}
        ></input>
        {/* <input     name="date" placeholder="date"   type="date"      onChange={e => handleChange(e)} ></input>
        <input     name="pk" placeholder="public key"    onChange={e => handleChange(e)}></input> */}
      </form>
      <button onClick={(e) => handelOneLessOrCancel(e)}>-</button>
      <button value={coinId} onClick={(e) => handleAddStorage(e)}>
        Ok
      </button>
      <button onClick={(e) => handleOneMore(e)}>+</button>
    </div>
  );
}
