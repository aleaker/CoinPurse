import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMyWatchlist } from "../../../Store/actions/watchlistActions";
import WatchedCoin from "./watchedCoin";

export default function Watchlist() {
  const following = useSelector(state => state.following)
  const watched = useSelector(state => state.watched);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyWatchlist(following));
  }, []);

  return (
    <div>
      {watched.length ? (
        watched.map(coin => <WatchedCoin key={coin.symbol} coin={coin} />)
      ) : (
        <p>ta cargando pa</p>
      )}
    </div>
  );
}
