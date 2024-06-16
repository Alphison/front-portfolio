"use client"

import React from 'react';
import { pushRotate as Menu } from 'react-burger-menu';
import Cursor from '../Cursor/Cursor';
import Link from 'next/link';
import { useMenuStore } from '@/store/useMenuStore';

const BurgerMenu = () => {

  const status = useMenuStore((state) => state.status)
  const updateStatus = useMenuStore((state) => state.updateStatus)

  return (
    <Menu left isOpen={ status } onClose={() => updateStatus()} pageWrapId={"page-wrap"} outerContainerId={'outer-container'}>
      {/* <Cursor /> */}
      <div className="bg-black p-5 flex-col gap-5 h-full font-mono" style={{display: 'flex'}}>        
        <Link className="menu-item" href="/">
          Главная
        </Link>
        <Link className="menu-item" href="/projects">
          Проекты
        </Link>
        <Link className="menu-item" href="#about">
          О нас
        </Link>
      </div>
    </Menu>
  );
};

export default BurgerMenu;