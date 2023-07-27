import { Header } from 'antd/es/layout/layout'
import React from 'react'
import Offers from './Offers'
import BreadCramb from './BreadCramb'
import MyProfile from './MyProfile'
import UserSideBar from './UserSideBar'
import MainProfile from './MainProfile'


const Profile = () => {
  return (
    <div>
      <Offers />
      <BreadCramb />
      <MainProfile/>
    </div>
  )
}

export default Profile
