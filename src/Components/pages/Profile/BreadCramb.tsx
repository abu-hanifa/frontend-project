import React from 'react'
import Home from '../../assets/SvgIcons/Home.svg'
import styles from './Profile.module.css'
import RightShevronBread from '../../assets/SvgIcons/RightShevronBread.svg'
import { Link } from 'react-router-dom'
function BreadCramb() {
  return (
    <div className={styles.BreadcrumbMain}>
      <div className={styles.wrappBreadCrumb}>
        <Link to="/">
          <img src={Home}
            alt="homeIcon" />
        </Link>
        <img src={RightShevronBread} alt="Shevron" />
        <Link to="/my-profile">
          <span>Account</span>
        </Link>
        <img src={RightShevronBread} alt="Shevron" />
        <Link to="/my-profile">
          <span>My profile </span>
        </Link>
      </div>

    </div>
  )
}

export default BreadCramb