import React from "react";

export default function storageDropDown({
  storageObjArr,
  storageObj,
  handleAddStorage,
  handelOneLessOrCancel,
  handleOneMore,
  handleChange,
  handleDeleteFromArray,
  coinId,
  errorMessage,
  handleResetError,
}) {
  return (
    <div className="storageDDBox">
      <div className="addedStorages">
        {!!storageObjArr.length &&
          storageObjArr.map((storage, index) => (
            <div className="addedStorage" key={index}>
              <p className="storageName">{storage.storageName}</p>
              <p className="storageAmount">{storage.amount}</p>
              <div className="clearStorageBox">
                <button
                  className="clearStorageButton"
                  value={index}
                  onClick={(e) => handleDeleteFromArray(e)}
                >
                  X
                </button>
              </div>
            </div>
          ))}
      </div>

      <form className="storageDDForm" onFocus={(e) => handleResetError(e)}>
        <input
          className="storageDDInput"
          name="storageName"
          value={storageObj.storageName}
          placeholder="storage name"
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          className="storageDDInput"
          name="amount"
          value={storageObj.amount}
          placeholder="amount"
          onChange={(e) => handleChange(e)}
        ></input>
        {/* <input     name="date" placeholder="date"   type="date"      onChange={e => handleChange(e)} ></input>
        <input     name="pk" placeholder="public key"    onChange={e => handleChange(e)}></input> */}
      </form>
      <div className="storageDDError">
        <p>{errorMessage || "   "}</p>
      </div>
      <div className="storageDDMenu">
        <button className="storageDDCandel homeDarkButton" onClick={(e) => handelOneLessOrCancel(e)}>
          {storageObjArr.length ? "-" : "cancel"}
        </button>
        <button className="storageDDOk homeYellowButton" value={coinId} onClick={(e) => handleAddStorage(e)}>
          Ok
        </button>
        <button className="storageDDMore homeDarkButton" onClick={(e) => handleOneMore(e)}>+</button>
      </div>
    </div>
  );
}
