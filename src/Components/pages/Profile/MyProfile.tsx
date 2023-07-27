import React from 'react';
import styles from './Profile.module.css';
import deleteIcon from '../../../assets/SvgIcons/delete.svg';

const MyProfile = () => {
  return (
    <div>
      <div className={styles.titleProfile}>
        <h2>My Profile</h2>
        <div className={styles.deleteButton}>
          <button> <img src={deleteIcon} alt="delete" />Delete account</button>
        </div>
      </div>
      <form className={styles.profileForm}>
        <div className={styles.formGroup}>
          <div><label htmlFor="first-name">First Name</label></div>
          <input type="text" id="first-name" name="first-name" required />
        </div>

        <div className={styles.formGroup}>
          <div><label htmlFor="last-name">Last Name</label></div>
          <input type="text" id="last-name" name="last-name" required />
        </div>

        <div className={styles.formGroup}>
          <div><label htmlFor="email">Email</label></div>
          <input type="email" id="email" name="email" required />
        </div>

        <div className={styles.formGroup}>
          <div><label htmlFor="phone">Phone</label></div>
          <input type="tel" id="phone" name="phone" />
        </div>

        <div className={styles.formGroup}>
          <div><label htmlFor="new-password">New Password</label></div>
          <input type="password" id="new-password" name="new-password" />
        </div>

        <div className={styles.formGroup}>
          <div><label htmlFor="confirm-password">Confirm Password</label></div>
          <input type="password" id="confirm-password" name="confirm-password" />
        </div>

        <div className={styles.formGroup}>
          <div><label htmlFor="country">Country</label></div>
          <input type="text" id="country" name="country" />
        </div>

        <div className={styles.formGroup}>
          <div><label htmlFor="city">City</label></div>
          <input type="text" id="city" name="city" />
        </div>

        <div className={styles.formGroup}>
          <div><label htmlFor="address">Address</label></div>
          <textarea id="address" name="address" rows={3}></textarea>
        </div>

        <div className={styles.formGroup}>
          <div><label htmlFor="zip-code">ZIP Code</label></div>
          <input type="text" id="zip-code" name="zip-code" />
        </div>
          <button className={styles.saveBtn}>Save changes</button>
      </form>
    </div>
  );
};

export default MyProfile;




