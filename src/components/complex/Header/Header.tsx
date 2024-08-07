import React from 'react'
import style from "./Header.module.css"
import Image from 'next/image'
import Link from 'next/link';
import { LuBookOpenCheck } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
const Header = () => {
  console.log(window.innerWidth)
  return (
    <>
      <div className={style.container}>
        <div className={style.mainWrapper}>
          <nav className={`navbar ${style.navWrapper}`}>
            <div className={style.logoBlock}>
              <Link href={"/"} className={`navbar-brand m-0 ${style.menuLink}`}><LuBookOpenCheck size={40} className={style.logoIcon}/></Link>
            </div>
            <div className={style.menuBlock}>
              <ul className={`navbar-nav ${style.navMenu}`}>
                <li className='nav-item'>
                  <Link href={"/"} className={`nav-link ${style.menuLink}`}>Home</Link>
                </li>
                <li className='nav-item'>
                  <Link href={"/"} className={`nav-link ${style.menuLink}`}>Services</Link>
                </li>
                <li className='nav-item'>
                  <Link href={"/"} className={`nav-link ${style.menuLink}`}>Works</Link>
                </li>
                <li className='nav-item'>
                  <Link href={"/"} className={`nav-link ${style.menuLink}`}>About</Link>
                </li>
              </ul>
            </div>
            <div className={style.othersBlock}>
              {/* need to change */}
              <Link href={"/"} className={`navbar-brand m-0 ${style.menuLink}`}><IoPerson size={30} className={style.personIcon}/></Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
export default Header