"use client"
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import logo from "../../public/Screenshot 2025-01-19 030521.jpg"

export default function Header() {
    return (
      <header className="shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] lg:flex items-center justify-between sticky top-0 py-3 px-4 bg-slate-100 z-50 min-h-[70px]">
    <div className="flex  items-center gap-4">
         <a href="">
          <Image src={logo} alt="logo" className="sm:w-36 sm:h-16 w-28 h-12" />
         </a>
     </div>
     <div>
        <ul
          className=' flex flex-wrap justify-between items-center lg:ml-12 lg:flex gap-x-6   z-50'>
          <li className='max-lg:border-b max-lg:py-3 px-3'>
            <a href='/'
              className='hover:text-blue-600 block font-semibold transition-all'>Home</a>
          </li>
          <li className='max-lg:border-b max-lg:py-3 px-3'><a href='/features'
              className='hover:text-blue-600 block font-semibold transition-all'>Feature</a>
          </li>
          <li className='max-lg:border-b max-lg:py-3 px-3'><a href='/about'
              className='hover:text-blue-600 block font-semibold transition-all'>About</a>
          </li>
          <li className='max-lg:border-b max-lg:py-3 px-3'><a href='contact-us'
              className='hover:text-blue-600 block font-semibold transition-all text-nowrap'>Contact</a>
          </li>
          <li className='max-lg:border-b max-lg:py-3 px-3'><a href='/faqs'
              className='hover:text-blue-600 block font-semibold transition-all'>FAQs</a>
          </li>
        </ul>
        
      </div>

  </header>
  )
} 
// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import logo from "../../public/Screenshot 2025-01-19 030521.jpg";

// export default function Header() {
//   // State to control the visibility of the menu
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Function to toggle menu visibility
//   const handleMenuToggle = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   return (
//     <header className="shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] sticky top-0 py-3 px-4 sm:px-10 bg-slate-100 z-50 min-h-[70px]">
//       <div className="flex flex-wrap items-center gap-4">
//         <a href="javascript:void(0)">
//           <Image src={logo} alt="logo" className="w-36 h-16" />
//         </a>

//         {/* Hamburger Button */}
//         <button
//           onClick={handleMenuToggle}
//           className="lg:hidden"
//           aria-label="Toggle Menu"
//         >
//           <svg
//             className="w-7 h-7"
//             fill="#000"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//               clipRule="evenodd"
//             ></path>
//           </svg>
//         </button>
//       </div>

//       {/* Collapsible Menu */}
//       <div
//         className={`${
//           isMenuOpen ? "block" : "hidden"
//         } lg:block max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
//       >
//         <ul className="lg:ml-12 lg:flex gap-x-6 max-lg:space-y-3">
//           <li className="mb-6 hidden max-lg:block">
//             <a href="javascript:void(0)">
//               <img
//                 src="https://readymadeui.com/readymadeui.svg"
//                 alt="logo"
//                 className="w-36"
//               />
//             </a>
//           </li>
//           <li className="max-lg:border-b max-lg:py-3 px-3">
//             <a
//               href="/"
//               className="hover:text-blue-600 block font-semibold transition-all"
//             >
//               Home
//             </a>
//           </li>
//           <li className="max-lg:border-b max-lg:py-3 px-3">
//             <a
//               href="/features"
//               className="hover:text-blue-600 block font-semibold transition-all"
//             >
//               Feature
//             </a>
//           </li>
//           <li className="max-lg:border-b max-lg:py-3 px-3">
//             <a
//               href="/about"
//               className="hover:text-blue-600 block font-semibold transition-all"
//             >
//               About
//             </a>
//           </li>
//           <li className="max-lg:border-b max-lg:py-3 px-3">
//             <a
//               href="/contact-us"
//               className="hover:text-blue-600 block font-semibold transition-all text-nowrap"
//             >
//               Contact Us
//             </a>
//           </li>
//           <li className="max-lg:border-b max-lg:py-3 px-3">
//             <a
//               href="/faqs"
//               className="hover:text-blue-600 block font-semibold transition-all"
//             >
//               FAQs
//             </a>
//           </li>
//         </ul>
//         <button
//           onClick={handleMenuToggle}
//           className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
//           aria-label="Close Menu"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-3.5 h-3.5 fill-black"
//             viewBox="0 0 320.591 320.591"
//           >
//             <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
//             <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// }
