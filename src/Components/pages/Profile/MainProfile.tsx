import React from 'react'
import UserSideBar from './UserSideBar'
import MyProfile from './MyProfile'
import styles from './Profile.module.css'

function MainProfile() {
    return (
        <div className={styles.container}>
            <UserSideBar />
            <MyProfile />
        </div>
    )
}

export default MainProfile