import Image from "next/image";
import Link from "next/link";
import profile_pic from "../../public/images/mspic.jpg"

export default function Home() {
  return (
    <div className="container">
      <div className="textPortion">
        <h1>Assalam o Alaekum!</h1>
        <h2>Here is <div data-text="S.R.Chohan">S.R.Chohan</div></h2>
        <h3>A <div data-text="Student,">Student,</div></h3>
        <h3><div data-text="Frontend.Developer">Frontend Developer</div></h3>
        <h3>Becoming a <div data-text="Fullstack.Developer">Fullstack Developer</div></h3>
        <p>I am a blessed person with God gifted abilities. I am a good learner and a best teacher and have really a creative mind</p>
        <Link href={"#"}><button></button></Link>
      </div>
      <div className="imageContainer">
        <Image src={profile_pic} alt="Profile Picture" className="image"/>
      </div>
    </div>
  );
}