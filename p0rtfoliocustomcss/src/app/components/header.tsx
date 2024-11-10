import Link from "next/link";
import Style  from "./header.module.css";

export default function Header(){
    return(
        <nav className={Style.header}>
            <ul className={Style.nav_buttons}>

                <Link className={Style.li} href={"/"}><li>Home</li></Link>
                <Link className={Style.li} href={"/about"}><li>About</li></Link>
                <Link className={Style.li} href={"/my-work"}><li>My Work</li></Link>
                <Link className={Style.li} href={"/resume"}><li>Resume</li></Link>
            </ul>
        </nav>
    )
}