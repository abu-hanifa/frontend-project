import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { fetchCategory } from "../../../features/categorySlice";
import styles from "./AddCloth.module.css";

const AddCloth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((state: RootState) => state.category.category);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>();
  const [category, setCategory] = useState("");
  const [size, setSize] = useState([
    { size: "XS", inStock: 100 },
    { size: "S", inStock: 100 },
    { size: "M", inStock: 100 },
    { size: "L", inStock: 100 },
    { size: "XL", inStock: 100 },
  ]);
  const [image, setImage] = useState("");
  const [popUp, setPopUp] = useState(true);

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  return (
    <div className={styles.Wrapper}>
      <label>
        Название:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Описание:
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Цена:
        <input
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </label>
      {popUp ? (
        <div className={styles.categoryPopUp}>
          {categories.map((item) => (
            <div>{item.name}</div>
          ))}
        </div>
      ) : (
        ""
      )}
      <div>
        <input
          name="file"
          id="file"
          onChange={(e) => setImage(e.target.files)}
          type="file"
          multiple
        />
      </div>
    </div>
  );
};

export default AddCloth;
