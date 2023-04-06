import React from "react";

class Blog_Demo extends React.Component
{
    render()
    {

        var loadScript = function(src) {
            var tag = document.createElement('script');
            tag.async = false;
            tag.src = src;
            document.getElementsByTagName('body')[0].appendChild(tag);
            }

            loadScript('_next/static/chunks/pages/blog_demo.js');


        return(

            <div>
                    <div id="__next">
  <div className="h-[33px]" />
  <main className="bg-lightGrey">
    <div className="container relative z-20 " style={{ marginTop: 50 }}>
      <div className="flex flex-col items-center gap-y-12 lg:flex-row lg:justify-between lg:gap-x-12 lg:pt-[137px] lg:pb-[248px]  ">
        <div className="relative z-10 mt-12 flex-shrink md:mt-0">
          <div
            className="text-center  lg:text-left mx-auto lg:mx-0 "
            style={{ maxWidth: 556 }}
          >
            <div className="" style={{ opacity: 1 }}>
              <h1 className="text-content-heading t-64-heading font-semibold text-black ">
             Sharepass Blog
              </h1>
            </div>
            <div
              className="mt-6 font-medium wsyiwyg !text-darkGrey t-20"
              style={{ opacity: 1 }}
            >
              <p>
              Lorem ipsum dolor sit amet, consectetur
               adipiscing elit, sed do
              </p>
            </div>
          </div>
        </div>
        <div
          className="media lg:mr-[-10%]  w-full flex-1 lg:absolute   lg:bottom-0 lg:w-full 
      lg:top-0 lg:left-[55%] lg:max-w-[732px] xl:left-[50%]
      "
        >
          <div style={{}}>
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                border: 0,
                margin: 0,
                padding: 0,
                position: "relative"
              }}
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: "73.4694% 0px 0px"
                }}
              />
              <img
                draggable="false"
                alt=""
                sizes="100vw"
                srcSet="_next/img/fee.png"
                decoding="async"
                data-nimg="responsive"
                className=""
                style={{
                  position: "absolute",
                  inset: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%"
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="container ">
      <div className="relative before:absolute after:absolute before:top-0 after:bottom-0 before:inset-x-0 after:inset-x-0 before:h-[1px] after:h-[1px] before:bg-darkGrey/20 after:bg-darkGrey/20 py-12 lg:py-20">
        <div className="mb-8 flex flex-col gap-y-8 xl:mb-20">
          <div className="mx-auto xl:ml-0 xl:max-w-[510px]">
            <div className="relative z-10 container">
              <div
                className="text-center  lg:text-left mx-auto lg:mx-0 "
                style={{ maxWidth: 480 }}
              >
                <div className="" style={{ opacity: 1 }}>
                  <h3 className="text-content-heading t-48 leading-[1.15] font-semibold text-black ">
                  Lorem ipsum 
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{ __html: "\n            \n            " }}
        />
        <div className="container">
          <ul className="mt-12 grid min-h-[1200px] grid-cols-1 gap-6 sm:min-h-[736px] sm:grid-cols-2 lg:mt-20 lg:min-h-[480px] lg:grid-cols-3">
            <a
              href="blog_details"
              id="box1"
              target="_blank"
              className="relative overflow-hidden bg-white outline outline-8 outline-transparent transition-all duration-200 ease-in hover:outline-green hover:delay-[1800ms] md:pb-[148px]"
            >
              <div
                className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                style={{ padding: 40 }}
              >
                <div
                  className="mb-4 flex items-center gap-4 lg:mb-8"
                  style={{ margin: "0px 0px 16px" }}
                >
                  <div className="t-12 inline-block bg-purple px-3 py-2 font-semibold uppercase text-white">
                    Announcements
                  </div>
                  <time className="t-15 font-semibold uppercase tracking-widest text-darkGrey">
                    7 March, 2023
                  </time>
                </div>
                <h3 className="t-24 font-semibold !leading-[1.15] text-black duration-300 ">
                Welcome to SharePass
                </h3>
              </div>
              <div
                id="box3"
                className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                style={{}}
              >
                <div className="flex h-full flex-col justify-between">
                  <div
                    className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                    style={{ padding: 0 }}
                  >
                    <div
                      className="mb-4 flex items-center gap-4 lg:mb-8"
                      style={{ margin: "0px 0px 16px" }}
                    >
                      <div className="t-12 inline-block bg-green px-3 py-2 font-semibold uppercase text-black">
                        Announcements
                      </div>
                      <time className="t-15 font-semibold uppercase tracking-widest text-white">
                        7 March, 2023
                      </time>
                    </div>
                    <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300 ">
                    Welcome to SharePass
                    </h3>
                  </div>
                  <div className="flex items-center font-semibold">
                    Learn more{" "}
                    <div className="ml-4">
                      <svg
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={30} height={30} fill="#02F3A2" />
                        <path
                          d="M14.8125 8.1875C15 8.02083 15.1771 8.02083 15.3438 8.1875L21.875 14.75C22.0625 14.9167 22.0625 15.0833 21.875 15.25L15.3438 21.8125C15.1771 21.9792 15 21.9792 14.8125 21.8125L14.1875 21.1875C14.125 21.125 14.0938 21.0417 14.0938 20.9375C14.0938 20.8333 14.125 20.7396 14.1875 20.6562L19.0312 15.8125H8.375C8.125 15.8125 8 15.6875 8 15.4375V14.5625C8 14.3125 8.125 14.1875 8.375 14.1875H19.0312L14.1875 9.34375C14.0208 9.15625 14.0208 8.97917 14.1875 8.8125L14.8125 8.1875Z"
                          fill="#09182C"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              id="box4"
              href=""
              target="_blank"
              className="relative overflow-hidden bg-white outline outline-8 outline-transparent transition-all duration-600 ease-in hover:outline-green hover:delay-[1800ms] md:pb-[148px]"
            >
              <div
                className=" w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                style={{ padding: 40 }}
              >
                <div
                  className="mb-4 flex items-center gap-4 lg:mb-8"
                  style={{ margin: "0px 0px 16px" }}
                >
                  <div className="t-12 inline-block bg-purple px-3 py-2 font-semibold uppercase text-white">
                    Announcements
                  </div>
                  <time className="t-15 font-semibold uppercase tracking-widest text-darkGrey">
                    7 March, 2023
                  </time>
                </div>
                <h3 className="t-24 font-semibold !leading-[1.15] text-black duration-300 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                </h3>
              </div>
              <div
                id="box5"
                className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                style={{}}
              >
                <div className="flex h-full flex-col justify-between">
                  <div
                    className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                    style={{ padding: 0 }}
                  >
                    <div
                      className="mb-4 flex items-center gap-4 lg:mb-8"
                      style={{ margin: "0px 0px 16px" }}
                    >
                      <div className="t-12 inline-block bg-green px-3 py-2 font-semibold uppercase text-black">
                        Announcements
                      </div>
                      <time className="t-15 font-semibold uppercase tracking-widest text-white">
                        7 March, 2023
                      </time>
                    </div>
                    <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    </h3>
                  </div>
                  <div className="flex items-center font-semibold">
                    Learn more{" "}
                    <div className="ml-4">
                      <svg
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={30} height={30} fill="#02F3A2" />
                        <path
                          d="M14.8125 8.1875C15 8.02083 15.1771 8.02083 15.3438 8.1875L21.875 14.75C22.0625 14.9167 22.0625 15.0833 21.875 15.25L15.3438 21.8125C15.1771 21.9792 15 21.9792 14.8125 21.8125L14.1875 21.1875C14.125 21.125 14.0938 21.0417 14.0938 20.9375C14.0938 20.8333 14.125 20.7396 14.1875 20.6562L19.0312 15.8125H8.375C8.125 15.8125 8 15.6875 8 15.4375V14.5625C8 14.3125 8.125 14.1875 8.375 14.1875H19.0312L14.1875 9.34375C14.0208 9.15625 14.0208 8.97917 14.1875 8.8125L14.8125 8.1875Z"
                          fill="#09182C"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href=""
              id="box6"
              target=""
              className="relative overflow-hidden bg-white outline outline-8 outline-transparent transition-all duration-200 ease-in hover:outline-green hover:delay-[1800ms] md:pb-[148px]"
            >
              <div
                className=" w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                style={{ padding: 40 }}
              >
                <div
                  className="mb-4 flex items-center gap-4 lg:mb-8"
                  style={{ margin: "0px 0px 16px" }}
                >
                  <div className="t-12 inline-block bg-purple px-3 py-2 font-semibold uppercase text-white">
                    Announcements
                  </div>
                  <time className="t-15 font-semibold uppercase tracking-widest text-darkGrey">
                    7 March, 2023
                  </time>
                </div>
                <h3 className="t-24 font-semibold !leading-[1.15] text-black duration-300 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                </h3>
              </div>
              <div
                id="box7"
                className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                style={{}}
              >
                <div className="flex h-full flex-col justify-between">
                  <div
                    className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                    style={{ padding: 0 }}
                  >
                    <div
                      className="mb-4 flex items-center gap-4 lg:mb-8"
                      style={{ margin: "0px 0px 16px" }}
                    >
                      <div className="t-12 inline-block bg-green px-3 py-2 font-semibold uppercase text-black">
                        Announcements
                      </div>
                      <time className="t-15 font-semibold uppercase tracking-widest text-white">
                        7 March, 2023
                      </time>
                    </div>
                    <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    </h3>
                  </div>
                  <div className="flex items-center font-semibold">
                    Learn more{" "}
                    <div className="ml-4">
                      <svg
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={30} height={30} fill="#02F3A2" />
                        <path
                          d="M14.8125 8.1875C15 8.02083 15.1771 8.02083 15.3438 8.1875L21.875 14.75C22.0625 14.9167 22.0625 15.0833 21.875 15.25L15.3438 21.8125C15.1771 21.9792 15 21.9792 14.8125 21.8125L14.1875 21.1875C14.125 21.125 14.0938 21.0417 14.0938 20.9375C14.0938 20.8333 14.125 20.7396 14.1875 20.6562L19.0312 15.8125H8.375C8.125 15.8125 8 15.6875 8 15.4375V14.5625C8 14.3125 8.125 14.1875 8.375 14.1875H19.0312L14.1875 9.34375C14.0208 9.15625 14.0208 8.97917 14.1875 8.8125L14.8125 8.1875Z"
                          fill="#09182C"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </ul>
        </div>
      </div>
    </div>
    <section
      data-layouts="all_articles"
      data-background="none"
      className="   relative  py-12  md:py-24   !pt-0 !overflow-visible"
    >
      <div className="section-background pointer-events-none absolute inset-0 ">
        <div style={{ opacity: 1 }} />
      </div>
      <div className="relative space-y-8 xl:space-y-10 ">
        <div className="container">
          <div className="relative flex flex-col gap-x-6 lg:flex-row">
            <div className="flex-1">
              <div className="sticky top-[110px] self-start">
                <select className="select-icon mb-4 w-full p-4 lg:hidden">
                  <option value="#blog">Blog</option>
                  <option value="#event">Events</option>
                  <option value="#media">Media</option>
                </select>
                <div className="hidden flex-col gap-[6px] bg-white p-5 lg:flex">
                  <a
                    href="#blog"
                    className="relative block p-4 duration-300  hover:text-white  text-black "
                  >
                    <div className="pl-5 font-semibold">
                      <div className="absolute " />
                      Blog
                    </div>
                  </a>
                  <a
                    href="#event"
                    className="relative block p-4 duration-300 hover:bg-purple hover:text-white "
                  >
                    <div className="pl-5 font-semibold ">Events</div>
                  </a>
                  <a
                    href="#media"
                    className="relative block p-4 duration-300 hover:bg-purple hover:text-white "
                  >
                    <div className="pl-5 font-semibold">Media</div>
                  </a>
                </div>
              </div>
            </div>
            <style dangerouslySetInnerHTML={{ __html: "\n   \n\n\n" }} />
            <div className="lg:min-w-[65%] lg:max-w-[65%] xl:min-w-[890px] xl:max-w-[890px]">
              <div className="pb-12 md:pb-24 relative after:absolute after:inset-x-0 after:bottom-0 after:bg-darkGrey/20 after:h-[1px]">
                <div id="blog" className="text-area">
                  <div className="mb-8 lg:mb-20">
                    <div className="relative flex items-center overflow-hidden bg-black py-12 px-8 md:min-h-[200px] lg:px-16">
                      <div className="absolute top-0 right-0  !max-w-[120px] md:!max-w-[150px]">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%"
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%"
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20
                xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27408%27%20height=%27413%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0
                              }}
                            />
                          </span>
                          <img
                            src="/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Farticle-bg-dots.4dcf28eb.png&w=828&q=75"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%"
                            }}
                            srcSet="/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Farticle-bg-dots.4dcf28eb.png&w=640&q=75 1x, /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Farticle-bg-dots.4dcf28eb.png&w=828&q=75 2x"
                          />
                          <noscript />
                        </span>
                      </div>
                      <h2 className="t-48 relative z-10 font-semibold text-white">
                        Blog Articles
                      </h2>
                    </div>
                  </div>
                  <div
                    
                    className="grid grid-cols-1 gap-x-8 gap-y-9 xl:min-h-[991px] xl:grid-cols-2"
                  >
                    <a
                     href="/blog_details"
                      id="b1"
                      target=""
                      className="relative overflow-hidden bg-white outline outline-8 outline-transparent transition-all duration-200 ease-in hover:outline-green hover:delay-[1800ms] md:pb-[148px]"
                    >
                      <div
                        className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                        style={{ padding: 40 }}
                      >
                        <div
                          className="mb-4 flex items-center gap-4 lg:mb-8"
                          style={{ margin: "0px 0px 16px" }}
                        >
                          <div className="t-12 inline-block bg-purple px-3 py-2 font-semibold uppercase text-white">
                            Announcements
                          </div>
                          <time className="t-15 font-semibold uppercase tracking-widest text-darkGrey">
                            7 March, 2023
                          </time>
                        </div>
                        <h3 className="t-24 font-semibold !leading-[1.15] text-black duration-300 ">
                       Welcome to SharePass
                        </h3>
                      </div>
                      <div
                        id="b3"
                        className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                        style={{}}
                      >
                        <div className="flex h-full flex-col justify-between">
                          <div
                            className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                            style={{ padding: 0 }}
                          >
                            <div
                              className="mb-4 flex items-center gap-4 lg:mb-8"
                              style={{ margin: "0px 0px 16px" }}
                            >
                              <div className="t-12 inline-block bg-green px-3 py-2 font-semibold uppercase text-black">
                                Announcements
                              </div>
                              <time className="t-15 font-semibold uppercase tracking-widest text-white">
                                7 March, 2023
                              </time>
                            </div>
                            <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300 ">
                            Welcome to SharePass
                            </h3>
                          </div>
                          <div className="flex items-center font-semibold">
                            Learn more{" "}
                            <div className="ml-4">
                              <svg
                                width={30}
                                height={30}
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect width={30} height={30} fill="#02F3A2" />
                                <path
                                  d="M14.8125 8.1875C15 8.02083 15.1771 8.02083 15.3438 8.1875L21.875 14.75C22.0625 14.9167 22.0625 15.0833 21.875 15.25L15.3438 21.8125C15.1771 21.9792 15 21.9792 14.8125 21.8125L14.1875 21.1875C14.125 21.125 14.0938 21.0417 14.0938 20.9375C14.0938 20.8333 14.125 20.7396 14.1875 20.6562L19.0312 15.8125H8.375C8.125 15.8125 8 15.6875 8 15.4375V14.5625C8 14.3125 8.125 14.1875 8.375 14.1875H19.0312L14.1875 9.34375C14.0208 9.15625 14.0208 8.97917 14.1875 8.8125L14.8125 8.1875Z"
                                  fill="#09182C"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                    href="/blog_details"
                      id="b4"
                      target="_blank"
                      className="relative overflow-hidden bg-white outline outline-8 outline-transparent transition-all duration-200 ease-in hover:outline-green hover:delay-[1800ms] md:pb-[148px]"
                    >
                      <div
                        className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                        style={{ padding: 40 }}
                      >
                        <div
                          className="mb-4 flex items-center gap-4 lg:mb-8"
                          style={{ margin: "0px 0px 16px" }}
                        >
                          <div className="t-12 inline-block bg-purple px-3 py-2 font-semibold uppercase text-white">
                            Announcements
                          </div>
                          <time className="t-15 font-semibold uppercase tracking-widest text-darkGrey">
                            7 March, 2023
                          </time>
                        </div>
                        <h3 className="t-24 font-semibold !leading-[1.15] text-black duration-300 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        </h3>
                      </div>
                      <div
                        id="b5"
                        className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                        style={{}}
                      >
                        <div className="flex h-full flex-col justify-between">
                          <div
                            className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                            style={{ padding: 0 }}
                          >
                            <div
                              className="mb-4 flex items-center gap-4 lg:mb-8"
                              style={{ margin: "0px 0px 16px" }}
                            >
                              <div className="t-12 inline-block bg-green px-3 py-2 font-semibold uppercase text-black">
                                Announcements
                              </div>
                              <time className="t-15 font-semibold uppercase tracking-widest text-white">
                                7 March, 2023
                              </time>
                            </div>
                            <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            </h3>
                          </div>
                          <div className="flex items-center font-semibold">
                            Learn more{" "}
                            <div className="ml-4">
                              <svg
                                width={30}
                                height={30}
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect width={30} height={30} fill="#02F3A2" />
                                <path
                                  d="M14.8125 8.1875C15 8.02083 15.1771 8.02083 15.3438 8.1875L21.875 14.75C22.0625 14.9167 22.0625 15.0833 21.875 15.25L15.3438 21.8125C15.1771 21.9792 15 21.9792 14.8125 21.8125L14.1875 21.1875C14.125 21.125 14.0938 21.0417 14.0938 20.9375C14.0938 20.8333 14.125 20.7396 14.1875 20.6562L19.0312 15.8125H8.375C8.125 15.8125 8 15.6875 8 15.4375V14.5625C8 14.3125 8.125 14.1875 8.375 14.1875H19.0312L14.1875 9.34375C14.0208 9.15625 14.0208 8.97917 14.1875 8.8125L14.8125 8.1875Z"
                                  fill="#09182C"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/blog_details"
                      id="b6"
                      target="_blank"
                      className="relative overflow-hidden bg-white outline outline-8 outline-transparent transition-all duration-200 ease-in hover:outline-green hover:delay-[1800ms] md:pb-[148px]"
                    >
                      <div
                        className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                        style={{ padding: 40 }}
                      >
                        <div
                          className="mb-4 flex items-center gap-4 lg:mb-8"
                          style={{ margin: "0px 0px 16px" }}
                        >
                          <div className="t-12 inline-block bg-purple px-3 py-2 font-semibold uppercase text-white">
                            Announcements
                          </div>
                          <time className="t-15 font-semibold uppercase tracking-widest text-darkGrey">
                            7 March, 2023
                          </time>
                        </div>
                        <h3 className="t-24 font-semibold !leading-[1.15] text-black duration-300 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        </h3>
                      </div>
                      <div
                        id="b7"
                        className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                        style={{}}
                      >
                        <div className="flex h-full flex-col justify-between">
                          <div
                            className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                            style={{ padding: 0 }}
                          >
                            <div
                              className="mb-4 flex items-center gap-4 lg:mb-8"
                              style={{ margin: "0px 0px 16px" }}
                            >
                              <div className="t-12 inline-block bg-green px-3 py-2 font-semibold uppercase text-black">
                                Announcements
                              </div>
                              <time className="t-15 font-semibold uppercase tracking-widest text-white">
                                7 March, 2023
                              </time>
                            </div>
                            <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            </h3>
                          </div>
                          <div className="flex items-center font-semibold">
                            Learn more{" "}
                            <div className="ml-4">
                              <svg
                                width={30}
                                height={30}
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect width={30} height={30} fill="#02F3A2" />
                                <path
                                  d="M14.8125 8.1875C15 8.02083 15.1771 8.02083 15.3438 8.1875L21.875 14.75C22.0625 14.9167 22.0625 15.0833 21.875 15.25L15.3438 21.8125C15.1771 21.9792 15 21.9792 14.8125 21.8125L14.1875 21.1875C14.125 21.125 14.0938 21.0417 14.0938 20.9375C14.0938 20.8333 14.125 20.7396 14.1875 20.6562L19.0312 15.8125H8.375C8.125 15.8125 8 15.6875 8 15.4375V14.5625C8 14.3125 8.125 14.1875 8.375 14.1875H19.0312L14.1875 9.34375C14.0208 9.15625 14.0208 8.97917 14.1875 8.8125L14.8125 8.1875Z"
                                  fill="#09182C"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/blog_details"
                      id="b8"
                      target="_blank"
                      className="relative overflow-hidden bg-white outline outline-8 outline-transparent transition-all duration-200 ease-in hover:outline-green hover:delay-[1800ms] md:pb-[148px]"
                    >
                      <div
                        className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                        style={{ padding: 40 }}
                      >
                        <div
                          className="mb-4 flex items-center gap-4 lg:mb-8"
                          style={{ margin: "0px 0px 16px" }}
                        >
                          <div className="t-12 inline-block bg-purple px-3 py-2 font-semibold uppercase text-white">
                            Announcements
                          </div>
                          <time className="t-15 font-semibold uppercase tracking-widest text-darkGrey">
                            7 March, 2023
                          </time>
                        </div>
                        <h3 className="t-24 font-semibold !leading-[1.15] text-black duration-300 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        </h3>
                      </div>
                      <div
                        id="b9"
                        className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                        style={{}}
                      >
                        <div className="flex h-full flex-col justify-between">
                          <div
                            className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                            style={{ padding: 0 }}
                          >
                            <div
                              className="mb-4 flex items-center gap-4 lg:mb-8"
                              style={{ margin: "0px 0px 16px" }}
                            >
                              <div className="t-12 inline-block bg-green px-3 py-2 font-semibold uppercase text-black">
                                Announcements
                              </div>
                              <time className="t-15 font-semibold uppercase tracking-widest text-white">
                                7 March, 2023
                              </time>
                            </div>
                            <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            </h3>
                          </div>
                          <div className="flex items-center font-semibold">
                            Learn more{" "}
                            <div className="ml-4">
                              <svg
                                width={30}
                                height={30}
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect width={30} height={30} fill="#02F3A2" />
                                <path
                                  d="M14.8125 8.1875C15 8.02083 15.1771 8.02083 15.3438 8.1875L21.875 14.75C22.0625 14.9167 22.0625 15.0833 21.875 15.25L15.3438 21.8125C15.1771 21.9792 15 21.9792 14.8125 21.8125L14.1875 21.1875C14.125 21.125 14.0938 21.0417 14.0938 20.9375C14.0938 20.8333 14.125 20.7396 14.1875 20.6562L19.0312 15.8125H8.375C8.125 15.8125 8 15.6875 8 15.4375V14.5625C8 14.3125 8.125 14.1875 8.375 14.1875H19.0312L14.1875 9.34375C14.0208 9.15625 14.0208 8.97917 14.1875 8.8125L14.8125 8.1875Z"
                                  fill="#09182C"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="flex justify-center">
                    <a
                      className="mt-8 inline-block border-2 border-purple py-4 px-4 text-center font-semibold text-purple duration-200 hover:bg-purple hover:text-white lg:mt-16 lg:min-w-[225px]"
                      href="/blog_details"
                    >
                      Load more
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-12 md:py-24 relative after:absolute after:inset-x-0 after:bottom-0 after:bg-darkGrey/20 after:h-[1px]">
                <div id="event" className="text-area">
                  <div className="mb-8 lg:mb-20">
                    <div className="relative flex items-center overflow-hidden bg-black py-12 px-8 md:min-h-[200px] lg:px-16">
                      <div className="absolute top-0 right-0  !max-w-[120px] md:!max-w-[230px]">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%"
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%"
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20
                    xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27768%27%20height=%27488%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0
                              }}
                            />
                          </span>
                          <img
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%"
                            }}
                          />
                          <noscript />
                        </span>
                      </div>
                      <h2 className="t-48 relative z-10 font-semibold text-white">
                        Upcoming Events
                      </h2>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 ">
  <div>
    <a
      className="group block p-4 duration-200 bg-white hover:bg-black hover:text-white hover:outline hover:outline-4 hover:outline-green lg:p-12 text-area"
      href=""
    >
      <div className="t-13 mb-6 inline-block bg-purple px-3 py-2 uppercase text-white group-hover:bg-green group-hover:text-black">
        30 March, 2023
      </div>
      <h3 className="t-28 font-semibold text-black group-hover:text-white">
      Lorem ipsum dolor sit amet, consectetur adipiscing 
      </h3>
    </a>
  </div>
</div>

                  <div className="flex justify-center" />
                </div>
              </div>
              <div className="py-12 md:py-24 relative after:absolute after:inset-x-0 after:bottom-0 after:bg-darkGrey/20 after:h-[1px]">
                <div id="media" className="text-area">
                  <div className="mb-8 lg:mb-20">
                    <div className="relative flex items-center overflow-hidden bg-black py-12 px-8 md:min-h-[200px] lg:px-16">
                      <div className="absolute top-0 right-0  !max-w-[120px] md:!max-w-[230px]">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%"
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%"
                            }}
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20
                        xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271008%27%20height=%27674%27/%3e"
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0
                              }}
                            />
                          </span>
                          <img
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%"
                            }}
                          />
                          <noscript />
                        </span>
                      </div>
                      <h2 className="t-48 relative z-10 font-semibold text-white">
                        Media Center
                      </h2>
                    </div>
                  </div>
                  <div>
                    <div
                      className="grid grid-cols-1 gap-x-8 gap-y-9 xl:grid-cols-2"
                      
                    >
                      <a
                        id="m1"
                        href="https://www.untoldstories.com/programmable-bitcoin-and-a-turing-complete-digital-economy-with-justin-banon-of-boson-protocol/"
                        target="_blank"
                        rel="noreferrer"
                        className="relative block overflow-hidden bg-white outline outline-4 duration-300 outline-transparent"
                      >
                        <div className="flex h-full flex-col justify-between gap-y-4">
                          <div className="p-4 lg:p-8 xl:p-10">
                            <div className="mb-4 flex items-center gap-4 lg:mb-8">
                              <div className="t-12 inline-block bg-purple px-3 py-2 font-semibold uppercase text-white">
                                Media
                              </div>
                              <time className="t-15 font-semibold uppercase tracking-widest text-darkGrey">
                                14 March, 2023
                              </time>
                            </div>
                            <h3 className="t-24 font-semibold !leading-[1.15] text-black duration-300 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            </h3>
                          </div>
                          <div className="relative aspect-[429/233]">
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                overflow: "hidden",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                position: "absolute",
                                inset: 0
                              }}
                            >
                              <img
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  inset: 0,
                                  boxSizing: "border-box",
                                  padding: 0,
                                  border: "none",
                                  margin: "auto",
                                  display: "block",
                                  width: 0,
                                  height: 0,
                                  minWidth: "100%",
                                  maxWidth: "100%",
                                  minHeight: "100%",
                                  maxHeight: "100%"
                                }}
                              />
                              <noscript />
                            </span>
                          </div>
                        </div>
                        <div
                          id="m3"
                          className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                          style={{}}
                        >
                          <div className="flex h-full flex-col justify-between">
                            <div
                              className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                              style={{ padding: 0 }}
                            >
                              <div
                                className="mb-4 flex items-center gap-4 lg:mb-8"
                                style={{ margin: "0px 0px 16px" }}
                              >
                                <div className="t-12 inline-block bg-green px-3 py-2 font-semibold uppercase text-black">
                                  Media
                                </div>
                                <time className="t-15 font-semibold uppercase tracking-widest text-white">
                                  7 March, 2023
                                </time>
                              </div>
                              <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300 ">
                              Lorem ipsum dolor sit amet, consectetur adipiscing 
                              </h3>
                            </div>
                            <div className="flex items-center font-semibold">
                              Learn more{" "}
                              <div className="ml-4">
                                <svg
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect width={30} height={30} fill="#02F3A2" />
                                  <path
                                    d="M14.8125 8.1875C15 8.02083 15.1771 8.02083 15.3438 8.1875L21.875 14.75C22.0625 14.9167 22.0625 15.0833 21.875 15.25L15.3438 21.8125C15.1771 21.9792 15 21.9792 14.8125 21.8125L14.1875 21.1875C14.125 21.125 14.0938 21.0417 14.0938 20.9375C14.0938 20.8333 14.125 20.7396 14.1875 20.6562L19.0312 15.8125H8.375C8.125 15.8125 8 15.6875 8 15.4375V14.5625C8 14.3125 8.125 14.1875 8.375 14.1875H19.0312L14.1875 9.34375C14.0208 9.15625 14.0208 8.97917 14.1875 8.8125L14.8125 8.1875Z"
                                    fill="#09182C"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        id="m4"
                        href="https://www.untoldstories.com/programmable-bitcoin-and-a-turing-complete-digital-economy-with-justin-banon-of-boson-protocol/"
                        target="_blank"
                        rel="noreferrer"
                        className="relative block overflow-hidden bg-white outline outline-4 duration-300 outline-transparent"
                      >
                        <div className="flex h-full flex-col justify-between gap-y-4">
                          <div className="p-4 lg:p-8 xl:p-10">
                            <div className="mb-4 flex items-center gap-4 lg:mb-8">
                              <div className="t-12 inline-block bg-purple px-3 py-2 font-semibold uppercase text-white">
                                Media
                              </div>
                              <time className="t-15 font-semibold uppercase tracking-widest text-darkGrey">
                                14 March, 2023
                              </time>
                            </div>
                            <h3 className="t-24 font-semibold !leading-[1.15] text-black duration-300 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            </h3>
                          </div>
                          <div className="relative aspect-[429/233]">
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                overflow: "hidden",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                position: "absolute",
                                inset: 0
                              }}
                            >
                              <img
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  inset: 0,
                                  boxSizing: "border-box",
                                  padding: 0,
                                  border: "none",
                                  margin: "auto",
                                  display: "block",
                                  width: 0,
                                  height: 0,
                                  minWidth: "100%",
                                  maxWidth: "100%",
                                  minHeight: "100%",
                                  maxHeight: "100%"
                                }}
                              />
                              <noscript />
                            </span>
                          </div>
                        </div>
                        <div
                          id="m5"
                          className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                          style={{}}
                        >
                          <div className="flex h-full flex-col justify-between">
                            <div
                              className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                              style={{ padding: 0 }}
                            >
                              <div
                                className="mb-4 flex items-center gap-4 lg:mb-8"
                                style={{ margin: "0px 0px 16px" }}
                              >
                                <div className="t-12 inline-block bg-green px-3 py-2 font-semibold uppercase text-black">
                                  Media
                                </div>
                                <time className="t-15 font-semibold uppercase tracking-widest text-white">
                                  7 March, 2023
                                </time>
                              </div>
                              <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300 ">
                              Lorem ipsum dolor sit amet, consectetur adipiscing 
                              </h3>
                            </div>
                            <div className="flex items-center font-semibold">
                              Learn more{" "}
                              <div className="ml-4">
                                <svg
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect width={30} height={30} fill="#02F3A2" />
                                  <path
                                    d="M14.8125 8.1875C15 8.02083 15.1771 8.02083 15.3438 8.1875L21.875 14.75C22.0625 14.9167 22.0625 15.0833 21.875 15.25L15.3438 21.8125C15.1771 21.9792 15 21.9792 14.8125 21.8125L14.1875 21.1875C14.125 21.125 14.0938 21.0417 14.0938 20.9375C14.0938 20.8333 14.125 20.7396 14.1875 20.6562L19.0312 15.8125H8.375C8.125 15.8125 8 15.6875 8 15.4375V14.5625C8 14.3125 8.125 14.1875 8.375 14.1875H19.0312L14.1875 9.34375C14.0208 9.15625 14.0208 8.97917 14.1875 8.8125L14.8125 8.1875Z"
                                    fill="#09182C"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        id="m6"
                        href="https://www.untoldstories.com/programmable-bitcoin-and-a-turing-complete-digital-economy-with-justin-banon-of-boson-protocol/"
                        target="_blank"
                        rel="noreferrer"
                        className="relative block overflow-hidden bg-white outline outline-4 duration-300 outline-transparent"
                      >
                        <div className="flex h-full flex-col justify-between gap-y-4">
                          <div className="p-4 lg:p-8 xl:p-10">
                            <div className="mb-4 flex items-center gap-4 lg:mb-8">
                              <div className="t-12 inline-block bg-purple px-3 py-2 font-semibold uppercase text-white">
                                Media
                              </div>
                              <time className="t-15 font-semibold uppercase tracking-widest text-darkGrey">
                                14 March, 2023
                              </time>
                            </div>
                            <h3 className="t-24 font-semibold !leading-[1.15] text-black duration-300 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            </h3>
                          </div>
                          <div className="relative aspect-[429/233]">
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                overflow: "hidden",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                position: "absolute",
                                inset: 0
                              }}
                            >
                              <img
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  inset: 0,
                                  boxSizing: "border-box",
                                  padding: 0,
                                  border: "none",
                                  margin: "auto",
                                  display: "block",
                                  width: 0,
                                  height: 0,
                                  minWidth: "100%",
                                  maxWidth: "100%",
                                  minHeight: "100%",
                                  maxHeight: "100%"
                                }}
                              />
                              <noscript />
                            </span>
                          </div>
                        </div>
                        <div
                          id="m7"
                          className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                          style={{}}
                        >
                          <div className="flex h-full flex-col justify-between">
                            <div
                              className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                              style={{ padding: 0 }}
                            >
                              <div
                                className="mb-4 flex items-center gap-4 lg:mb-8"
                                style={{ margin: "0px 0px 16px" }}
                              >
                                <div className="t-12 inline-block bg-green px-3 py-2 font-semibold uppercase text-black">
                                  Media
                                </div>
                                <time className="t-15 font-semibold uppercase tracking-widest text-white">
                                  7 March, 2023
                                </time>
                              </div>
                              <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300 ">
                              Lorem ipsum dolor sit amet, consectetur adipiscing 
                              </h3>
                            </div>
                            <div className="flex items-center font-semibold">
                              Learn more{" "}
                              <div className="ml-4">
                                <svg
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect width={30} height={30} fill="#02F3A2" />
                                  <path
                                    d="M14.8125 8.1875C15 8.02083 15.1771 8.02083 15.3438 8.1875L21.875 14.75C22.0625 14.9167 22.0625 15.0833 21.875 15.25L15.3438 21.8125C15.1771 21.9792 15 21.9792 14.8125 21.8125L14.1875 21.1875C14.125 21.125 14.0938 21.0417 14.0938 20.9375C14.0938 20.8333 14.125 20.7396 14.1875 20.6562L19.0312 15.8125H8.375C8.125 15.8125 8 15.6875 8 15.4375V14.5625C8 14.3125 8.125 14.1875 8.375 14.1875H19.0312L14.1875 9.34375C14.0208 9.15625 14.0208 8.97917 14.1875 8.8125L14.8125 8.1875Z"
                                    fill="#09182C"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        id="m8"
                        href="https://www.untoldstories.com/programmable-bitcoin-and-a-turing-complete-digital-economy-with-justin-banon-of-boson-protocol/"
                        target="_blank"
                        rel="noreferrer"
                        className="relative block overflow-hidden bg-white outline outline-4 duration-300 outline-transparent"
                      >
                        <div className="flex h-full flex-col justify-between gap-y-4">
                          <div className="p-4 lg:p-8 xl:p-10">
                            <div className="mb-4 flex items-center gap-4 lg:mb-8">
                              <div className="t-12 inline-block bg-purple px-3 py-2 font-semibold uppercase text-white">
                                Media
                              </div>
                              <time className="t-15 font-semibold uppercase tracking-widest text-darkGrey">
                                14 March, 2023
                              </time>
                            </div>
                            <h3 className="t-24 font-semibold !leading-[1.15] text-black duration-300 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            </h3>
                          </div>
                          <div className="relative aspect-[429/233]">
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                overflow: "hidden",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                position: "absolute",
                                inset: 0
                              }}
                            >
                              <img
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: "absolute",
                                  inset: 0,
                                  boxSizing: "border-box",
                                  padding: 0,
                                  border: "none",
                                  margin: "auto",
                                  display: "block",
                                  width: 0,
                                  height: 0,
                                  minWidth: "100%",
                                  maxWidth: "100%",
                                  minHeight: "100%",
                                  maxHeight: "100%"
                                }}
                              />
                              <noscript />
                            </span>
                          </div>
                        </div>
                        <div
                          id="m9"
                          className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                          style={{}}
                        >
                          <div className="flex h-full flex-col justify-between">
                            <div
                              className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                              style={{ padding: 0 }}
                            >
                              <div
                                className="mb-4 flex items-center gap-4 lg:mb-8"
                                style={{ margin: "0px 0px 16px" }}
                              >
                                <div className="t-12 inline-block bg-green px-3 py-2 font-semibold uppercase text-black">
                                  Media
                                </div>
                                <time className="t-15 font-semibold uppercase tracking-widest text-white">
                                  7 March, 2023
                                </time>
                              </div>
                              <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300 ">
                              Lorem ipsum dolor sit amet, consectetur adipiscing 
                              </h3>
                            </div>
                            <div className="flex items-center font-semibold">
                              Learn more{" "}
                              <div className="ml-4">
                                <svg
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect width={30} height={30} fill="#02F3A2" />
                                  <path
                                    d="M14.8125 8.1875C15 8.02083 15.1771 8.02083 15.3438 8.1875L21.875 14.75C22.0625 14.9167 22.0625 15.0833 21.875 15.25L15.3438 21.8125C15.1771 21.9792 15 21.9792 14.8125 21.8125L14.1875 21.1875C14.125 21.125 14.0938 21.0417 14.0938 20.9375C14.0938 20.8333 14.125 20.7396 14.1875 20.6562L19.0312 15.8125H8.375C8.125 15.8125 8 15.6875 8 15.4375V14.5625C8 14.3125 8.125 14.1875 8.375 14.1875H19.0312L14.1875 9.34375C14.0208 9.15625 14.0208 8.97917 14.1875 8.8125L14.8125 8.1875Z"
                                    fill="#09182C"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <a
                      className="mt-8 inline-block border-2 border-purple py-4 px-4 text-center font-semibold text-purple duration-200 hover:bg-purple hover:text-white lg:mt-16 lg:min-w-[225px]"
                      href="/blog/#"
                    >
                      Load more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-16 lg:py-20">
            <div className="relative my-10 border-[16px] border-purple bg-green py-8 md:my-20 md:py-16">
              <div className="absolute top-0 right-0 lg:min-h-[205px] lg:min-w-[205px]">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "absolute",
                    inset: 0
                  }}
                >
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async"
                    data-nimg="fill"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%"
                    }}
                  />
                  <noscript />
                </span>
              </div>
              <div className="mx-4 text-center md:mx-auto md:max-w-[635px]">
                <h3 className="t-52 mb-8 font-semibold md:mb-16">
                Lorem ipsum dolor sit amet, consectetur 
                </h3>
                <form
                  action="https://bosonprotocol.us7.list-manage.com/subscribe/post?u=041835ebb075036b079fe1a13&id=b0476087d6&f_id=009786e0f0"
                  method="post"
                  target="_blank"
                  className="flex flex-col bg-white p-1 sm:flex-row"
                >
                  <input
                    type="email"
                    id="mce-EMAIL"
                    required=""
                    name="EMAIL"
                    className="flex-1 p-4 lg:p-5"
                    placeholder="Enter your email"
                    defaultValue=""
                  />
                  <button
                    type="submit"
                    className="min-w-[100px] self-stretch bg-black py-2 font-semibold text-white duration-200 hover:bg-purple lg:min-w-[180px]"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div>
            <h3 className="t-48 mb-8 text-center font-semibold lg:mb-20">
              All content
            </h3>
            <div className="flex flex-1">
              <style dangerouslySetInnerHTML={{ __html: "\n \n" }} />
              <select className="select-icon w-full p-4 lg:hidden myBtnContainer " id="myBtnContainer">
                <option>All</option>
                <option>Announcements</option>
                <option>Bosonapp</option>
                <option>Governance</option>
                <option>Partnerships</option>
                <option>Technology</option>
              </select>
              <div className="mx-auto hidden space-x-3 lg:block xl:mx-0" >
                <button type="button"  className="border-2 bg-white py-3 px-6 xl:px-9 font-semibold text-black duration-200 hover:border-purple border-purple btn active"
                 onClick={this.all}
                >
                  All
                </button>
                <button
                  type="button" className=" bg-white py-3 px-6 xl:px-9 font-semibold text-black duration-200 hover:border-purple border-transparent btn"
                 
                >
                  Announcements
                </button>
                <button
                  type="button" className=" bg-white py-3 px-6 xl:px-9 font-semibold text-black duration-200 hover:border-purple border-transparent btn"
                  
                >
                  Bosonapp
                </button>
                <button
                  type="button" className=" bg-white py-3 px-6 xl:px-9 font-semibold text-black duration-200 hover:border-purple border-transparent btn"
                 
                >
                  Governance
                </button>
                <button
                  type="button" className=" bg-white py-3 px-6 xl:px-9 font-semibold text-black duration-200 hover:border-purple border-transparent btn"
                 
                >
                  Partnerships
                </button>
                <button
                  type="button" className=" bg-white py-3 px-6 xl:px-9 font-semibold text-black duration-200 hover:border-purple border-transparent btn"
                  
                >
                  Technology
                </button>
              </div>
            </div>
            <div className="row mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-9">
              <div className="column Announcements">
                <div className="content  grid min-h-[1200px]  sm:min-h-[736px] lg:min-h-[480px] ">
                  <a id="p1" className="relative block overflow-hidden bg-white outline outline-4 duration-300 outline-transparent"
                    href="blog_details"
                  >
                    <div className="flex h-full flex-col justify-between gap-y-4">
                      <div className="p-4 lg:p-8 xl:p-10">
                        <div className="mb-4 flex items-center gap-4 lg:mb-8">
                          <div className="t-12 inline-block bg-purple px-3 py-2 font-semibold uppercase text-white">
                            Announcements
                          </div>
                          <time className="t-15 font-semibold uppercase tracking-widest text-darkGrey">
                            7 March, 2023
                          </time>
                        </div>
                        <h3 className="t-24 font-semibold !leading-[1.15] text-black duration-300  line-clamp-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        </h3>
                      </div>
                    </div>
                    <div
                      id="p3"
                      className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                      style={{}}
                    >
                      <div className="flex h-full flex-col justify-between">
                        <div
                          className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                          style={{ padding: 0 }}
                        >
                          <div
                            className="mb-4 flex items-center gap-4 lg:mb-8"
                            style={{ margin: "0px 0px 16px" }}
                          >
                            <div className="t-12 inline-block bg-green px-3 py-2 font-semibold uppercase text-white">
                              Announcements
                            </div>
                            <time className="t-15 font-semibold uppercase tracking-widest text-white">
                              7 March, 2023
                            </time>
                          </div>
                          <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300 ">
                          Lorem ipsum dolor sit amet, consectetur adipiscing 
                          </h3>
                        </div>
                        <div className="flex items-center font-semibold">
                          Learn more{" "}
                          <div className="ml-4">
                            <svg
                              width={30}
                              height={30}
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width={30} height={30} fill="#02F3A2" />
                              <path
                                d="M14.8125 8.1875C15 8.02083 15.1771 8.02083 15.3438 8.1875L21.875 14.75C22.0625 14.9167 22.0625 15.0833 21.875 15.25L15.3438 21.8125C15.1771 21.9792 15 21.9792 14.8125 21.8125L14.1875 21.1875C14.125 21.125 14.0938 21.0417 14.0938 20.9375C14.0938 20.8333 14.125 20.7396 14.1875 20.6562L19.0312 15.8125H8.375C8.125 15.8125 8 15.6875 8 15.4375V14.5625C8 14.3125 8.125 14.1875 8.375 14.1875H19.0312L14.1875 9.34375C14.0208 9.15625 14.0208 8.97917 14.1875 8.8125L14.8125 8.1875Z"
                                fill="#09182C"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="column Bosonapp">
                <div className="content  grid min-h-[1200px]  sm:min-h-[736px] lg:min-h-[480px] ">
                  <a
                    id="p4"
                    className="relative block overflow-hidden bg-white outline outline-4 duration-300 outline-transparent"
                    href=""
                  >
                    <div className="flex h-full flex-col justify-between gap-y-4">
                      <div className="p-4 lg:p-8 xl:p-10">
                        <div className="mb-4 flex items-center gap-4 lg:mb-8">
                          <div className="t-12 inline-block bg-purple px-3 py-2 font-semibold uppercase text-white">
                            Announcements
                          </div>
                          <time className="t-15 font-semibold uppercase tracking-widest text-darkGrey">
                            7 March, 2023
                          </time>
                        </div>
                        <h3 className="t-24 font-semibold !leading-[1.15] text-black duration-300  line-clamp-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        </h3>
                      </div>
                    </div>
                    <div
                      id="p5"
                      className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                      style={{}}
                    >
                      <div className="flex h-full flex-col justify-between">
                        <div
                          className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                          style={{ padding: 0 }}
                        >
                          <div
                            className="mb-4 flex items-center gap-4 lg:mb-8"
                            style={{ margin: "0px 0px 16px" }}
                          >
                            <div className="t-12 inline-block bg-green px-3 py-2 font-semibold uppercase text-white">
                              Announcements
                            </div>
                            <time className="t-15 font-semibold uppercase tracking-widest text-white">
                              7 March, 2023
                            </time>
                          </div>
                          <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300 ">
                          Lorem ipsum dolor sit amet, consectetur adipiscing 
                          </h3>
                        </div>
                        <div className="flex items-center font-semibold">
                          Learn more{" "}
                          <div className="ml-4">
                            <svg
                              width={30}
                              height={30}
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width={30} height={30} fill="#02F3A2" />
                              <path
                                d="M14.8125 8.1875C15 8.02083 15.1771 8.02083 15.3438 8.1875L21.875 14.75C22.0625 14.9167 22.0625 15.0833 21.875 15.25L15.3438 21.8125C15.1771 21.9792 15 21.9792 14.8125 21.8125L14.1875 21.1875C14.125 21.125 14.0938 21.0417 14.0938 20.9375C14.0938 20.8333 14.125 20.7396 14.1875 20.6562L19.0312 15.8125H8.375C8.125 15.8125 8 15.6875 8 15.4375V14.5625C8 14.3125 8.125 14.1875 8.375 14.1875H19.0312L14.1875 9.34375C14.0208 9.15625 14.0208 8.97917 14.1875 8.8125L14.8125 8.1875Z"
                                fill="#09182C"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="column Governance">
                <div className="content  grid min-h-[1200px]  sm:min-h-[736px] lg:min-h-[480px] ">
                  <a
                    id="p6"
                    className="relative block overflow-hidden bg-white outline outline-4 duration-300 outline-transparent"
                    href=""
                  >
                    <div className="flex h-full flex-col justify-between gap-y-4">
                      <div className="p-4 lg:p-8 xl:p-10">
                        <div className="mb-4 flex items-center gap-4 lg:mb-8">
                          <div className="t-12 inline-block bg-purple px-3 py-2 font-semibold uppercase text-white">
                            Announcements
                          </div>
                          <time className="t-15 font-semibold uppercase tracking-widest text-darkGrey">
                            7 March, 2023
                          </time>
                        </div>
                        <h3 className="t-24 font-semibold !leading-[1.15] text-black duration-300  line-clamp-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        </h3>
                      </div>
                    </div>
                    <div
                      id="p7"
                      className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                      style={{}}
                    >
                      <div className="flex h-full flex-col justify-between">
                        <div
                          className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                          style={{ padding: 0 }}
                        >
                          <div
                            className="mb-4 flex items-center gap-4 lg:mb-8"
                            style={{ margin: "0px 0px 16px" }}
                          >
                            <div className="t-12 inline-block bg-green px-3 py-2 font-semibold uppercase text-white">
                              Announcements
                            </div>
                            <time className="t-15 font-semibold uppercase tracking-widest text-white">
                              7 March, 2023
                            </time>
                          </div>
                          <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300 ">
                          Lorem ipsum dolor sit amet, consectetur adipiscing 
                          </h3>
                        </div>
                        <div className="flex items-center font-semibold">
                          Learn more{" "}
                          <div className="ml-4">
                            <svg
                              width={30}
                              height={30}
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width={30} height={30} fill="#02F3A2" />
                              <path
                                d="M14.8125 8.1875C15 8.02083 15.1771 8.02083 15.3438 8.1875L21.875 14.75C22.0625 14.9167 22.0625 15.0833 21.875 15.25L15.3438 21.8125C15.1771 21.9792 15 21.9792 14.8125 21.8125L14.1875 21.1875C14.125 21.125 14.0938 21.0417 14.0938 20.9375C14.0938 20.8333 14.125 20.7396 14.1875 20.6562L19.0312 15.8125H8.375C8.125 15.8125 8 15.6875 8 15.4375V14.5625C8 14.3125 8.125 14.1875 8.375 14.1875H19.0312L14.1875 9.34375C14.0208 9.15625 14.0208 8.97917 14.1875 8.8125L14.8125 8.1875Z"
                                fill="#09182C"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="column Partnerships">
                <div className="content  grid min-h-[1200px]  sm:min-h-[736px] lg:min-h-[480px] ">
                  <a
                    id="p8"
                    className="relative block overflow-hidden bg-white outline outline-4 duration-300 outline-transparent"
                    href=""
                  >
                    <div className="flex h-full flex-col justify-between gap-y-4">
                      <div className="p-4 lg:p-8 xl:p-10">
                        <div className="mb-4 flex items-center gap-4 lg:mb-8">
                          <div className="t-12 inline-block bg-purple px-3 py-2 font-semibold uppercase text-white">
                            Announcements
                          </div>
                          <time className="t-15 font-semibold uppercase tracking-widest text-darkGrey">
                            7 March, 2023
                          </time>
                        </div>
                        <h3 className="t-24 font-semibold !leading-[1.15] text-black duration-300  line-clamp-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        </h3>
                      </div>
                    </div>
                    <div
                      id="p9"
                      className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                      style={{}}
                    >
                      <div className="flex h-full flex-col justify-between">
                        <div
                          className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                          style={{ padding: 0 }}
                        >
                          <div
                            className="mb-4 flex items-center gap-4 lg:mb-8"
                            style={{ margin: "0px 0px 16px" }}
                          >
                            <div className="t-12 inline-block bg-green px-3 py-2 font-semibold uppercase text-white">
                              Announcements
                            </div>
                            <time className="t-15 font-semibold uppercase tracking-widest text-white">
                              7 March, 2023
                            </time>
                          </div>
                          <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300 ">
                          Lorem ipsum dolor sit amet, consectetur adipiscing 
                          </h3>
                        </div>
                        <div className="flex items-center font-semibold">
                          Learn more{" "}
                          <div className="ml-4">
                            <svg
                              width={30}
                              height={30}
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width={30} height={30} fill="#02F3A2" />
                              <path
                                d="M14.8125 8.1875C15 8.02083 15.1771 8.02083 15.3438 8.1875L21.875 14.75C22.0625 14.9167 22.0625 15.0833 21.875 15.25L15.3438 21.8125C15.1771 21.9792 15 21.9792 14.8125 21.8125L14.1875 21.1875C14.125 21.125 14.0938 21.0417 14.0938 20.9375C14.0938 20.8333 14.125 20.7396 14.1875 20.6562L19.0312 15.8125H8.375C8.125 15.8125 8 15.6875 8 15.4375V14.5625C8 14.3125 8.125 14.1875 8.375 14.1875H19.0312L14.1875 9.34375C14.0208 9.15625 14.0208 8.97917 14.1875 8.8125L14.8125 8.1875Z"
                                fill="#09182C"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="column Technology">
                <div className="content  grid min-h-[1200px]  sm:min-h-[736px] lg:min-h-[480px] ">
                  <a
                    id="p10"
                    className="relative block overflow-hidden bg-white outline outline-4 duration-300 outline-transparent"
                    href=""
                  >
                    <div className="flex h-full flex-col justify-between gap-y-4">
                      <div className="p-4 lg:p-8 xl:p-10">
                        <div className="mb-4 flex items-center gap-4 lg:mb-8">
                          <div className="t-12 inline-block bg-purple px-3 py-2 font-semibold uppercase text-white">
                            Announcements
                          </div>
                          <time className="t-15 font-semibold uppercase tracking-widest text-darkGrey">
                            7 March, 2023
                          </time>
                        </div>
                        <h3 className="t-24 font-semibold !leading-[1.15] text-black duration-300  line-clamp-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        </h3>
                      </div>
                    </div>
                    <div
                      id="p11"
                      className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                      style={{}}
                    >
                      <div className="flex h-full flex-col justify-between">
                        <div
                          className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                          style={{ padding: 0 }}
                        >
                          <div
                            className="mb-4 flex items-center gap-4 lg:mb-8"
                            style={{ margin: "0px 0px 16px" }}
                          >
                            <div className="t-12 inline-block bg-green px-3 py-2 font-semibold uppercase text-white">
                              Announcements
                            </div>
                            <time className="t-15 font-semibold uppercase tracking-widest text-white">
                              7 March, 2023
                            </time>
                          </div>
                          <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300 ">
                          Lorem ipsum dolor sit amet, consectetur adipiscing 
                          </h3>
                        </div>
                        <div className="flex items-center font-semibold">
                          Learn more{" "}
                          <div className="ml-4">
                            <svg
                              width={30}
                              height={30}
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width={30} height={30} fill="#02F3A2" />
                              <path
                                d="M14.8125 8.1875C15 8.02083 15.1771 8.02083 15.3438 8.1875L21.875 14.75C22.0625 14.9167 22.0625 15.0833 21.875 15.25L15.3438 21.8125C15.1771 21.9792 15 21.9792 14.8125 21.8125L14.1875 21.1875C14.125 21.125 14.0938 21.0417 14.0938 20.9375C14.0938 20.8333 14.125 20.7396 14.1875 20.6562L19.0312 15.8125H8.375C8.125 15.8125 8 15.6875 8 15.4375V14.5625C8 14.3125 8.125 14.1875 8.375 14.1875H19.0312L14.1875 9.34375C14.0208 9.15625 14.0208 8.97917 14.1875 8.8125L14.8125 8.1875Z"
                                fill="#09182C"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="column Technology">
                <div className="content  grid min-h-[1200px]  sm:min-h-[736px] lg:min-h-[480px] ">
                  <a
                    id="p12"
                    className="relative block overflow-hidden bg-white outline outline-4 duration-300 outline-transparent"
                    href=""
                  >
                    <div className="flex h-full flex-col justify-between gap-y-4">
                      <div className="p-4 lg:p-8 xl:p-10">
                        <div className="mb-4 flex items-center gap-4 lg:mb-8">
                          <div className="t-12 inline-block bg-purple px-3 py-2 font-semibold uppercase text-white">
                            Announcements
                          </div>
                          <time className="t-15 font-semibold uppercase tracking-widest text-darkGrey">
                            7 March, 2023
                          </time>
                        </div>
                        <h3 className="t-24 font-semibold !leading-[1.15] text-black duration-300  line-clamp-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        </h3>
                      </div>
                    </div>
                    <div
                      id="p13"
                      className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                      style={{}}
                    >
                      <div className="flex h-full flex-col justify-between">
                        <div
                          className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                          style={{ padding: 0 }}
                        >
                          <div
                            className="mb-4 flex items-center gap-4 lg:mb-8"
                            style={{ margin: "0px 0px 16px" }}
                          >
                            <div className="t-12 inline-block bg-green px-3 py-2 font-semibold uppercase text-white">
                              Announcements
                            </div>
                            <time className="t-15 font-semibold uppercase tracking-widest text-white">
                              7 March, 2023
                            </time>
                          </div>
                          <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300 ">
                          Lorem ipsum dolor sit amet, consectetur adipiscing 
                          </h3>
                        </div>
                        <div className="flex items-center font-semibold">
                          Learn more{" "}
                          <div className="ml-4">
                            <svg
                              width={30}
                              height={30}
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width={30} height={30} fill="#02F3A2" />
                              <path
                                d="M14.8125 8.1875C15 8.02083 15.1771 8.02083 15.3438 8.1875L21.875 14.75C22.0625 14.9167 22.0625 15.0833 21.875 15.25L15.3438 21.8125C15.1771 21.9792 15 21.9792 14.8125 21.8125L14.1875 21.1875C14.125 21.125 14.0938 21.0417 14.0938 20.9375C14.0938 20.8333 14.125 20.7396 14.1875 20.6562L19.0312 15.8125H8.375C8.125 15.8125 8 15.6875 8 15.4375V14.5625C8 14.3125 8.125 14.1875 8.375 14.1875H19.0312L14.1875 9.34375C14.0208 9.15625 14.0208 8.97917 14.1875 8.8125L14.8125 8.1875Z"
                                fill="#09182C"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/* END GRID */}
            </div>
            <div className="flex justify-center">
              <a
                className="mt-8 inline-block border-2 border-purple py-4 px-4 text-center font-semibold text-purple duration-200 hover:bg-purple hover:text-white lg:mt-16 lg:min-w-[225px]"
                href="/blog/#"
              >
                Load more
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio Gallery Grid */}
    </section>
  </main>
</div>


            </div>
            


        );
    }
}

export default Blog_Demo;
