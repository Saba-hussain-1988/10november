import Image from "next/image"
import profile_pic from "../../../public/images/mspic.jpg"
import styles from "./resume.module.css";
import Link from "next/link";


export default function About() {
    return (
        <div  className={styles.container} >
            
            <h1 className={styles.h1}>Thank You For Visiting My Resume!</h1>
            
            {/* <!-- <first row> --> */}
            <div className={styles.row}>
                
                <div id={styles.personalInformation}>
                    {/* <!-- Personal Information--> */}

                    <h3 className={styles.h3}>Personal Information</h3>
                    <p className={styles.p}>Full Name: Saba Mustafa</p>
                    <p className={styles.p}>Status: Married</p>
                    <p className={styles.p}>Nationality: Pakistani</p>
                    <p className={styles.p}>Phone Number: 0300-1234567</p>
                    <p className={styles.p}>Email: <Link className={styles.link} href="mailto:sabamustafa27.88@gmail.com" target="_blank">sabamustafa27.88@gmail.com</Link></p>
                    <p className={styles.p}>Linkedin: <Link className={styles.link} href="https://www.linkedin.com/in/saba-mustafa-3aa41a322" target="_blank">linkedin.com/in/saba-mustafa-3aa41a322</Link></p>
                    <div id={styles.goal}>
                    <h3 className={styles.h3}>Goals</h3>
                    <p>"Along with fulfilling all my responsibilities, I want to utilize my remaining time and my intellect to make my contribution to the world."</p>
                </div>
                </div>

                <div id={styles.pic_box}>
                    <Image src={profile_pic} alt="Profile picture" id={styles.pic} />
                </div>
            </div>

            {/* row second */}
            <div className={styles.row}>
               <div id={styles.skill}>
                    <h3 className={styles.h3}>Skills</h3>

                    <ul>
                        <li>Programming Languages
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Tailwind CSS</li>
                                <li>Java Script</li>
                                <li>Type Script</li>
                                <li>Object Oriented Programming</li>
                                <li>Next js</li>
                                <li>Git n Github</li>
                            </ul>
                        </li>
                        <li>Tailor Master
                            <ul>
                                <li>All type of Ladies clothing</li>
                                <li>Gents</li>
                                <li>Baba and Baby wearing</li>
                                <li>Hand bags</li>
                                <li>Born Baby sleeping Bags</li>
                            </ul>
                        </li>
                        <li>Henna Art</li>
                        <li>Wall Hanging Decoration Art</li>
                        <li>Craft Making</li>
                        <li>Urdu Arabic Calligraphy</li>
                        <li>Painting</li>
                    </ul>
                </div>

                {/* Educational Qualification */}
                <div className={styles.education}>

                    <h3 className={styles.h3}>Educational Qualification</h3>

                    <ul>
                        <li><b>Under Bachelor(Economics)</b><br />from Nazareth College(Sindh University) 2011</li>
                        <li><b>HSC Examination(Humanities)</b><br />from Board of Higher and Secondary Education Hyderabad 2006</li>
                        <li><b>SSC(Science)</b><br />Board of Secondary Education Hyderabad 2004</li>
                    </ul>
                    {/* <!--Work Experience--> */}
                <div id={styles.experience}>
                    <h3 className={styles.h3}>Work Experience</h3>

                    <ul>
                        <li><b>Private Tutor:</b><br />Class I to VIII since 2005 to 2015</li>
                        <li><b>Particularly in Mathematics:</b><br />class I to X since 2005 to 2017</li>
                        <li><b>Tailor Master:</b><br/>since 2005 to Date</li>
                        <li><b>Henna Art:</b><br />since 2002 to Date</li>
                    </ul>
                </div>

                </div>

            </div>


            {/* <!--Row third--> */}
            <div className={styles.row}>

               

                

            </div>

            <div className={styles.row}>

                <div id={styles.award}>
                    <h3 className={styles.h3}>Awards</h3>
                    <p>Cooking Competition Program "<b>Haleeb Kay Gadhray Rishtay</b>" Organized in <b>Pakistan Television Karachi center</b> held on <b>2005</b>.</p>
                </div>

                {/* <!--course certification--> */}
                <div id={styles.course}>
                    <h3 className={styles.h3}>Course Certification</h3>
                    <ul>
                        <li><b>Artificial Intelligence, Web 3.0 & Metaverse:</b> (ongoing from Governor Initiative Artificial Intelligence Course)</li>
                        <li><b>Tailor and Designer course:</b> Diploma from Al-Haya sewing center Latifabad Hyderabad </li>
                    </ul>
                </div>

            </div>
       
    </div>
    )
}