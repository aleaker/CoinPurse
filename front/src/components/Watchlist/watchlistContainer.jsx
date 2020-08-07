import React, { useEffect, useState, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMyWatchlist,
  setMyWatchlist,
} from "../../../Store/actions/watchlistActions";
import WatchedCoin from "./watchedCoin";
import {
  fetchFavorites,
  deleteFavorite,
} from "../../../Store/actions/favoritesActions";


export default function Watchlist() {
  const following = useSelector((state) => state.following);
  const [watched, setWatched] = useState(["loading"]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
	//fetchMyWatchlist(following, setWatched);
	(async function anyNameFunction() {
		const fav = await following;
		 await loadContent(fav);
		 setLoading(false);
	
	  })();

    // async function anyNameFunction() {
	// 	await loadContent(following);
		
	//   }
	  // Execute the created function directly
	  

    // const reloader = setInterval(() => dispatch(fetchMyWatchlist(following)), 10000);
    // return () => clearInterval(reloader);
  }, [following]);

const loadContent = (following)=>{
	fetchMyWatchlist(following, setWatched);
	return "listo"

}

  const handleDeletFavorite = (e) => {
    e.preventDefault();
    dispatch(deleteFavorite(e.target.value));
    let newWatchlist = watched.filter(
      (element) => element.id != e.target.value
    );
    setWatched(newWatchlist);
  };

  return (
    <div className="watchlistContainer">

      <div className="watchlistUpperBox"></div>
      <h2>Section under development</h2> 
{console.log(watched)}
      {watched[0] === "loading" ? (
        <p>Loading...</p>) 
		: 
		(watched[0] === "none" ? 
			(<p>Not following any assets</p>)
			:
			(
			watched.map((coin) => (
        	<WatchedCoin
            	key={coin.symbol}
            	coin={coin}
            	handleDeletFavorite={handleDeletFavorite}
          	/>))
			) 
		)
	}
    </div>
  );
}
