import React from "react";

export default function SearchBar({handleChangeSearch,handleSearch}){

    return(
        <form className="searchBarForm">
            <input className="searchBarInput" onChange ={(e)=>handleChangeSearch(e)}>
            </input>
            <button className="searchBarButton" onClick={(e)=>handleSearch(e)}>GO</button>
        </form>
    )
}