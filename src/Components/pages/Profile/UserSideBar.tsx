import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Profile.module.css'
import profileIcon from '../../../assets/SvgIcons/profile.svg'
import myOrderBag from '../../../assets/SvgIcons/bag.svg'
import heart from '../../../assets/SvgIcons/heart.svg'
import eye from '../../../assets/SvgIcons/Eye.svg'
import star from '../../../assets/SvgIcons/star.svg'
import logout from '../../../assets/SvgIcons/logout.svg'

const UserSideBar = () => {
  return (
    <div className={styles.SideBarWrapp}>
      <div className={styles.User}>
        <div className={styles.UserName}>Annette Black</div>
        <div className={styles.UserEmail}>annetteb@example.com</div>
      </div>
      <hr className={styles.divider} />

      <div>
        <div className={styles.MyProfile}>
          <Link to="/my-profile">
            <img className={styles.imgProfile} src={profileIcon} alt="profile" />
            <span className={styles.text}>My profile</span>
          </Link>
        </div>
        <hr className={styles.divider} />
        <div className={styles.MyProfile}>
          <Link to="/my-profile">
            <img className={styles.imgProfile} src={myOrderBag} alt="profile" />
            <span className={styles.text}>My orders</span>
          </Link>
        </div>
        <hr className={styles.divider} />
        <div className={styles.MyProfile}>
          <Link to="/my-profile">
            <img className={styles.imgProfile} src={heart} alt="profile" />
            <span className={styles.text}>Wishlist</span>
          </Link>
        </div>
        <hr className={styles.divider} />
        <div className={styles.MyProfile}>
          <Link to="/my-profile">
            <img className={styles.imgProfile} src={eye} alt="profile" />
            <span className={styles.text}>Recently viewed</span>
          </Link>
        </div>
        <hr className={styles.divider} />
        <div className={styles.MyProfile}>
          <Link to="/my-profile">
            <img className={styles.imgProfile} src={star} alt="profile" />
            <span className={styles.text}>My reviews</span>
          </Link>
        </div>
        <hr className={styles.divider} />
        <div className={styles.MyProfile}>
          <Link to="/my-profile">
            <img className={styles.imgProfile} src={logout} alt="profile" />
            <span className={styles.text}>Sign out</span>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default UserSideBar
