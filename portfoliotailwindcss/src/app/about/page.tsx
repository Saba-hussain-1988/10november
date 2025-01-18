import Image from "next/image";
import styles from "./about.module.css"
import pic from "../../../public/images/mspic.jpg"

export default function About(){
    return(
        <div className={styles.container}>
            <h1 className={styles.h1}>
                About Me
            </h1>
            <p className={styles.p}>
                My name is Saba, and I am married. I completed my Matriculation in Science from Government Rooh-e-Islam Girls High School, Hyderabad Board. I pursued my Intermediate studies in Humanities at Shah Latif Girls College, Latifabad, Hyderabad, and graduated with a B.A. from Nazareth College, Hyderabad.
            </p>
            <p className={styles.p}>
                I am blessed with natural talents and abilities, and mathematics is one of my passions. I have taught mathematics for several years as both a teacher and tutor, sharing my love for the subject with my students. In addition to teaching, I have over 17 years of experience in sewing, which I thoroughly enjoy. I also have a strong interest in book reading and am very enthusiastic about arts and crafts.
            </p>
            <div className={styles.div1}>
                <div className={styles.div2}>
                <Image src={pic} alt="My pic" className={styles.image1}/>
            </div>
            </div>
            
            
        </div>
    )
}