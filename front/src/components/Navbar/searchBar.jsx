import React from "react";

export default function SearchBar({handleChangeSearch,handleSearch}){

    return(
        <form >
            <input onChange ={(e)=>handleChangeSearch(e)}>
            </input>
            <button onClick={(e)=>handleSearch(e)}>GO</button>
        </form>
    )
}