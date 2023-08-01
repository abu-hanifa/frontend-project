import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styles from "./outlet.module.css";
import img1 from "../../../assets/image/image(1).png";
import img2 from "../../../assets/image/image (2).png";
import img3 from '../../../assets/image/image (3).png'
import img4 from '../../../assets/image/image (4).png'
import phone from "../../../assets/image/iPhone.png";
import message from "../../../assets/image/Mail.png";
import clock from "../../../assets/image/Clock.png";
import navigate from "../../../assets/image/outline.png";

const OutletStores = () => {
  return (
    <div className={styles.glav}>
      <div className={styles.route}>
        <Link className={styles.contact} to="/contact"><h3>ContactUs</h3></Link>
        <Link className={styles.outlet} to="/contact/outlet"><h3>Outlet stores</h3></Link>
        <Link className={styles.faq} to='/contact/faq'><h3>FAQ</h3></Link>

       
      </div>
      <div className={styles.rod}>
        <div className={styles.cards}>
          <div className={styles.oneCard}>
            <img src={img1} alt="" />
            <h3>New York, USA</h3>
            <div className={styles.icon}>
              <img src={phone} alt="" />
              <p>(405) 555-0128</p>
            </div>
            <div className={styles.icon}>
              <img src={message} alt="" />
              <p>hello@createx.com</p>
            </div>
            <div className={styles.icon}>
              <img src={clock} alt="" />
              <p>Daily from 9 am to 9 pm</p>
            </div>
            <div className={styles.icon}>
              <img src={navigate} alt="" />
              <p>20 W 29th Street New York, NY 10001</p>
            </div>
          </div>
          <div className={styles.oneCard}>
            <img src={img2} alt="" />
            <h3>Delaware, USA</h3>
            <div className={styles.icon}>
              <img src={phone} alt="" />
              <p>(808) 555-0111</p>
            </div>
            <div className={styles.icon}>
              <img src={message} alt="" />
              <p>delaware@createx.com</p>
            </div>
            <div className={styles.icon}>
              <img src={clock} alt="" />
              <p>Daily from 10 am to 9 pm</p>
            </div>
            <div className={styles.icon}>
              <img src={navigate} alt="" />
              <p>6391 Elgin St. Celina, Delaware 10299</p>
            </div>
          </div>
          <div className={styles.oneCard}>
            <img src={img3} alt="" />
            <h3>New Jersey, USA</h3>
            <div className={styles.icon}>
              <img src={phone} alt="" />
              <p>(702) 555-0122</p>
            </div>
            <div className={styles.icon}>
              <img src={message} alt="" />
              <p>newjersey@createx.com</p>
            </div>
            <div className={styles.icon}>
              <img src={clock} alt="" />
              <p>Daily from 9 am to 8 pm</p>
            </div>
            <div className={styles.icon}>
              <img src={navigate} alt="" />
              <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
            </div>
          </div>
          <div className={styles.oneCard}>
            <img src={img4} alt="" />
            <h3>Maine, USA</h3>
            <div className={styles.icon}>
              <img src={phone} alt="" />
              <p>(219) 555-0114</p>
            </div>
            <div className={styles.icon}>
              <img src={message} alt="" />
              <p>maine@createx.com</p>
            </div>
            <div className={styles.icon}>
              <img src={clock} alt="" />
              <p>Daily from 9 am to 9 pm</p>
            </div>
            <div className={styles.icon}>
              <img src={navigate} alt="" />
              <p>8502 Preston Rd. Inglewood, Maine 98380</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutletStores;
