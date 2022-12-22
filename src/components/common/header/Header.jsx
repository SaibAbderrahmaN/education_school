import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul  className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link style={{fontWeight:"900"}} to='/'>الصفحة الرئسية</Link>
            </li>
            <li>
              <Link style={{fontWeight:"900"}} to='/courses'>دروس</Link>
            </li>
            <li>
              <Link style={{fontWeight:"900"}} to='/about'>واجبات </Link>
            </li>
            <li>
              <Link style={{fontWeight:"900"}} to='/contact'>إتصل بنا</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>ملفي الشخصي</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
