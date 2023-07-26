import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { fetchCategory } from "../../../features/categorySlice";
import styles from "./AddCloth.module.css";
import { createCloth } from "../../../features/clothSlice";

const AddCloth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((state: RootState) => state.category.category);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState("64bfbe786399ae3ace9dc57d");
  const [size, setSize] = useState([
    { size: "XS", inStock: 100 },
    { size: "S", inStock: 100 },
    { size: "M", inStock: 100 },
    { size: "L", inStock: 100 },
    { size: "XL", inStock: 100 },
  ]);
  const [image, setImage] = useState("");
  const [popUp, setPopUp] = useState(false);

  const categoryName = categories.find((item) => item._id === category);

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  const categoryPopUp = (id) => {
    setCategory(id);
    setPopUp(false);
  };
  const handleAddCloth = () => {
    dispatch(createCloth({ name, description, price, category, size, image }));
  };
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
            <div key={item._id} onClick={() => categoryPopUp(item._id)}>
              {item.name}
            </div>
          ))}
        </div>
      ) : (
        <div>
          {categories[0] ? (
            <div onClick={() => setPopUp(true)}>
              Выбрать категорию:
              {categoryName.name && categoryName.name}
            </div>
          ) : (
            "Loading"
          )}
        </div>
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
      <button className={styles.addButton} onClick={handleAddCloth}>
        Добавить одежду
      </button>
    </div>
  );
};

export default AddCloth;
