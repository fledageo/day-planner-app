"use client"
import React from 'react'
import style from "./Header.module.css"
import Link from 'next/link';
import { LuBookOpenCheck } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { useState, useRef } from 'react';
import { FiAlignJustify } from "react-icons/fi";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropBtnRef = useRef<HTMLButtonElement | null>(null)


  window.onclick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (dropBtnRef.current) {
      if (!dropBtnRef.current.contains(target) && target.id !== "sideBar") {
        setIsOpen(false)
      }
    }
  }
  return (
    <>
      <div className={style.container}>
        <div className={style.mainWrapper}>
          <nav className={`navbar ${style.navWrapper}`}>
            <div className={style.logoBlock}>
              <Link href={"/"} className={`navbar-brand m-0 ${style.menuLink}`}><LuBookOpenCheck size={40} className={style.logoIcon} /></Link>
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

            <div className={style.personIconBlock}>
              {/* need to change */}
              <Link href={"/"} className={`navbar-brand m-0 ${style.menuLink}`}><IoPerson size={30} className={style.personIcon} /></Link>
            </div>

            <div className={style.dropdownMenuBlock}>
              <button id="dropdown-btn" className={style.dropBtn} ref={dropBtnRef} onClick={() => setIsOpen(!isOpen)}>
                <FiAlignJustify size={30}/>
              </button>
            </div>
          </nav>
        </div>
        {isOpen && (
          <div className={style.dropdownSideBar} id='sideBar'>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
          </div>
        )}
      </div>
    </>
  )
}
export default Header