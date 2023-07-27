import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategoryCloth, fetchCloth } from "../../features/clothSlice";
import { AppDispatch, RootState } from "../../app/store";
import { useParams, Link } from "react-router-dom";

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
            <Link to={`/onecloth/${item._id}`}>
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryCloth;
