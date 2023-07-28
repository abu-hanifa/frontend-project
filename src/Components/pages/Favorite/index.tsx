import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { getUserFavorites } from "../../../features/FavoriteSlice";

const Favorite = () => {
  const dispatch = useDispatch<AppDispatch>();
  const favoriteClothes = useSelector(
    (state: RootState) => state.favorite.clothes
  );
  useEffect(() => {
    dispatch(getUserFavorites());
  }, []);
  console.log(favoriteClothes);
  
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Favorite;
