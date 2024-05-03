import Image from "next/image";
import logo from '../../public/assets/images/logo.svg'
import burger from '../../../public/assets/images/burger.svg'
import language from '../../public/assets/images/globe.svg'
import style from './Header.module.css'
import Link from "next/link";

export default function Header() {
    return (
        <header className={style.header}>
            <div>
                <div className={style.lang}>
                    <p className="text-[20px]">RU</p>
                </div>
            </div>
            <Link href={'/'} className="bg text-[30px]">
                CRUD
            </Link>
            <div>
                <Image src={burger} width={80} height={15} alt=""/>
            </div>
        </header>
    )
}
