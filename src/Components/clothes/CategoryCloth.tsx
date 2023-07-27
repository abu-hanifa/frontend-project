import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategoryCloth, fetchCloth } from "../../features/clothSlice";
import { AppDispatch, RootState } from "../../app/store";
import { useParams } from "react-router-dom";

function CategoryCloth() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const cloth = useSelector((state: RootState) => state.cloth.cloths);
  useEffect(() => {
    dispatch(fetchCategoryCloth(id));
  }, []);
  

  return (
    <div>
      {cloth.map((item) => {
        return (
          <div>
            <div>
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryCloth;
