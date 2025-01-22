"use client"

import google from "../../public/google.png"
import facebook from "../../public/facebook.png"
import linkedin from "../../public/download.png"
import pinterest from "../../public/images.png"
import Image from "next/image"
import team from "../../public/Screenshot 2025-01-19 075918.jpg"
import work from "../../public/Screenshot 2025-01-19 080024.jpg"
import work2 from "../../public/Screenshot 2025-01-19 080105.jpg"

export default function Home() {
  return (
   <div className="max-w-[1920px] mx-auto lg:pt-4">
     <div className="bg-white text-black text-[15px]">
     
       <div className="px-4 sm:px-10">
         <div className="min-h-[500px]">
           <div className="grid md:grid-cols-2 justify-center items-center gap-10">
             <div className="max-md:order-1">
               <p className="mt-4 mb-2 font-semibold text-blue-600"><span className="rotate-90 inline-block mr-2">|</span> ALL IN
                 ONE
                 MEETING SCHEDULER</p>
               <h1 className="md:text-5xl text-4xl font-bold mb-4 md:!leading-[55px]">Schedule meetings effortlessly</h1>
               <p className="mt-4 text-base leading-relaxed">Embark on a gastronomic journey with our curated dishes, delivered
                 promptly to your doorstep. Elevate your dining experience today. Delve into the details and let us enhance
                 every aspect of your dining adventure.</p>
               <div
                 className="bg-white mt-10 flex px-1 py-1.5 rounded-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] overflow-hidden">
              
                 <button type='button'
                   className="bg-blue-600 hover:bg-blue-700 transition-all text-white rounded-full px-5 py-2.5">Search</button>
               </div>
              
               <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                 <Image src={google} className="w-28 mx-auto" alt="google-logo" />
                 <Image src={facebook} className="w-28 mx-auto" alt="facebook-logo" />
                 <Image src={linkedin} className="w-28 mx-auto" alt="linkedin-logo" />
                 <Image src={pinterest} className="w-28 mx-auto" alt="pinterest-logo" />
               </div>
             </div>
             <div className="max-md:mt-12 h-full">
               <Image src={team} alt="banner img" className="w-full h-full object-cover" />
             </div>
           </div>
         </div>
   
        
   
         <div className="mt-28">
           <div className="md:text-center max-w-2xl mx-auto">
             <h2 className="md:text-4xl text-3xl font-bold mb-6">Explore Our Unique Offerings</h2>
             <p>Discover a range of exclusive features designed to elevate your experience. Learn how our distinct
               offerings can redefine your journey and empower you to accomplish more.</p>
           </div>
           <div className="mt-14">
             <div className="grid md:grid-cols-2 items-center gap-16">
               <div>
                 <Image alt="workAt" src={work}
                   className="w-full object-contain rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]" />
               </div>
               <div className="max-w-lg">
                 <h3 className="text-xl font-semibold mb-4">Tailored Customization</h3>
                 <p>Experience unparalleled customization options tailored to suit your unique needs. Our platform provides
                   a wide array of features, ensuring you have the flexibility to personalize your journey.</p>
                 <button type="button"
                   className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2.5 mt-8 transition-all">
                   Learn More
                 </button>
               </div>
               <div className="max-md:order-1 max-w-lg">
                 <h3 className="text-xl font-semibold mb-4">Optimized Performance</h3>
                 <p>Unlock top-notch performance with our advanced optimization techniques. We prioritize speed,
                   efficiency, and reliability to ensure a seamless experience, no matter the complexity of your tasks.</p>
                 <button type="button"
                   className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2.5 mt-8 transition-all">
                   Learn More
                 </button>
               </div>
               <div>
                 <Image alt="workAt" src={work2} className="w-full object-contain rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]" />
               </div>
             </div>
           </div>
         </div>
   
         <div className="mt-28">
           <h2 className="md:text-4xl text-3xl font-bold text-center mb-14">Application Metrics</h2>
           <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 max-lg:gap-12">
             <div className="text-center">
               <h3 className="text-4xl font-semibold">5.4<span className="text-blue-600">M+</span></h3>
               <p className="text-base font-semibold mt-4">Total Users</p>
               <p className="mt-2">The total number of registered users on the platform.</p>
             </div>
             <div className="text-center">
               <h3 className="text-4xl font-semibold">$80<span className="text-blue-600">K</span></h3>
               <p className="text-base font-semibold mt-4">Revenue</p>
               <p className="mt-2">The total revenue generated by the application.</p>
             </div>
             <div className="text-center">
               <h3 className="text-4xl font-semibold">100<span className="text-blue-600">K</span></h3>
               <p className="text-base font-semibold mt-4">Engagement</p>
               <p className="mt-2">The level of user engagement with the application's content and features.</p>
             </div>
             <div className="text-center">
               <h3 className="text-4xl font-semibold">99.9<span className="text-blue-600">%</span></h3>
               <p className="text-base font-semibold mt-4">Server Uptime</p>
               <p className="mt-2">The percentage of time the server has been operational and available.</p>
             </div>
           </div>
         </div>
   
       </div>
   
     </div>
   </div>
  );
}
