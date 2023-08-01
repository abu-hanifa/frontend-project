import React from 'react'
import ContactsUs from './ContactsUs'
import { Link, Route, Routes } from 'react-router-dom'
import styles from './index.module.css'
import FAQ from './FAQ'

const Contacts = () => {
  return (
    <div className={styles.route} >
      <Link className={styles.contact} to='/contact'><h3>ContactUs</h3></Link>
      <Link className={styles.outlet} to='/contact/outlet'><h3>Outlet stores</h3></Link>
      <Link className={styles.faq} to='/contact/faq'><h3>FAQ</h3></Link>
      
      <Routes>
        <Route path="/" element={<ContactsUs/>}/>
        
        <Route path='/faq' element={<FAQ/>}/>
      </Routes>
      
    </div>
  )
}

export default Contacts
