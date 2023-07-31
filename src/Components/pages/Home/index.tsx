import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import NewArrivals from "../../NewArrivals";
import NewCollection from "../../NewCollection";
import { AppDispatch } from "../../../app/store";
import { fetchCloth } from "../../../features/clothSlice";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchCloth());
  }, []);
  return (
    <div>
      <NewCollection />
      <NewArrivals />
    </div>
  );
};

export default Home;
