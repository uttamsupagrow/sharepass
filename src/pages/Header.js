import React from "react";

class Header extends React.Component
{
    render()
    {
        return(
            <div>
                <header className="fixed top-0 left-0 right-0 z-[100] text-black bg-lightGrey shadow-header  duration-200">
    <div className="container relative z-[95] flex !max-w-[none] items-center bg-[transparent] justify-between !px-5 py-4 transition-colors duration-200 xl:!px-12 xl:!py-5 ">
      <a className="cursor-pointer" href="index.html">
      
        <img src="_next/img/sharepass.png" width="40" height="10" style={{float:"left"}}/><span style={{marginLeft:"10px",fontSize:"30px",fontWeight:"bold"}}>SharePass</span>
      </a>
      <div className="ml-auto flex">
        <div className="mr-10 hidden items-center space-x-[34px] font-medium lg:flex">
          <div className="relative">
            <a
              className="t-15 transition-colors duration-200 hover:text-purple"
              href="/home"
              
            >
              Home
            </a>
          </div>
          <div className="relative">
            <a
              className="t-15 transition-colors duration-200 hover:text-purple"
              href="/about"
              
            >
              About
            </a>
          </div>
          <div className="relative">
            <a
              className="t-15 transition-colors duration-200 hover:text-purple"
              href="/blog"
            >
              Resources
            </a>
          </div>
          <div className="relative">
            <a
              className="t-15 transition-colors duration-200 hover:text-purple"
              href="/partner"
            >
              Partners
            </a>
          </div>
          <div className="relative">
            <a
              className="t-15 transition-colors duration-200 hover:text-purple"
              href="/teams"
              
            >
             Our Team
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <a
            href="/home#trysharepass"
            className="inline-block  w-full border-[2px] text-center transition-colors duration-200  border-transparent primary-button hover:border-purple bg-black text-white hover:bg-purple hover:text-white py-3 px-8  font-bold leading-none md:w-full md:max-w-[200px]  sm:w-auto undefined undefined"
          
          >
            Try SharePass
          </a>
        </div>
        <div className="lg:hidden">
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width={41} height={41} fill="#09182C" />
            <path
              d="M11 14H31"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="origin-center duration-300 false"
            />
            <path
              d="M11 21H31"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="origin-center duration-300 false"
            />
            <path
              d="M11 28H31"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="origin-center duration-300 false"
            />
            <rect x="0.5" y="0.5" width={41} height={41} stroke="#02F3A2" />
          </svg>
        </div>
      </div>
    </div>
  </header>
            </div>
        );
    }
}

export default Header;