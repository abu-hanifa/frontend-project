import React from "react";
import styles from "./contactUs.module.css";
import phone from "../../../assets/image/iPhone.png";
import mail from "../../../assets/image/Mail.png";
import message from "../../../assets/image/Messenger.png";
import twitter from "../../../assets/image/Twitter.png";


const ContactsUs = () => {
  return (
    <div>
     
    <div className={styles.rod}>
      <div className={styles.content}>
        <p>
        Если у вас есть какие-либо вопросы, проблемы или комментарии, мы будем рады услышать
          от вас! Отправьте запрос любым из способов ниже:
        </p>
        <div>
          <div className={styles.icon}>
            <img src={phone} alt="" />
            <p>(405) 555-0128</p>
          </div>
          <div className={styles.icon}>
            <img src={mail} alt="" />
            <p>Отправить нам письмо</p>
          </div>
          <div className={styles.icon}>
            <img src={message} alt="" />
            <p>Подключиться к мессенджеру</p>
          </div>
          <div className={styles.icon}>
            <img src={twitter} alt="" />
            <p>Напишите нам</p>
          </div>
        </div>
        <h2>Или свяжитесь с нами, заполнив форму ниже:</h2>
        <div className={styles.input}>
          <div>
            <p>Полное имя*</p> <input placeholder="Ваше полное имя" type="text" />
          </div>
          <div>
            <p>Email*</p> <input placeholder="Email" type="email" />
          </div>
          <div>
            <p>Телефон</p> <input placeholder="Ваш номер телефона" type="tel" />
          </div>
          <div>
            <p>Предмет</p> <input placeholder="Назовите свое сообщение" type="text" />
          </div>
        </div>
        <div className={styles.bigInput}>
          <p>Сообщение*</p> <textarea placeholder="Напишите ваше сообщение здесь"  />
        </div>
        <button className={styles.but}>Отправить сообщение</button>
      </div>
    </div>
    </div>
  );
};

export default ContactsUs;
