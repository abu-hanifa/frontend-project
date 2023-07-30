import React, { useEffect, useState, } from 'react';
import styles from './Profile.module.css';
import deleteIcon from '../../../assets/SvgIcons/delete.svg';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import { getUser } from '../../../features/userSlice';
import Eye from '../../../assets/SvgIcons/Eye.svg'


const MyProfile = () => {

  const user = useSelector((state: RootState) => state.user.user)
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false)
  const [valuePasswordConfirm, setValuePasswordConfirm] = useState()
  const [valuePassword, setvaluePassword] = useState()
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  useEffect(() => {
    dispatch(getUser())
  }, [])

  const handleFormChange = (e) => {
    e.preventDefault();

  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (valuePassword !== valuePasswordConfirm) {
      setPasswordsMatch(false);
      set
    } else {
      //здесь будет логика для отправки формы
      setPasswordsMatch(true);
    }
  }

  const handlePasswordChange = (e) => {
    setvaluePassword(e.target.value)
  }

  const handleConfirmPasswordChange = (event) => {
    setValuePasswordConfirm(event.target.value)
  }
  console.log(valuePasswordConfirm);

  return (
    <div>
      <div className={styles.titleProfile}>
        <h2>My Profile</h2>
        <div className={styles.deleteButton}>
          <button> <img src={deleteIcon} alt="delete" />Delete account</button>
        </div>
      </div>
      <form className={styles.profileForm} onSubmit={handleFormChange}>
        <div className={styles.formGroup}>
          <div><label htmlFor="first-name">First Name</label></div>
          <input type="text"
            id="first-name"
            name="first-name"
            value={user.name}
            required />
        </div>

        <div className={styles.formGroup}>
          <div><label htmlFor="last-name">Last Name</label></div>
          <input type="text"
            id="last-name"
            name="last-name"
            value={user.subName}
            required />
        </div>

        <div className={styles.formGroup}>
          <div><label htmlFor="email">Email</label></div>
          <input type="email"
            id="email"
            name="email"
            required
            value={user.email}
          />
        </div>

        <div className={styles.formGroup}>
          <div><label htmlFor="phone">Phone</label></div>
          <input type="tel"
            id="phone"
            name="phone"
            value={user.phone}
          />
        </div>

        <div className={styles.formGroup}>
          <div><label htmlFor="new-password">New Password</label></div>
          <div className={styles.wrappforInputAndBtn}>
            <input type={showPassword ? 'text' : 'password'}
              id="new-password"
              name="new-password"
              value={valuePassword}
              onChange={(e) => handlePasswordChange(e)}
            />
            <button onClick={() => setShowPassword(!showPassword)}>
              <img
                src={Eye}
                alt=""
              />
            </button>
          </div>
          {!passwordsMatch && (
            <p style={{ color: 'red' }}>Пароли не совпадают!</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <div><label
            htmlFor="confirm-password">
            Confirm Password
          </label>
          </div>

          <div className={styles.wrappforInputAndBtn}>
            <input type={showPassConfirm ? 'text' : 'password'}
              id="confirm-password"
              name="confirm-password"
              value={valuePasswordConfirm}
              onChange={(event) => handleConfirmPasswordChange(event)}
            />
            <button onClick={() => setShowPassConfirm(!showPassConfirm)}>
              <img
                src={Eye}
                alt=""
              />
            </button>
          </div>
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
          <input id="address" name="address"></input>
        </div>

        <div className={styles.formGroup}>
          <div><label htmlFor="zip-code">ZIP Code</label></div>
          <input type="text" id="zip-code" name="zip-code" />
        </div>
        <button onClick={handleFormSubmit} className={styles.saveBtn}>Save changes</button>
      </form>
    </div>
  );
};

export default MyProfile;




