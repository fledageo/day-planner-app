"use client"
import React, { useEffect } from 'react'
import style from "./Header.module.css"
import Link from 'next/link';
import { LuBookOpenCheck } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { useState, useRef } from 'react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropBtnRef = useRef<HTMLButtonElement | null>(null)


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      console.log("Yess")
      if (dropBtnRef.current) {
        if (!dropBtnRef.current.contains(target) && target.id !== "sideBar") {
          setIsOpen(false)
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <div className={style.container}>
        <div className={style.mainWrapper}>
          <nav className={`navbar ${style.navWrapper}`}>
            <div className={style.logoBlock}>
              <Link href={"/"} className={`m-0 ${style.menuLink}`}><LuBookOpenCheck size={40} className={style.logoIcon} /></Link>
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
              <button
                className={`m-0 ${style.dropMenuBtn} ${isOpen ? style.open : ""}`}
                ref={dropBtnRef}
                onClick={() => setIsOpen(!isOpen)}
              >

                <IoPerson size={30} className={style.personIcon} />
              </button>
            </div>
          </nav>
        </div>
        <div className={`${style.dropdownSideBar} ${isOpen ? style.show : ''}`} id='sideBar'>
          <Link href="/user/signUp" className={style.dropItem}>Sign up</Link>
          <Link href="/" className={style.dropItem}>Sign in</Link>
          <Link href="/" className={style.dropItem}>...</Link>
          <Link href="/" className={style.dropItem}>...</Link>
        </div>
      </div>
    </>
  )
}
export default Header