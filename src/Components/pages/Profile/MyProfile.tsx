import React, { useEffect, useState, } from 'react';
import styles from './Profile.module.css';
import deleteIcon from '../../../assets/SvgIcons/delete.svg';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import { getUser, updateUser } from '../../../features/userSlice';
import Eye from '../../../assets/SvgIcons/Eye.svg'


const MyProfile = () => {

  const user = useSelector((state: RootState) => state.user.user)
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false)
  const [valuePasswordConfirm, setValuePasswordConfirm] = useState()
  const [valuePassword, setvaluePassword] = useState()
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const [name, setName] = useState(user.name);
  const [subName, setSubName] = useState(user.subName);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [country, setCountry] = useState(user.country);
  const [city, setCity] = useState(user.city);
  const [address, setAddress] = useState(user.address)
  const [zipCode, setZipCode] = useState(user.zipCode);


  useEffect(() => {
    dispatch(getUser())
  }, [])


  useEffect(() => {
    setName(user.name)
    setSubName(user.subName)
    setEmail(user.email)
    setPhone(user.phone)
    setCountry(user.country)
    setCity(user.city)
    setAddress(user.address)
    setZipCode(user.zipCode)




  }, [user])


  // const handleFormChange = (e) => {
  //   e.preventDefault();

  // }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (valuePassword !== valuePasswordConfirm) {
      setPasswordsMatch(false);

    } else {
      dispatch(updateUser({
        name,
        subName,
        phone,
        address,
        email,
        password,
        country,
        city,
        zipCode
      }))
      setPasswordsMatch(true);
    }
  }

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleSubName = (e) => {
    setSubName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePhone = (e) => {
    setPhone(e.target.email)
  }
  const handleCountry = (e) => {
    setCountry(e.target.value)
  }
  const handleCity = (e) => {
    setCity(e.target.value)
  }
  const handleAddress = (e) => {
    setAddress(e.target.value)
  }
  const handleZipCOde = (e) => {
    setZipCode(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setvaluePassword(e.target.value);
    setPassword(e.target.value);
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
      <form className={styles.profileForm}>
        <div className={styles.formGroup}>
          <div><label htmlFor="first-name">First Name</label></div>
          <input type="text"
            id="first-name"
            name="first-name"
            value={name}
            onChange={handleName}
            required />
        </div>

        <div className={styles.formGroup}>
          <div><label htmlFor="last-name">Last Name</label></div>
          <input type="text"
            id="last-name"
            name="last-name"
            value={subName}
            onChange={handleSubName}
            required />
        </div>

        <div className={styles.formGroup}>
          <div><label htmlFor="email">Email</label></div>
          <input type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmail}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <div><label htmlFor="phone">Phone</label></div>
          <input type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handlePhone}
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
          <input type="text"
            id="country"
            name="country"
            value={country}
            onChange={handleCountry}
          />
        </div>

        <div className={styles.formGroup}>
          <div><label htmlFor="city">City</label></div>
          <input type="text"
            id="city"
            name="city"
            value={city}
            onChange={handleCity}
          />
        </div>

        <div className={styles.formGroup}>
          <div><label htmlFor="address">Address</label></div>
          <input type="text"
            id="address"
            name="address"
            value={address}
            onChange={handleAddress}
          />
        </div>

        <div className={styles.formGroup}>
          <div><label htmlFor="zip-code">ZIP Code</label></div>
          <input type="text"
            id="zip-code"
            name="zip-code"
            value={zipCode}
            onChange={handleZipCOde}
          />
        </div>
        <button onClick={handleFormSubmit} className={styles.saveBtn}>Save changes</button>
      </form>
    </div>
  );
};

export default MyProfile;




