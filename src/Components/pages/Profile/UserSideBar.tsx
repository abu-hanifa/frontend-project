import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import styles from './Profile.module.css'
import profileIcon from '../../../assets/SvgIcons/profile.svg'
import myOrderBag from '../../../assets/SvgIcons/bag.svg'
import heart from '../../../assets/SvgIcons/heart.svg'
import eye from '../../../assets/SvgIcons/Eye.svg'
import star from '../../../assets/SvgIcons/star.svg'
import logout from '../../../assets/SvgIcons/logout.svg'
import { getUser } from '../../../features/userSlice';
import { useNavigate } from 'react-router-dom';


const UserSideBar = () => {
  const user = useSelector((state: RootState) => state.user.user)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const handleExit = (e) => {
    e.preventDefault()

    localStorage.removeItem('token')
    location.reload()
    navigate('/')
  }



  useEffect(() => {
    dispatch(getUser())
  }, [])



  return (
    <div className={styles.SideBarWrapp}>
      <div className={styles.User}>
        <div className={styles.UserName}>{user.name} {user.subName}</div>
        <div className={styles.UserEmail}>{user.email}</div>
      </div>
      <hr className={styles.divider} />

      <div>
        <div className={styles.MyProfile}>
          <Link to="/my-profile">
            <img className={styles.imgProfile} src={profileIcon} alt="profile" />
            <span className={styles.text}>Мой профиль</span>
          </Link>
        </div>
        <hr className={styles.divider} />
        <div className={styles.MyProfile}>
          <Link to="/my-profile">
            <img className={styles.imgProfile} src={myOrderBag} alt="profile" />
            <span className={styles.text}>Мои заказы</span>
          </Link>
        </div>
        <hr className={styles.divider} />
        <div className={styles.MyProfile}>
          <Link to="/my-profile">
            <img className={styles.imgProfile} src={heart} alt="profile" />
            <span className={styles.text}>Избранные</span>
          </Link>
        </div>
        <hr className={styles.divider} />
        <div className={styles.MyProfile}>
          <Link to="/my-profile">
            <img className={styles.imgProfile} src={eye} alt="profile" />
            <span className={styles.text}>Недавно просмотренные</span>
          </Link>
        </div>
        <hr className={styles.divider} />
        <div className={styles.MyProfile}>
          <Link to="/my-profile">
            <img className={styles.imgProfile} src={star} alt="profile" />
            <span className={styles.text}>Мои отзывы</span>
          </Link>
        </div>
        <hr className={styles.divider} />
        <div className={styles.MyProfile}>
          <Link to="/my-profile">
            <img className={styles.imgProfile} src={logout} alt="profile" />
            <span onClick={handleExit} className={styles.text}>Выход</span>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default UserSideBar
