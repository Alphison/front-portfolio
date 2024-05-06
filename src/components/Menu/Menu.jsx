"use client"

import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Cursor from '../Cursor/Cursor';
import Link from 'next/link';

const BurgerMenu = () => {
  return (
    <Menu left isOpen={ true } pageWrapId={"page-wrap"} outerContainerId={'outer-container'}>
      <Cursor />
      <div className="bg-black p-5 flex-col gap-5 h-full" style={{display: 'flex'}}>        
        <Link id="home" className="menu-item" href="/">
          Home
        </Link>
        <Link id="about" className="menu-item" href="/about">
          About
        </Link>
        <Link id="contact" className="menu-item" href="/contact">
          Contact
        </Link>
      </div>
    </Menu>
  );
};

export default BurgerMenu;