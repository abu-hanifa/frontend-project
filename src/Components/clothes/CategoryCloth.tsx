import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategoryCloth, fetchCloth } from "../../features/clothSlice";
import { AppDispatch, RootState } from "../../app/store";
import { useParams, Link } from "react-router-dom";
import styles from './categoryCloth.module.css'

function CategoryCloth() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const cloth = useSelector((state: RootState) => state.cloth.cloths);
  useEffect(() => {
    dispatch(fetchCategoryCloth(id));
  }, []);
  

  return (
    <div className={styles.cart}>
      {cloth.map((item) => {
        return (
          <div >
            <Link to={`/onecloth/${item._id}`}>
              <img className={styles.img} src={`http://localhost:4000/${item.image[0].path}`} alt="" />
              <p>{item.name}</p>
              <h3>  ${item.price}</h3>
              </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryCloth;
