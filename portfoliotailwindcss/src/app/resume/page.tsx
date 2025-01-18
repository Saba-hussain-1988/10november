import Image from "next/image"
import profile_pic from "../../../public/images/mspic.jpg"
import Link from "next/link";


export default function About() {
    return (
        <div   id="container" className="bg-[#e0d2dc] m-0 p-8 relative flex flex-col items-center">
            
            <h1 className="text-[#76ffe8] p-5 text-2xl font-semibold text-center">Thank You For Visiting My Resume!</h1>
            
            {/* <!-- <first row> --> */}
            <div className="row w-full flex justify-center flex-wrap">
                
                <div  id="personalInformation" className="flex items-start ml-5 pl-0 w-2/5 text-left h-fit">
                    {/* <!-- Personal Information--> */}

                    <h3 className="text-[#76ffe8] text-center pt-5 pb-5 font-bold sm:max-w-[200px]">Personal Information</h3>
                    <p className="flex justify-start items-center">Full Name: Saba Mustafa</p>
                    <p className="flex justify-start items-center">Status: Married</p>
                    <p className="flex justify-start items-center">Nationality: Pakistani</p>
                    <p className="flex justify-start items-center">Phone Number: 0300-1234567</p>
                    <p className="flex justify-start items-center">Email: <Link className="link no-underline text-green-700 hover:text-pink-500" href="mailto:sabamustafa27.88@gmail.com" target="_blank">sabamustafa27.88@gmail.com</Link></p>
                    <p className="flex justify-start items-center">Linkedin: <Link className="link no-underline text-green-700 hover:text-pink-500" href="https://www.linkedin.com/in/saba-mustafa-3aa41a322" target="_blank">linkedin.com/in/saba-mustafa-3aa41a322</Link></p>
                    <div id="goal" className="w-full h-fit text-left p-8 pt-8 text-wrap">
                    <h3 className="text-[#76ffe8] text-center pt-5 pb-5 font-bold sm:max-w-[200px]">Goals</h3>
                    <p className="flex justify-start items-center">"Along with fulfilling all my responsibilities, I want to utilize my remaining time and my intellect to make my contribution to the world."</p>
                </div>
                </div>

                <div  id="pic_box" className="w-1/2 h-1/3 mr-10 rounded-[0_80%_0_80%] border-3 border-black bg-[rgb(180,122,45)]">
                    <Image src={profile_pic} alt="Profile picture" id="pic"  className="w-full h-full rounded-[0_80%_0_80%] opacity-100"  />
                </div>
            </div>

            {/* row second */}
            <div className="row w-full flex justify-center flex-wrap">
               <div id="skill" className="w-2/5 text-[#76ffe8] p-20">
                    <h3 className="text-[#76ffe8] text-center pt-5 pb-5 font-bold sm:max-w-[200px]">Skills</h3>

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
                <div className="education w-1/2 h-fit text-left p-8 text-[#76ffe8]">

                    <h3 className="text-[#76ffe8] text-center pt-5 pb-5 font-bold sm:max-w-[200px]">Educational Qualification</h3>

                    <ul>
                        <li><b>Under Bachelor(Economics)</b><br />from Nazareth College(Sindh University) 2011</li>
                        <li><b>HSC Examination(Humanities)</b><br />from Board of Higher and Secondary Education Hyderabad 2006</li>
                        <li><b>SSC(Science)</b><br />Board of Secondary Education Hyderabad 2004</li>
                    </ul>
                    {/* <!--Work Experience--> */}
                <div id="experience" className="w-full h-fit pl-8 text-[#76ffe8]">
                    <h3 className="text-[#76ffe8] text-center pt-5 pb-5 font-bold sm:max-w-[200px]">Work Experience</h3>

                    <ul>
                        <li><b>Private Tutor:</b><br />Class I to VIII since 2005 to 2015</li>
                        <li><b>Particularly in Mathematics:</b><br />class I to X since 2005 to 2017</li>
                        <li><b>Tailor Master:</b><br/>since 2005 to Date</li>
                        <li><b>Henna Art:</b><br />since 2002 to Date</li>
                    </ul>
                </div>

                </div>

            </div>


            <div className="row w-full flex justify-center flex-wrap">

                <div >
                    <h3 className="text-[#76ffe8] text-center pt-5 pb-5 font-bold sm:max-w-[200px]">Awards</h3>
                    <p className="flex justify-start items-center">"Cooking Competition Program "<b>Haleeb Kay Gadhray Rishtay</b>" Organized in <b>Pakistan Television Karachi center</b> held on <b>2005</b>.</p>
                </div>

                {/* <!--course certification--> */}
                <div id="course" className="text-[#76ffe8]">
                    <h3 className="text-[#76ffe8] text-center pt-5 pb-5 font-bold sm:max-w-[200px]">Course Certification</h3>
                    <ul>
                        <li><b>Artificial Intelligence, Web 3.0 & Metaverse:</b> (ongoing from Governor Initiative Artificial Intelligence Course)</li>
                        <li><b>Tailor and Designer course:</b> Diploma from Al-Haya sewing center Latifabad Hyderabad </li>
                    </ul>
                </div>

            </div>
       
    </div>
    )
}