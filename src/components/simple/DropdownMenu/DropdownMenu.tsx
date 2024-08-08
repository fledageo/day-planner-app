"use client"
import React, { useRef, useState } from 'react'
import "./style.css"
import { FiAlignJustify } from "react-icons/fi";
import Link from 'next/link';
import { IDropdownMenuItem } from '@/lib/types';

type MenuItem = [string, string]

interface IProps {
  menuItems: IDropdownMenuItem[]
}


const DropdownMenu = ({ menuItems }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropBtnRef = useRef<HTMLButtonElement | null>(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  window.onclick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (dropBtnRef.current) {
      if (!dropBtnRef.current.contains(target)) {
        setIsOpen(false)
      }
    }
  }
  return (
    <div className="dropdown">
      <button id="dropdown-btn" className="dropbtn" ref={dropBtnRef} onClick={toggleDropdown}>
        <FiAlignJustify />
      </button>
      {isOpen && (
        <div className="dropdown-content">
        {
          menuItems.map(item =><Link href={item.href}>{item.content}</Link>)
        }
        </div>

      )}
    </div>
  );
}
export default DropdownMenu
