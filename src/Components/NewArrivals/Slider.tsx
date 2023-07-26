import React from "react";
import styles from "./NewArrivals.module.css";
import { Carousel } from "antd";
import men from "../../assets/image/men.png";

const Slider = () => {
    
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "200px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div className={styles.main}>
      <span className={styles.headerText}>NewArrivals</span>
      <span className={styles.textGray}>
        Ознакомьтесь с нашими последними поступлениями в предстоящем сезоне
      </span>
      <div className={styles.slider}>
        <Carousel autoplay slidesToShow={6}>
          <div>
            <img style={contentStyle} src={men} alt="men" />
          </div>
          <div>
            <img style={contentStyle} src={men} alt="men" />
          </div>
          <div>
            <img style={contentStyle} src={men} alt="men" />
          </div>
          <div>
            <img style={contentStyle} src={men} alt="men" />
          </div>
          <div>
            <img style={contentStyle} src={men} alt="men" />
          </div>
          <div>
            <img style={contentStyle} src={men} alt="men" />
          </div>
          <div>
            <img style={contentStyle} src={men} alt="men" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
