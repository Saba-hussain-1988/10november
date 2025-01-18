import Link from "next/link";
import Style from "./footer.module.css"

export default function Footer(){
    return(
        <div className={Style.footer}>
            <ul>
                <Link href={"https://www.linkedin.com/in/saba-mustafa-3aa41a322/"} target="_blank"><li>LinkedIn</li></Link>
                <Link href={"https://www.facebookzzzzz.com/profile.php?id=61566515126408"} target="_blank"><li>Facebook</li></Link>
                <Link href={"https://www.instagram.com/invites/contact/?igsh=qu25x6cdzigy&utm_content=vz7jxgp"} target="_blank"><li>Instagram</li></Link>
                <Link href={"https://github.com/Saba-hussain-1988"} target="_blank"><li>github</li></Link>
                <Link href={"mailto:sabamustafa27.88@gmail.com"}><li>email</li></Link>
            </ul>
            <p>This is my portfolio. It is my own creation. I can make a portfolio for you like it if you want.</p>
        </div>
    )
}