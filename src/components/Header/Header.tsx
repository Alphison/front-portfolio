"use client"

import style from './Header.module.css'
import Link from "next/link";
import Burger from "../Burger/Burger";
import { useEffect, useState } from 'react';

export default function Header() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
            setVisible(visible);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    return (
        <header className={visible ? style.header : style.header + " " + style.active}>
            <div>
                <div className={style.lang}>
                    <p className="text-[20px]">RU</p>
                </div>
            </div>
            <Link href={'/'} className="bg text-[30px]">
                CRUD
            </Link>
            <Burger />
        </header>
    )
}
