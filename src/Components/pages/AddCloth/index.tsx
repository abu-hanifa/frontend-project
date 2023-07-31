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
  const [addCloth, setAddCloth] = useState(false);
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
    setAddCloth(true);
    return setTimeout(() => {
      setAddCloth(false);
    }, 3000);
  };
  if (addCloth) {
    return <span className={styles.adding}>Товар добавлен</span>;
  }
  return (
    <div className={styles.Wrapper}>
      <div className={styles.title}>Добавление товара</div>
      <div className={styles.main}>
        <div>
          <label className={styles.labelInpunts}>
            Название товара:
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </div>
        <div>
          <label className={styles.labelInpunts}>
            Описание товара:
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label className={styles.labelInpunts}>
            Цена:
            <input
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </label>
        </div>
      </div>
      {popUp ? (
        <>
          <span className={styles.categoryText}>Выбрать категорию:</span>
          <div className={styles.categoryPopUp}>
            {categories.map((item) => (
              <div key={item._id} onClick={() => categoryPopUp(item._id)}>
                {item.name}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>
          {categories[0] ? (
            <div className={styles.flexBlock}>
              <span className={styles.categoryText}>Выбрать категорию:</span>
              <div
                onClick={() => setPopUp(true)}
                className={styles.activeCategory}
              >
                {categoryName.name && categoryName.name}
              </div>
            </div>
          ) : (
            "Loading"
          )}
        </div>
      )}
      <div>
        <input
          className={styles.fileInput}
          name="file"
          id="file"
          onChange={(e) => setImage(e.target.files)}
          type="file"
          multiple
        />
      </div>
      <div className={styles.photoBlock}>
        <label className={styles.photoInput} htmlFor="file">
          <span>Выбрать изображение</span>
        </label>
      </div>
      <div className={styles.addButtonBlock}>
        <button className={styles.addButton} onClick={handleAddCloth}>
          Добавить одежду
        </button>
      </div>
    </div>
  );
};

export default AddCloth;
