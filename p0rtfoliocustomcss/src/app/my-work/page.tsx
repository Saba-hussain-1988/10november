import Image from "next/image";
import Link from "next/link";
import styles from "./work.module.css";
import resumeBuilder from "../../../public/images/resume-builder.jpg";
import webView from "../../../public/images/web-view.jpg";
import blogSite from "../../../public/images/blog-web.jpg"
const blogs = [
    {
      id: 1,
      imageSrc: resumeBuilder, // Update paths accordingly
      title: 'Editable Resume Builder',
      description: 'It is my resume builder milestone. It is editable.',
      buttonText: 'Read More',
      link: 'https://hackathons-lyuq.vercel.app/'
    },
    {
      id: 2,
      imageSrc: webView,
      title: "Static Website core HTML",
      description: 'It is a static website by using core HTML CSS n java script.',
      buttonText: 'Read More',
      link: 'https://example-t99d-ii45yxe2z-saba-hussain-1988s-projects.vercel.app'
    },
    {
      id: 3,
      imageSrc: blogSite,
      title: 'Blog Website with Next.js',
      description: 'In this website i have used routs components by next js',
      buttonText: 'Read More',
      link: '/blog/4'
    },
    
  ];
  
  const Blogs = () => {
    return (
      <div className={styles.blogs_container}>
        {blogs.map((blog) => (
          <div key={blog.id} className={styles.blog_card}>
            <Image src={blog.imageSrc} alt={blog.title} width={300} height={200} />
            <h3 className={styles.h3}>{blog.title}</h3>
            <p className={styles.p}>{blog.description}</p>
            <Link href={blog.link}>
            <button className={styles.blog_button}>{blog.buttonText}</button>
          </Link>
          </div>
        ))}
      </div>
    );
  };
  
  export default Blogs;