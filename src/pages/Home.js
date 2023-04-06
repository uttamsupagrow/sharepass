import React from "react";

class Home extends React.Component
{
    
   
    render()
    {
      
      var loadScript = function(src) {
        var tag = document.createElement('script');
        tag.async = false;
        tag.src = src;
        document.getElementsByTagName('body')[0].appendChild(tag);
        }

        loadScript('_next/static/chunks/pages/home_page.js');

        return(
         
        <div>
         
            <div id="__next">
  <div className="h-[33px]" />
  <main className="bg-lightGrey">
  <section
  data-layouts="two_col_masthead"
  data-background="none"
  className=" overflow-hidden  relative  py-12   pt-[4.4rem] md:pb-8 md:pt-[5.4rem]   !mt-0  !pb-0 scroll-container"
>
  <div className="section-background pointer-events-none absolute inset-0 ">
    <div style={{ opacity: 1 }} />
  </div>
  <div className="relative space-y-8 xl:space-y-10 ">
    <div className="relative">
      <div className="container relative z-20 ">
        <div className="flex flex-col items-center gap-y-12 lg:flex-row lg:justify-between lg:gap-x-12 lg:pt-[137px] lg:pb-[248px]  ">
          <div className="relative z-10 mt-12 flex-shrink md:mt-0">
            <div className="text-center  lg:text-left mx-auto lg:mx-0 ">
              <div
                className="flex justify-center lg:justify-start font-bold t-13 t-subheading  mb-4 items-center tracking-widest"
                style={{ opacity: 1 }}
              >
                <div className="mr-2 inline-block flex-none">
                  <svg
                    width={12}
                    height={11}
                    viewBox="0 0 12 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_152_55743)">
                      <path
                        d="M11.0953 8.24996L6.33215 11L1.56901 8.24996L1.56901 2.74996L6.33215 -4.43795e-05L11.0953 2.74996L11.0953 8.24996Z"
                        fill="#7829F9"
                      />
                      <path
                        d="M6.31553 11.0058L1.57704 8.27002L1.55364 2.76855L6.3227 5.52197L6.31553 11.0058Z"
                        fill="#02F3A2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_152_55743">
                        <rect
                          width={11}
                          height={11}
                          fill="white"
                          transform="matrix(-1 0 0 1 11.8322 0)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h1 className=" inline-block text-center uppercase lg:text-left ">
                  Sharepass{" "}
                </h1>
              </div>
              <div className="" style={{ opacity: 1 }}>
              <h3 className="text-content-heading t-64-heading font-semibold text-black px-16 md:px-8 lg:px-0">
                      {" "}
                      Don’t risk it,<br/> Sharepass it{" "}
                    </h3>
              </div>
              <div
                className="mt-6 font-medium wsyiwyg !text-darkGrey t-22"
                style={{ opacity: 1 }}
              >
                <p>
                    An online digital security solution for confidential<br/> information sharing.{" "}
                      
                    </p>
              </div>
              <div className="mt-8 w-full font-semibold   ">
                    <div className="w-full flex-grow items-center justify-center gap-y-6  space-y-4 sm:space-x-4 md:flex md:w-auto md:gap-y-0 md:space-y-0 md:space-x-5 lg:space-x-8 lg:justify-start ">
                      <a
                        href=""
                        className="inline-block  w-full border-[2px] text-center transition-colors duration-200  border-transparent primary-button hover:border-purple bg-black text-white hover:bg-purple hover:text-white py-4 px-8  font-bold leading-none md:w-full md:max-w-[200px]  sm:w-auto md:!max-w-fit undefined"
                        target="_blank"
                      >
                        Try Sharepass{" "}
                      </a>
                      <a
                        href=""
                        className="inline-block  w-full border-[2px] text-center transition-colors duration-200  bg-white border-black border-[2px] hover:border-black text-black hover:bg-black hover:text-white py-4 px-8  font-bold leading-none md:w-full md:max-w-[200px]  sm:w-auto undefined undefined"
                        target=""
                      >
                        Know More{" "}
                      </a>
                    </div>
                  </div>
            </div>
          </div>
          <div className="media max-w-[588px]  w-full flex-1 lg:absolute lg:bottom-0 lg:w-full lg:top-0 lg:left-[55%] lg:max-w-[732px] xl:left-[50%]">
            <img
              src="_next/img/Home.png"
             
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    <section
      data-layouts="marquee_block_with_links"
      data-background="none"
      className=" overflow-hidden  relative  py-12  md:py-24   !pt-0"
      style={{ paddingBottom: 200 }}
    >
      <div className="section-background pointer-events-none absolute inset-0 ">
        <div style={{ opacity: 1 }} />
      </div>
      <div className="relative space-y-8 xl:space-y-10 ">
        <div style={{ opacity: 1 }}>
          <div className="container">
            <div className="mb-10 border-b-[1px] border-darkGrey border-opacity-50 pb-10 md:mb-12 md:pb-20">
              <div className="relative z-10 container scroll-element js-scroll fade-in">
                <div className="text-center  mx-auto ">
                  <div className="mx-auto" style={{ opacity: 1 }}>
                    <h3 className="text-content-heading t-48 leading-[1.15] font-semibold text-black ">
                    Lorem ipsum dolor {" "}
                    </h3>
                  </div>
                  <div
                    className="mt-6 font-medium wsyiwyg !text-darkGrey t-20"
                    style={{ opacity: 1 }}
                  >
                    <p> Lorem ipsum dolor sit amet consectetur. Augue ac
                            eget enim posuere eget </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="logoMarqueeSection">
  <div className="container" id="logoMarqueeSection" style={{padding:"0px 0px", maxWidth:"100%"}}>
    <div className="default-content-container flex items-center">
      <div className="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block">
        <div className="marquee" style={{ animationDuration: "25s" }}>
          <a target="_blank" href="#">
            <img
              src="https://bosonwp.wpengine.com/wp-content/uploads/2022/11/Frame-40134.svg"
              title=""
              className="marqueelogo"
              style={{ width: "90", maxWidth: "45" }}
            
            />
          </a>
          <a target="_blank" href="#">
            <img
              src="https://www.bosonprotocol.io/_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F11%2Fsoma_innovation_lab.png&w=96&q=75"
              title=""
              className="marqueelogo"
              style={{ width: "90", maxWidth: "45" }}
            />
          </a>
          <a target="_blank" href="#">
            <img
              src="https://bosonwp.wpengine.com/wp-content/uploads/2022/11/ecoolska.svg"
              title=""
              className="marqueelogo"
              style={{ width: "90", maxWidth: "45" }}
            />
          </a>
            
          <a target="_blank" href="#">
            <img
              src="https://www.bosonprotocol.io/_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F11%2FFrame-40140.png&w=96&q=75"
              title=""
              className="marqueelogo"
               style={{ width: "90", maxWidth: "45" }}
            />
          </a>
          <a target="_blank" href="#">
            <img
              src="https://www.bosonprotocol.io/_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F11%2FFrame-40137.png&w=256&q=75"
              title=""
              className="marqueelogo"
               style={{ width: "90", maxWidth: "45" }}
            />
          </a>
          <a target="_blank" href="#">
            <img
              src="https://www.bosonprotocol.io/_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F11%2FFrame-40136.png&w=96&q=75"
              title=""
              className="marqueelogo"
               style={{ width: "90", maxWidth: "45" }}
            />
          </a>
          <a target="_blank" href="#">
            <img
              src="https://www.bosonprotocol.io/_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F11%2FFrame-40137.png&w=256&q=75"
              title=""
              className="marqueelogo"
               style={{ width: "90", maxWidth: "45" }}
            />
          </a>
          <a target="_blank" href="#">
            <img
              src="https://bosonwp.wpengine.com/wp-content/uploads/2022/11/ecoolska.svg"
              title=""
              className="marqueelogo"
               style={{ width: "90", maxWidth: "45" }}
            />
          </a>
          <a target="_blank" href="#">
            <img
              src="https://www.bosonprotocol.io/_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F11%2FFrame-40140.png&w=96&q=75"
              title=""
              className="marqueelogo"
               style={{ width: "90", maxWidth: "45" }}
            />
          </a>
          <a target="_blank" href="#">
            <img
              src="https://www.bosonprotocol.io/_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F11%2FFrame-40137.png&w=256&q=75"
              title=""
              className="marqueelogo"
               style={{ width: "90", maxWidth: "45" }}
            />
          </a>
          <a target="_blank" href="#">
            <img
              src="https://www.bosonprotocol.io/_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F11%2FFrame-40136.png&w=96&q=75"
              title=""
              className="marqueelogo"
               style={{ width: "90", maxWidth: "45" }}
            />
          </a>
        </div>
        <div className="marquee" style={{ animationDuration: "25s" }}>
          <a target="_blank" href="#">
            <img
              src="https://bosonwp.wpengine.com/wp-content/uploads/2022/11/Frame-40134.svg"
              title=""
              className="marqueelogo"
               style={{ width: "90", maxWidth: "45" }}
            />
          </a>
          <a target="_blank" href="#">
            <img
              src="https://www.bosonprotocol.io/_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F11%2Fsoma_innovation_lab.png&w=96&q=75"
              title=""
              className="marqueelogo"
               style={{ width: "90", maxWidth: "45" }}
            />
          </a>
          <a target="_blank" href="#">
            <img
              src="https://bosonwp.wpengine.com/wp-content/uploads/2022/11/ecoolska.svg"
              title=""
              className="marqueelogo"
               style={{ width: "90", maxWidth: "45" }}
            />
          </a>
          <a target="_blank" href="#">
            <img
              src="https://www.bosonprotocol.io/_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F11%2FFrame-40140.png&w=96&q=75"
              title=""
              className="marqueelogo"
               style={{ width: "90", maxWidth: "45" }}
            />
          </a>
          <a target="_blank" href="#">
            <img
              src="https://www.bosonprotocol.io/_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F11%2FFrame-40137.png&w=256&q=75"
              title=""
              className="marqueelogo"
               style={{ width: "90", maxWidth: "45" }}
            />
          </a>
          <a target="_blank" href="#">
            <img
              src="https://www.bosonprotocol.io/_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F11%2FFrame-40136.png&w=96&q=75"
              title=""
              className="marqueelogo"
               style={{ width: "90", maxWidth: "45" }}
            />
          </a>
          <a target="_blank" href="#">
            <img
              src="https://www.bosonprotocol.io/_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F11%2FFrame-40137.png&w=256&q=75"
              title=""
              className="marqueelogo"
               style={{ width: "90", maxWidth: "45" }}
            />
          </a>
          <a target="_blank" href="#">
            <img
              src="https://bosonwp.wpengine.com/wp-content/uploads/2022/11/ecoolska.svg"
              title=""
              className="marqueelogo"
               style={{ width: "90", maxWidth: "45" }}
            />
          </a>
          <a target="_blank" href="#">
            <img
              src="https://www.bosonprotocol.io/_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F11%2FFrame-40140.png&w=96&q=75"
              title=""
              className="marqueelogo"
               style={{ width: "90", maxWidth: "45" }}
            />
          </a>
          <a target="_blank" href="#">
            <img
              src="https://www.bosonprotocol.io/_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F11%2FFrame-40137.png&w=256&q=75"
              title=""
              className="marqueelogo"
               style={{ width: "90", maxWidth: "45" }}
            />
          </a>
          <a target="_blank" href="#">
            <img
              src="https://www.bosonprotocol.io/_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F11%2FFrame-40136.png&w=96&q=75"
              title=""
              className="marqueelogo"
               style={{ width: "90", maxWidth: "45" }}
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


        </div>
      </div>
    </section>
    <section
      data-layouts="two_col_text_media"
      data-background="none"
      className=" overflow-hidden  relative  py-12  md:py-24   !pt-0 !pb-0"
    >
      <div className="section-background pointer-events-none absolute inset-0 ">
        <div style={{ opacity: 1 }} />
      </div>
      <div className="relative space-y-8 xl:space-y-20 ">
        <div className="home-dark-two-col-a ">
          <div className="bg-black   border-b-[1px] border-darkGrey  relative overflow-hidden px-4 py-16 md:px-8 md:pt-14  lg:px-0 lg:pb-0 undefined lg:h-[640px] lg:min-h-[640px] lg:!pt-0 ">
            <div className="container flex min-h-full items-center">
              <div className="w-full items-center justify-between gap-10 flex flex-col-reverse space-y-8 lg:space-y-0  lg:flex-row-reverse ">
                <div className="mx-auto h-full w-full lg:max-w-[50%] lg:pr-4 xl:pr-0 undefined xl:max-w-[510px] text-white ">
                  <div className="content-container">
                    <div className="relative z-10 container">
                      <div className="text-center  lg:text-left mx-auto lg:mx-0 ">
                        <div className="" style={{ opacity: 1 }}>
                          <h3 className="text-content-heading t-48 leading-[1.15]  text-white scroll-element js-scroll fade-in">
                          Lorem ipsum dolor {" "}
                          </h3>
                        </div>
                        <div
                          className="mt-6 font-medium wsyiwyg !text-white t-20"
                          style={{ opacity: 1 }}
                        >
                          <p className="scroll-element js-scroll fade-in">
                          Lorem ipsum dolor sit amet consectetur. Augue ac
                            eget enim posuere eget Lorem ipsum dolor sit amet consectetur. Augue ac
                            eget enim posuere eget{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media flex-1x w-full lg:min-w-[50%] xxl:min-w-[720px]">
                  <div style={{ opacity: 1 }}>
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
                          padding: 0,
                          paddingTop: "88.88888888888889%"
                        }}
                      />
                      <img
                        draggable="false"
                        alt=""
                        src="_next/img/tokenization.png"
                        decoding="async"
                        data-nimg="responsive"
                        className=""
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
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
          </div>
        </div>
      </div>
    </section>
    <section
      data-layouts="two_col_text_media"
      data-background="none"
      className=" overflow-hidden  relative  py-12  md:py-24   !pt-0 !pb-0"
    >
      <div className="section-background pointer-events-none absolute inset-0 ">
        <div style={{ opacity: 1 }} />
      </div>
      <div className="relative space-y-8 xl:space-y-10 ">
        <div className="home-dark-two-col-b ">
          <div className="bg-black   border-b-[1px] border-darkGrey  relative overflow-hidden px-4 py-16 md:px-8 md:pt-14  lg:px-0 lg:pb-0 undefined lg:h-[640px] lg:min-h-[640px] lg:!pt-0 ">
            <div className="container flex min-h-full items-center">
              <div className="w-full items-center justify-between gap-10 flex flex-col-reverse space-y-8 lg:space-y-0  lg:flex-row ">
                <div className="mx-auto h-full w-full lg:max-w-[50%] lg:pr-4 xl:pr-0 undefined xl:max-w-[510px] text-white ">
                  <div className="content-container">
                    <div className="relative z-10 container">
                      <div className="text-center  lg:text-left mx-auto lg:mx-0 ">
                        <div className="" style={{ opacity: 1 }}>
                          <h3 className="text-content-heading t-48 leading-[1.15]  text-white scroll-element js-scroll fade-in">
                          Lorem ipsum dolor 
                          </h3>
                        </div>
                        <div
                          className="mt-6 font-medium wsyiwyg !text-white t-20"
                          style={{ opacity: 1 }}
                        >
                          <p className="scroll-element js-scroll fade-in">
                          Lorem ipsum dolor sit amet consectetur. Augue ac
                            eget enim posuere eget
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media flex-1x w-full lg:min-w-[50%] xxl:min-w-[720px]">
                  <div className="absolute inset-x-0 bottom-0 ">
                    <div className="min-h-[200px]">
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
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0
                        }}
                      >
                        <img
                          src=""
                          decoding="async"
                          data-nimg="fill"
                          className="opacity-70 mix-blend-screen"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
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
                        <noscript>
                          &lt;img sizes="100vw"
                          srcSet="/_next/image/?url=%2Fnet-shape-large.png&amp;amp;w=640&amp;amp;q=75
                          640w,
                          /_next/image/?url=%2Fnet-shape-large.png&amp;amp;w=750&amp;amp;q=75
                          750w,
                          /_next/image/?url=%2Fnet-shape-large.png&amp;amp;w=828&amp;amp;q=75
                          828w,
                          /_next/image/?url=%2Fnet-shape-large.png&amp;amp;w=1080&amp;amp;q=75
                          1080w,
                          /_next/image/?url=%2Fnet-shape-large.png&amp;amp;w=1200&amp;amp;q=75
                          1200w,
                          /_next/image/?url=%2Fnet-shape-large.png&amp;amp;w=1920&amp;amp;q=75
                          1920w,
                          /_next/image/?url=%2Fnet-shape-large.png&amp;amp;w=2048&amp;amp;q=75
                          2048w,
                          /_next/image/?url=%2Fnet-shape-large.png&amp;amp;w=3840&amp;amp;q=75
                          3840w"
                          src="_next/image/index85c2.html?url=%2Fnet-shape-large.png&amp;amp;w=3840&amp;amp;q=75"
                          decoding="async" data-nimg="fill"
                          style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                          class="opacity-70 mix-blend-screen" loading="lazy"
                          /&gt;
                        </noscript>
                      </span>
                      <div className="bg-gradient-to-r absolute inset-y-0 w-[40%] from-[#09182C] to-transparent" />
                    </div>
                  </div>
                  <div className="fade-in-bottom js-scroll" style={{ opacity: 1 }}>
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
                        margin: "",
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
                          padding: 0,
                          paddingTop: "60.93518518518519%"
                        }}
                      />
                      <img
                        draggable="false"
                        alt=""
                        src="_next/img/fair-exchange.png"
                        decoding="async"
                        data-nimg="responsive"
                        className=""
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
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
                      <noscript>
                        &lt;img draggable="false" alt="" sizes="100vw"
                        srcSet="/_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fhome-usp-03-3.png&amp;amp;w=640&amp;amp;q=75
                        640w,
                        /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fhome-usp-03-3.png&amp;amp;w=750&amp;amp;q=75
                        750w,
                        /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fhome-usp-03-3.png&amp;amp;w=828&amp;amp;q=75
                        828w,
                        /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fhome-usp-03-3.png&amp;amp;w=1080&amp;amp;q=75
                        1080w,
                        /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fhome-usp-03-3.png&amp;amp;w=1200&amp;amp;q=75
                        1200w,
                        /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fhome-usp-03-3.png&amp;amp;w=1920&amp;amp;q=75
                        1920w,
                        /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fhome-usp-03-3.png&amp;amp;w=2048&amp;amp;q=75
                        2048w,
                        /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fhome-usp-03-3.png&amp;amp;w=3840&amp;amp;q=75
                        3840w"
                        src="_next/image/index4f94.html?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fhome-usp-03-3.png&amp;amp;w=3840&amp;amp;q=75"
                        decoding="async" data-nimg="responsive"
                        style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                        class="" loading="lazy" /&gt;
                      </noscript>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      data-layouts="two_col_text_media"
      data-background="none"
      className=" overflow-hidden  relative  py-12  md:py-24   !pt-0"
    >
      <div className="section-background pointer-events-none absolute inset-0 ">
        <div style={{ opacity: 1 }} />
      </div>
      <div className="relative space-y-8 xl:space-y-10 ">
        <div className="home-dark-two-col-c ">
          <div className="bg-black   border-b-[1px] border-darkGrey  relative overflow-hidden px-4 py-16 md:px-8 md:pt-14  lg:px-0 lg:pb-0 undefined pt-16 lg:!pt-16 xl:pt-20 lg:min-h-[421px] xl:min-h-[600px] lg:!pt-0 ">
            <div className="container flex min-h-full items-center">
              <div className="w-full items-center justify-between gap-20 flex flex-col-reverse space-y-8 lg:space-y-0  lg:flex-row-reverse ">
                <div className="mx-auto h-full w-full lg:max-w-[50%] lg:pr-4 xl:pr-0 undefined xl:max-w-[485px] text-white lg:pb-5 xl:pb-0">
                  <div className="content-container">
                    <div className="relative z-10 container">
                      <div className="text-center  lg:text-left mx-auto lg:mx-0 ">
                        <div className="" style={{ opacity: 1 }}>
                          <h3 className="text-content-heading t-48 leading-[1.15]  text-white js-scroll fade-in ">
                          Lorem ipsum dolor {" "}
                          </h3>
                        </div>
                        <div
                          className="mt-6 font-medium wsyiwyg !text-white t-20"
                          style={{ opacity: 1 }}
                        >
                          <p className="js-scroll fade-in">
                          Lorem ipsum dolor sit amet consectetur. Augue ac
                            eget enim posuere eget
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 ">
                  <div className="absolute inset-x-0 bottom-0 ">
                    <div className="min-h-[200px]">
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
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0
                        }}
                      >
                        <img
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                          decoding="async"
                          data-nimg="fill"
                          className="opacity-70 mix-blend-screen"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
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
                        <noscript>
                          &lt;img sizes="100vw"
                          srcSet="/_next/image/?url=%2Fnet-shape-large.png&amp;amp;w=640&amp;amp;q=75
                          640w,
                          /_next/image/?url=%2Fnet-shape-large.png&amp;amp;w=750&amp;amp;q=75
                          750w,
                          /_next/image/?url=%2Fnet-shape-large.png&amp;amp;w=828&amp;amp;q=75
                          828w,
                          /_next/image/?url=%2Fnet-shape-large.png&amp;amp;w=1080&amp;amp;q=75
                          1080w,
                          /_next/image/?url=%2Fnet-shape-large.png&amp;amp;w=1200&amp;amp;q=75
                          1200w,
                          /_next/image/?url=%2Fnet-shape-large.png&amp;amp;w=1920&amp;amp;q=75
                          1920w,
                          /_next/image/?url=%2Fnet-shape-large.png&amp;amp;w=2048&amp;amp;q=75
                          2048w,
                          /_next/image/?url=%2Fnet-shape-large.png&amp;amp;w=3840&amp;amp;q=75
                          3840w"
                          src="_next/image/index85c2.html?url=%2Fnet-shape-large.png&amp;amp;w=3840&amp;amp;q=75"
                          decoding="async" data-nimg="fill"
                          style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                          class="opacity-70 mix-blend-screen" loading="lazy"
                          /&gt;
                        </noscript>
                      </span>
                      <div className="bg-gradient-to-r absolute inset-y-0 w-[30%] from-[#09182C] to-transparent" />
                    </div>
                  </div>
                </div>
                <figure className="media flex-1x relative mx-auto h-full w-full max-w-[520px]  lg:mx-0  lg:pt-[50px]">
                  <div
                    style={{
                      opacity: 1,
                      transform: "translateY(150px) translateZ(0)"
                    }}
                  >
                    <div className=" lg:-ml-32">
                      <div
                        className="js-scroll fade-in-bottom"
                        style={{ opacity: 1 }}
                      >
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
                            marginBottom: "5%",
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
                              padding: 0,
                              paddingTop: "88.88888888888889%"
                              
                            }}
                          />
                          <img
                            draggable="false"
                            alt=""
                            src="_next/img/decentralised.png"
                            decoding="async"
                            data-nimg="responsive"
                            className=""
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: "20px",
                              right: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "95%",
                              maxWidth: "95%",
                              minHeight: "95%",
                              maxHeight: "95%"
                            }}
                           
                          />
                          <noscript>
                            &lt;img draggable="false" alt="" sizes="100vw"
                            srcSet="/_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fhome-usp-02.png&amp;amp;w=640&amp;amp;q=75
                            640w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fhome-usp-02.png&amp;amp;w=750&amp;amp;q=75
                            750w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fhome-usp-02.png&amp;amp;w=828&amp;amp;q=75
                            828w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fhome-usp-02.png&amp;amp;w=1080&amp;amp;q=75
                            1080w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fhome-usp-02.png&amp;amp;w=1200&amp;amp;q=75
                            1200w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fhome-usp-02.png&amp;amp;w=1920&amp;amp;q=75
                            1920w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fhome-usp-02.png&amp;amp;w=2048&amp;amp;q=75
                            2048w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fhome-usp-02.png&amp;amp;w=3840&amp;amp;q=75
                            3840w"
                            src="_next/image/index36f6.html?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fhome-usp-02.png&amp;amp;w=3840&amp;amp;q=75"
                            decoding="async" data-nimg="responsive"
                            style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                            class="" loading="lazy" /&gt;
                          </noscript>
                        </span>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      data-layouts="two_column_introduction,grid_cards"
      data-background="none"
      className=" overflow-hidden  relative  py-12  md:py-24  "
    >
      <div className="section-background pointer-events-none absolute inset-0 ">
        <div style={{ opacity: 1 }} />
      </div>
      <div className="relative space-y-8 xl:space-y-10 ">
        <div className="container">
          <div className="flex flex-col-reverse justify-between gap-y-16 md:flex-row md:gap-y-0">
            <div className="md:max-w-[370px] lg:max-w-[510px]">
              <div className="hidden md:mb-20 md:block">
                <div className="relative z-10 container">
                  <div className="text-center  lg:text-left ">
                    <div className="" style={{ opacity: 1 }}>
                      <h2 className="text-content-heading t-48 leading-[1.15]  text-black js-scroll fade-in">
                      Lorem ipsum dolor 
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html: "\n                  \n\n                 "
                }}
              />
              <style
                dangerouslySetInnerHTML={{
                  __html: "\n                 \n\n\n              "
                }}
              />
              <div className="md:flex md:space-y-10">
                <div className="grid grid-cols-2 gap-4 md:hidden">
                  <div className=" h-[3px] bg-black">
                    <div className="h-full bg-green" style={{ width: 0 }} />
                  </div>
                  <div className=" h-[3px] bg-black" />
                </div>
                <div className="flex flex-col md:space-y-10">
                  <div className="relative block md:pl-11">
                    <button type="button" className="block overflow-hidden">
                      <div className="">
                        <div
                          className="t-18 mt-8 min-h-[200px] text-center md:text-left lg:min-h-fit"
                          style={{ opacity: 1 }}
                        >
                          <label htmlFor="state">
                            <h2 className="button t-24 md:text-left">
                            Lorem ipsum 
                            </h2>
                          </label>
                          
                          <div className="content" id="c11">
                            <div className="inner t-17 pt-2 font-medium text-darkGrey md:text-left">
                            Lorem ipsum dolor sit amet consectetur. Augue ac
                            eget enim posuere eget Lorem ipsum dolor sit amet consectetur. Augue ac
                            eget enim posuere eget
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" md:block">
                        <div className="absolute inset-y-0 left-0 hidden w-1 bg-black md:block progress">
                          <div
                            className="w-full bg-green progress-bar"
                            style={{ height: 0 }}
                          />
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="relative block md:pl-11">
                    <button type="button" className="block overflow-hidden">
                      <div className="md:hidden" />
                      <div className="hidden md:block">
                        <div className="absolute inset-y-0 left-0 hidden w-1 bg-black md:block progress1">
                          <div
                            className="w-full bg-green progress-bar1"
                            style={{ height: 0 }}
                          />
                        </div>
                        <div
                          className="t-18 mt-8 min-h-[200px] text-center md:text-left lg:min-h-fit"
                          style={{ opacity: 1 }}
                        >
                          <label htmlFor="state1">
                            <h2 className="button t-24 md:text-left">
                            Lorem ipsum 
                            </h2>
                          </label>
                          
                          <div className="content1" id="c22">
                            <div className="inner1 t-17 pt-2 font-medium text-darkGrey md:text-left">
                            Lorem ipsum dolor sit amet consectetur. Augue ac
                            eget enim posuere eget Lorem ipsum dolor sit amet consectetur. Augue ac
                            eget enim posuere eget
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex-1 md:min-h-[588px] md:max-w-[598px]">
              <div className="absolute top-0 left-0 right-0 h-[50px] w-full bg-gradient-to-b from-lightGrey" />
              <div className="absolute bottom-0 left-0 right-0 h-[50px] w-full bg-gradient-to-t from-lightGrey" />
              <div className="absolute top-0 bottom-0 w-[50px] bg-gradient-to-r from-lightGrey" />
              <div className="absolute top-0 right-0 bottom-0 w-[50px] bg-gradient-to-l from-lightGrey" />
             <img src="_next/img/digital-twins.png"/>
            </div>
          </div>
        </div>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html: "\n                \n            "
          }}
        />





<section
  data-layouts="two_col_text_media"
  data-background="none"
  className=" overflow-hidden  relative  py-12  md:py-24  "
>
  <div className="section-background pointer-events-none absolute inset-0 ">
    <div style={{ opacity: 1 }} />
  </div>
  <div
    className="relative
      space-y-8 xl:space-y-10 "
  >
    <div className=" ">
      <div
        className="bg-black
      relative overflow-hidden px-4 py-16 md:px-8 md:pt-14  lg:px-0
      lg:pb-0 !pb-0 lg:!pt-0  "
      >
        <div
          className=" justify-between  flex
           lg:flex-row !flex-col
          lg:!flex-row"
        >
          <div
            className="mx-auto h-full w-full lg:max-w-
          [50%] lg:pr-4 xl:pr-0"
          >
            <div className="content-container">
              <div className="relative z-10 container">
                <div
                  className="text-center
          lg:text-left mx-auto lg:mx-0 text-area2"
                  id="trysharepass"
                >
                  <div
                    className="flex justify-center lg:justify-start font-bold
          t-13 t-subheading  text-white mb-4 items-center
          tracking-widest"
          style={{margin:"50px 10px 0px 0px"}}
                  >
                    <div
                      className="mr-2
          inline-block flex-none js-scroll fade-in" 
                    >
                      <svg
                        width={12}
                        height={11}
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          clipPath="url
          (#clip0_152_55743)"
                        >
                          <path
                            d="M11.0953 8.24996L6.33215
          11L1.56901 8.24996L1.56901
          2.74996L6.33215 -4.43795e-05L11.0953 2.74996L11.0953
          8.24996Z"
                            fill="#7829F9"
                          />
                          <path
                            d="M6.31553
          11.0058L1.57704 8.27002L1.55364 2.76855L6.3227
          5.52197L6.31553 11.0058Z"
                            fill="#02F3A2"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_152_55743">
                            <rect
                              width={11}
                              height={11}
                              fill="white"
                              transform="matrix(-1 0 0 1 11.8322 0)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <h6
                      className=" inline-block
          text-center uppercase lg:text-left"
                    >
                      SHAREPASS
                    </h6>
                  </div>
                  <div className="" style={{ opacity: 1 }}>
                    <h3
                      className="text-content-heading t-64-heading font-semibold
          text-white js-scroll fade-in"
                    >
                      Try Sharepass!
                    </h3>
                    <br/>
                  </div>
                  <div className="btn_switch" style={{ color: "white", border: "2px solid white",width:"3%",padding:"5px 0px 0px 5px",borderRadius:"30px" }}>
                    <button className="Show"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16"> <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/> </svg></button>
                    <button className="Hide"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16"> <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/> </svg></button>
                  </div>
                  <div
                    className="bg-black"
                    id="feedback-form"
                    style={{ width: "65%" }}
                  >
                    <div id="target" style={{ display: "none" }}>
                      <form method="post">
                        <textarea rows={4} cols={15} defaultValue={""}  id="id_msg" placeholder="A martini. Shaken, not stirred."/>
                        
                        <button
                          className="hidden w-full bg-green    text-black duration-200 hover:bg-white hover:text-black  md:block"
                          type="button"
                          id="btn_msg"
                          style={{ display: "block" }}
                        >
                          Sharepass It
                        </button>
                      </form>
                    </div>
                    <div id="target1">
                      <form method="post" action="">
                        <input
                          type="password"
                          name="password"
                          autoComplete="current-password"
                          required=""
                          placeholder="Elementary, my dear Watson."
                          id="id_password"
                          style={{ marginBottom: 15 }}
                        />
                        
                        <button
                          className="hidden w-full bg-green    text-black duration-200 hover:bg-white hover:text-black  md:block"
                          type="button"
                          id="btn_password"
                          style={{ display: "block" }}
                        >
                          Sharepass It
                        </button>
                      </form>
                    </div>
                    <div id="target2" style={{ display: "none" }}>
                      <div className="group">
                        <span className="label" style={{ fontSize: 30 }}>
                          Secret
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                        </span>
                        <button className="pass  w-full bg-green    text-black duration-200 hover:bg-white hover:text-black  ">
                          Password
                        </button>
                        <button className="msg  w-full bg-green    text-black duration-200 hover:bg-white hover:text-black  ">
                          Message
                        </button>
                      </div>
                      <div className="group">
                        <span className="label" style={{ fontSize: 30 }}>
                          Time to live &nbsp;&nbsp;&nbsp;&nbsp;:
                        </span>
                        <input
                          className="tl"
                          type="text"
                          name="password"
                          required=""
                        />
                        <select>
                          <option>123</option>
                        </select>
                      </div>
                      <div className="group">
                        <span className="label" style={{ fontSize: 30 }}>
                          One-time link &nbsp;&nbsp;:
                        </span>
                        <input type="checkbox" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 w-full font-semibold   ">
                    <div
                      className="w-full flex-grow items-center justify-center gap-y-6
          space-y-4 sm:space-x-4 md:flex md:w-auto md:gap-y-0
          md:space-y-0 md:space-x-5 lg:space-x-8 lg:justify-start "
                    >
                      <form
                        action=""
                        method="post"
                        target="_blank"
                        className=" flex
          flex-grow flex-row items-center justify-between gap-3 border-
          [1px] border-darkGrey p-[6px] pl-6 sm:pl-7"
                      >
                        <input
                          type="email"
                          id="mce-EMAIL"
                          required=""
                          name="EMAIL"
                          placeholder=""
                          className="t-16 sm:py-3t w-full bg-transparent
          py-2 font-medium leading-[1.5] tracking-
          [0.04em] text-darkGrey outline-none autofill:!bg-black"
                          defaultValue=""
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style type="text/css" dangerouslySetInnerHTML={{ __html: "" }} />
          <div className="absolute inset-x-0 bottom-0 " />
          <figure className="media  ">
            <div
              style={{ opacity: 1, transform: "translateY(0) translateZ(0)" }}
              id="img_anim1"
            >
              <div
                className="lg:-mr-4 js-scroll
              fade-in-bottom"
              >
                <div style={{ opacity: 1 }}>
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
                        padding: 0,
                       
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </div>
</section>





        <div className="container">
          <ul className="grid grid-cols-1 gap-x-9 gap-y-6 md:grid-cols-2 md:gap-x-9 md:gap-y-9 lg:grid-cols-3">
            <a
              href="case-study"
              id="div1"
              target="_blank"
              className="relative overflow-hidden bg-white outline outline-8 outline-transparent transition-all duration-200 ease-in hover:outline-green hover:delay-[1800ms] md:pb-[148px]"
            >
              <div className="w-[280px] md:w-auto">
                <video
                  src="https://bosonwp.wpengine.com/wp-content/uploads/2022/08/explore-offers.webm"
                  autoPlay
                  muted
                  loop
                />
              </div>
              <div
                className="absolute inset-0 bottom-0 top-full  h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                style={{}}
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="flex min-h-[82px] flex-col justify-end">
                      <h3 className="t-28-heading max-w-[270px] leading-[1.15]">
                        Case Study
                      </h3>
                    </div>
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
              <div
                id="div3"
                className="absolute inset-0 bottom-0 top-full  h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10s"
                style={{}}
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div
                      className="flex min-h-[82px] flex-col justify-end"
                      style={{ marginTop: 20 }}
                    >
                      <h3 className="t-28-heading max-w-[270px] leading-[1.15]">
                      Lorem ipsum 
                      </h3>
                      <h5 style={{ marginTop: 20 }}>
                      Lorem ipsum dolor sit amet consectetur. Augue ac
                            eget enim posuere eget
                      </h5>
                    </div>
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
              id="div4"
              href=""
              target="_blank"
              className="relative overflow-hidden bg-white outline outline-8 outline-transparent transition-all duration-200 ease-in hover:outline-green hover:delay-[1800ms] md:pb-[148px]"
            >
              <div className="w-[280px] md:w-auto">
                <video
                  src="https://bosonwp.wpengine.com/wp-content/uploads/2022/09/Create-Redeemable-NFTs.webm"
                 autoPlay
                 muted
                 loop
                />
              </div>
              <div
                className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                style={{}}
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="flex min-h-[82px] flex-col justify-end">
                      <h3 className="t-28-heading max-w-[270px] leading-[1.15]">
                      Lorem ipsum dolor 
                      </h3>
                    </div>
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
              <div
                id="div5"
                className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                style={{}}
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="flex min-h-[82px] flex-col justify-end">
                      <h3 className="t-28-heading max-w-[270px] leading-[1.15]">
                      Lorem ipsum dolor 
                      </h3>
                      <h5 style={{ marginTop: 20 }}>
                      Lorem ipsum dolor sit amet consectetur. Augue ac
                            eget enim posuere eget
                      </h5>
                    </div>
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
              id="div6"
              target=""
              className="relative overflow-hidden bg-white outline outline-8 outline-transparent transition-all duration-200 ease-in hover:outline-green hover:delay-[1800ms] md:pb-[148px]"
            >
              <div className="w-[280px] md:w-auto">
                <video
                  src="https://bosonwp.wpengine.com/wp-content/uploads/2022/08/build-with-boson.webm"
                 autoPlay
                 muted
                 loop
                />
              </div>
              <div
                className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                style={{ transform: "translateY(-148px) translateZ(0)" }}
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="flex min-h-[82px] flex-col justify-end">
                      <h3 className="t-28-heading max-w-[270px] leading-[1.15]">
                      Lorem ipsum dolor
                      </h3>
                    </div>
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
              <div
                id="div7"
                className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                style={{}}
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="flex min-h-[82px] flex-col justify-end">
                      <h3 className="t-28-heading max-w-[270px] leading-[1.15]">
                      Lorem ipsum dolor 
                      </h3>
                      <h5 style={{ marginTop: 20 }}>
                      Lorem ipsum dolor sit amet consectetur. Augue ac
                            eget enim posuere eget
                      </h5>
                    </div>
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
    </section>




    
    <section
      data-layouts="two_col_text_media"
      data-background="none"
      className=" overflow-hidden  relative  py-12  md:py-24  "
    >
      <div className="section-background pointer-events-none absolute inset-0 ">
        <div style={{ opacity: 1 }} />
      </div>
      <div className="relative space-y-8 xl:space-y-10 ">
        <div className=" container">
          <div className="bg-black   border-b-[1px] border-darkGrey  relative overflow-hidden px-4 py-16 md:px-8 md:pt-14  lg:px-0 lg:pb-0 undefined lg:h-[640px] lg:min-h-[640px] lg:!pt-0 ">
            <div className="relative flex min-h-full items-center">
              <div className="w-full items-center justify-between gap-10 flex flex-col-reverse space-y-8 lg:space-y-0  lg:flex-row-reverse ">
                <div className="mx-auto h-full w-full lg:max-w-[50%] lg:pr-4 xl:pr-0 undefined xl:max-w-[510px] text-white ">
                  <div className="absolute inset-y-0 left-[48%] z-10 hidden w-[10%] -translate-x-1/2 lg:block">
                    <div className="h-full w-full bg-gradient-to-l from-black" />
                  </div>
                  <div className="content-container">
                    <div className="relative z-10 container">
                      <div className="text-center  lg:text-left mx-auto lg:mx-0 ">
                        <div
                          className="flex justify-center lg:justify-start font-bold t-13 t-subheading  mb-4 items-center tracking-widest"
                          style={{ opacity: 1 }}
                        >
                          <div className="mr-2 inline-block flex-none js-scroll fade-in">
                            <svg
                              width={12}
                              height={11}
                              viewBox="0 0 12 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_152_55743)">
                                <path
                                  d="M11.0953 8.24996L6.33215 11L1.56901 8.24996L1.56901 2.74996L6.33215 -4.43795e-05L11.0953 2.74996L11.0953 8.24996Z"
                                  fill="#7829F9"
                                />
                                <path
                                  d="M6.31553 11.0058L1.57704 8.27002L1.55364 2.76855L6.3227 5.52197L6.31553 11.0058Z"
                                  fill="#02F3A2"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_152_55743">
                                  <rect
                                    width={11}
                                    height={11}
                                    fill="white"
                                    transform="matrix(-1 0 0 1 11.8322 0)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <h6 className=" inline-block text-center uppercase lg:text-left">
                            Home
                          </h6>
                        </div>
                        <div className="" style={{ opacity: 1 }}>
                          <h3 className="text-content-heading t-48 leading-[1.15] font-semibold text-white js-scroll fade-in">
                          Lorem ipsum<br/> dolor sit amet
                          </h3>
                        </div>
                        <div
                          className="mt-6 font-medium wsyiwyg !text-white t-20"
                          style={{ opacity: 1 }}
                        >
                          <p className="js-scroll fade-in">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </p>
                        </div>
                        <div className="mt-8 w-full font-semibold   ">
                          <div className="w-full flex-grow items-center justify-center gap-y-6  space-y-4 sm:space-x-4 md:flex md:w-auto md:gap-y-0 md:space-y-0 md:space-x-5 lg:space-x-8 lg:justify-start ">
                            <a
                              href=""
                              className="group inline-block shrink-0"
                              target=""
                            >
                              <div className="flex items-center gap-x-3 font-semibold false">
                                <span className="underline decoration-transparent transition duration-200 text-white group-hover:decoration-white">
                                  Learn more
                                </span>
                                <span className="m-0 false text-white group-hover:decoration-white transition-transform duration-200 group-hover:translate-x-2">
                                  <svg
                                    width={30}
                                    height={30}
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width={30}
                                      height={30}
                                      fill="#02F3A2"
                                    />
                                    <path
                                      d="M14.8125 8.1875C15 8.02083 15.1771 8.02083 15.3438 8.1875L21.875 14.75C22.0625 14.9167 22.0625 15.0833 21.875 15.25L15.3438 21.8125C15.1771 21.9792 15 21.9792 14.8125 21.8125L14.1875 21.1875C14.125 21.125 14.0938 21.0417 14.0938 20.9375C14.0938 20.8333 14.125 20.7396 14.1875 20.6562L19.0312 15.8125H8.375C8.125 15.8125 8 15.6875 8 15.4375V14.5625C8 14.3125 8.125 14.1875 8.375 14.1875H19.0312L14.1875 9.34375C14.0208 9.15625 14.0208 8.97917 14.1875 8.8125L14.8125 8.1875Z"
                                      fill="#09182C"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="media flex-1x w-full lg:min-w-[50%] mx-auto max-w-[588px] lg:!min-w-max  
			lg:!min-w-0
			"
                >
                  <img
                          src="_next/img/Infrastructure-globe_public-infra.png"
                         
                          
                        />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      data-layouts="two_col_text_media"
      data-background="none"
      className=" overflow-hidden  relative  py-12  md:py-24  "
    >
      <div className="section-background pointer-events-none absolute inset-0 ">
        <div style={{ opacity: 1 }} />
      </div>
      <div className="relative space-y-8 xl:space-y-10 ">
        <div className=" ">
          <div className="bg-purple   relative overflow-hidden px-4 py-16 md:px-8 md:pt-14  lg:px-0 lg:pb-0 !pb-0 lg:!pt-0  ">
            <div className="absolute top-0 left-0 min-h-[120px] min-w-[120px] md:min-h-[200px] md:min-w-[200px] lg:min-h-[100px] lg:min-w-[100px] xl:min-h-[200px] xl:min-w-[200px]">
              <svg
                viewBox="0 0 204 207"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#pixel-top_svg__a)" fill="#02F3A2">
                  <path
                    opacity="0.3"
                    d="M-417.839 206.381v-457.904H40.065v457.904z"
                  />
                  <path
                    opacity="0.4"
                    d="M-437.042 165.209v-457.541H80.86v457.541z"
                  />
                  <path
                    opacity="0.5"
                    d="M-437.042 124.401V-333.14h558.948v457.541z"
                  />
                  <path
                    opacity="0.6"
                    d="M-456.356 83.591v-457.54h619.31V83.59z"
                  />
                  <path
                    opacity="0.7"
                    d="M-456.356 42.782v-457.54H204v457.54z"
                  />
                </g>
                <defs>
                  <clipPath id="pixel-top_svg__a">
                    <path
                      fill="#fff"
                      transform="matrix(0 -1 -1 0 204 206.381)"
                      d="M0 0h206.381v204H0z"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="container flex min-h-full items-center">
              <div className="w-full items-center justify-between gap-20 flex flex-col-reverse space-y-8 lg:space-y-0  lg:flex-row !flex-col lg:!flex-row">
                <div className="mx-auto h-full w-full lg:max-w-[50%] lg:pr-4 xl:pr-0 undefined xl:max-w-[485px] text-white lg:pb-5 xl:pb-0">
                  <div className="content-container">
                    <div className="relative z-10 container">
                      <div className="text-center  lg:text-left mx-auto lg:mx-0 ">
                        <div
                          className="flex justify-center lg:justify-start font-bold t-13 t-subheading  text-white mb-4 items-center tracking-widest"
                          style={{ opacity: 1 }}
                        >
                          <div className="mr-2 inline-block flex-none js-scroll fade-in">
                            <svg
                              width={11}
                              height={11}
                              viewBox="0 0 11 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_2153_465144)">
                                <path
                                  d="M0.737305 2.74998L5.50044 -1.68422e-05L10.2636 2.74998L10.2636 8.24998L5.50044 11L0.737305 8.24998L0.737305 2.74998Z"
                                  fill="#09182C"
                                />
                                <path
                                  d="M5.51741 -0.00557395L10.2559 2.73019L10.2793 8.23166L5.51024 5.47824L5.51741 -0.00557395Z"
                                  fill="#02F3A2"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_2153_465144">
                                  <rect
                                    width={11}
                                    height={11}
                                    fill="white"
                                    transform="matrix(1 0 0 -1 0 11)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <h6 className=" inline-block text-center uppercase lg:text-left">
                            Home
                          </h6>
                        </div>
                        <div className="" style={{ opacity: 1 }}>
                          <h3 className="text-content-heading t-64-heading font-semibold text-white js-scroll fade-in">
                          Meet The Team 
                          </h3>
                        </div>
                        <div
                          className="mt-6 font-medium wsyiwyg !text-white t-20"
                          style={{ opacity: 1 }}
                        >
                          <p className="js-scroll fade-in">
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </p>
                        </div>
                        <div className="mt-8 w-full font-semibold   ">
                          <div className="w-full flex-grow items-center justify-center gap-y-6  space-y-4 sm:space-x-4 md:flex md:w-auto md:gap-y-0 md:space-y-0 md:space-x-5 lg:space-x-8 lg:justify-start ">
                            <a
                              href=""
                              className="group inline-block shrink-0"
                              target=""
                            >
                              <div className="flex items-center gap-x-3 font-semibold false js-scroll fade-in">
                                <span className="underline decoration-transparent transition duration-200 text-white group-hover:decoration-white">
                                  Start building
                                </span>
                                <span className="m-0 false text-white group-hover:decoration-white transition-transform duration-200 group-hover:translate-x-2">
                                  <svg
                                    width={30}
                                    height={30}
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width={30}
                                      height={30}
                                      fill="#02F3A2"
                                    />
                                    <path
                                      d="M14.8125 8.1875C15 8.02083 15.1771 8.02083 15.3438 8.1875L21.875 14.75C22.0625 14.9167 22.0625 15.0833 21.875 15.25L15.3438 21.8125C15.1771 21.9792 15 21.9792 14.8125 21.8125L14.1875 21.1875C14.125 21.125 14.0938 21.0417 14.0938 20.9375C14.0938 20.8333 14.125 20.7396 14.1875 20.6562L19.0312 15.8125H8.375C8.125 15.8125 8 15.6875 8 15.4375V14.5625C8 14.3125 8.125 14.1875 8.375 14.1875H19.0312L14.1875 9.34375C14.0208 9.15625 14.0208 8.97917 14.1875 8.8125L14.8125 8.1875Z"
                                      fill="#09182C"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html: "\n                     \n                    "
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 " />
                <figure className="media flex-1x relative mx-auto h-full w-full max-w-[520px] lg:mx-0 lg:pt-20 ">
                  <div
                    style={{
                      opacity: 1,
                      transform: "translateY(0) translateZ(0)"
                    }}
                    id="img_anim1"
                  >
                    <div className="lg:-mr-4 js-scroll fade-in-bottom">
                      <div style={{ opacity: 1 }}>
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
                              padding: 0,
                              paddingTop: "106.25%"
                            }}
                          />
                          <img
                            draggable="false"
                            alt=""
                            src=""
                            decoding="async"
                            data-nimg="responsive"
                            className=""
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
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
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      data-layouts="text_content,two_columns_vertical_slider,two_columns_cards"
      data-background="none"
      className="   relative  py-12  md:py-24   !pt-0 !overflow-visible"
    >
      <div className="section-background pointer-events-none absolute inset-0 ">
        <div style={{ opacity: 1 }} />
      </div>
      <div className="relative space-y-8 xl:space-y-20 ">
        <div className="relative z-10 container">
          <div className="text-center  mx-auto max-w-[900px] ">
            <div
              className="mx-auto inline-block justify-center font-bold t-13 t-subheading  mb-4 items-center tracking-widest"
              style={{ opacity: 1 }}
            >
              <div className="mr-2 inline-block flex-none">
                <svg
                  width={12}
                  height={11}
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_152_55743)">
                    <path
                      d="M11.0953 8.24996L6.33215 11L1.56901 8.24996L1.56901 2.74996L6.33215 -4.43795e-05L11.0953 2.74996L11.0953 8.24996Z"
                      fill="#7829F9"
                    />
                    <path
                      d="M6.31553 11.0058L1.57704 8.27002L1.55364 2.76855L6.3227 5.52197L6.31553 11.0058Z"
                      fill="#02F3A2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_152_55743">
                      <rect
                        width={11}
                        height={11}
                        fill="white"
                        transform="matrix(-1 0 0 1 11.8322 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h6 className=" inline-block text-center uppercase mx-auto md:text-center">
                Home
              </h6>
            </div>
            <div className="mx-auto" style={{ opacity: 1 }}>
              <h3 className="text-content-heading mx-auto text-center t-48 leading-[1.15] font-semibold text-black ">
                {" "}
                "Lorem ipsum dolor sit amet,
              </h3>
            </div>
            <div
              className="mt-6 font-medium wsyiwyg mx-auto !text-darkGrey t-20 js-scroll fade-in"
              style={{ opacity: 1 }}
            >
              <p>
                <span style={{ fontWeight: 400 }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>{" "}
                "Lorem ipsum dolor sit amet, consectetur 
              </p>
            </div>
            <div className="mt-8 w-full font-semibold mx-auto  flex justify-center">
              <div className="w-full flex-grow items-center justify-center gap-y-6  space-y-4 sm:space-x-4 md:flex md:w-auto md:gap-y-0 md:space-y-0 md:space-x-5 lg:space-x-8 md:justify-center ">
                <a href="" className="group inline-block shrink-0" target="">
                  <div className="flex items-center gap-x-3 font-semibold false">
                    <span className="underline decoration-transparent transition duration-200 text-black group-hover:decoration-purple">
                      Learn more
                    </span>
                    <span className="m-0 false text-black group-hover:decoration-purple transition-transform duration-200 group-hover:translate-x-2">
                      <svg
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width={30}
                          height={30}
                          transform="matrix(1 0 0 -1 0 30)"
                          fill="#7829F9"
                        />
                        <path
                          d="M14.8125 21.8125C15 21.9792 15.1771 21.9792 15.3438 21.8125L21.875 15.25C22.0625 15.0833 22.0625 14.9167 21.875 14.75L15.3438 8.1875C15.1771 8.02083 15 8.02083 14.8125 8.1875L14.1875 8.8125C14.125 8.875 14.0938 8.95833 14.0938 9.0625C14.0938 9.16667 14.125 9.26042 14.1875 9.34375L19.0312 14.1875H8.375C8.125 14.1875 8 14.3125 8 14.5625V15.4375C8 15.6875 8.125 15.8125 8.375 15.8125H19.0312L14.1875 20.6562C14.0208 20.8438 14.0208 21.0208 14.1875 21.1875L14.8125 21.8125Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-lightGrey" id="scl1">
          <div
            className="container flex flex-col justify-between gap-10 md-large:mt-12 md-large:flex-row lg:mt-32"
            id="scl2"
          >
            <div
              className="z-[20] mx-auto w-full max-w-[513px] md:max-w-[588px] md-large:relative md-large:z-0 md-large:mx-0  lg:sticky xl:max-w-[600px] bg-lightGrey"
              id="scl3"
            >
              <div
                className="sticky inset-y-0 top-[10rem] left-0 z-[20] mx-auto aspect-[720/720] w-full max-w-[300px] first-line:max-h-[300px] sm:max-h-[720px] md:max-w-[400px] md:bg-transparent md-large:z-0 md-large:mx-0 xl:max-w-[600px]"
                id="scl4"
              >
                <div
                  className="relative h-full w-full xxl:ml-[-80px] xxl:w-[104%]"
                  id="scl5"
                >
                  <div className="absolute top-[-20px] bottom-[-20px] h-full w-full bg-lightGrey md-large:hidden" />
                  <div
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(241,243,249,1) 0%, rgba(241,243,249,0) 100%)"
                    }}
                    className="absolute bottom-[-34px] h-[50px] w-full bg-lightGrey md-large:hidden"
                  />
                  <div
                    className="swiper max-h-[300px] max-w-[300px] sm:max-h-[720px] md:max-w-[400px] xl:max-w-[600px]"
                    id="scl6"
                  >
                    <div className="swiper-wrapper" id="scl7">
                      <div id="c1" className="swiper-slide aspect-square">
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
                              padding: 0,
                              paddingTop: "100%"
                            }}
                          />
                          <img
                            draggable="false"
                            alt=""
                            src="_next/img/gov.png"
                            decoding="async"
                            data-nimg="responsive"
                            className=""
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
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
                          <noscript>
                            <img draggable="false" alt="" sizes="100vw"
                            srcSet="/_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fgovernance.png&amp;amp;w=640&amp;amp;q=75
                            640w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fgovernance.png&amp;amp;w=750&amp;amp;q=75
                            750w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fgovernance.png&amp;amp;w=828&amp;amp;q=75
                            828w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fgovernance.png&amp;amp;w=1080&amp;amp;q=75
                            1080w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fgovernance.png&amp;amp;w=1200&amp;amp;q=75
                            1200w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fgovernance.png&amp;amp;w=1920&amp;amp;q=75
                            1920w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fgovernance.png&amp;amp;w=2048&amp;amp;q=75
                            2048w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fgovernance.png&amp;amp;w=3840&amp;amp;q=75
                            3840w"
                            src="_next/image/index948a.html?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fgovernance.png&amp;amp;w=3840&amp;amp;q=75"
                            decoding="async" data-nimg="responsive"
                            style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                            class="" loading="lazy"/>
                          </noscript>
                        </span>
                      </div>
                      <div id="c2" className="swiper-slide aspect-square">
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
                              padding: 0,
                              paddingTop: "100%"
                            }}
                          />
                          <img
                            draggable="false"
                            alt=""
                            src="_next/img/fee.png"
                            decoding="async"
                            data-nimg="responsive"
                            className=""
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
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
                          <noscript>
                            <defaultimg draggable="false" alt="" sizes="100vw"
                            srcSet="/_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Ffees.png&amp;amp;w=640&amp;amp;q=75
                            640w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Ffees.png&amp;amp;w=750&amp;amp;q=75
                            750w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Ffees.png&amp;amp;w=828&amp;amp;q=75
                            828w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Ffees.png&amp;amp;w=1080&amp;amp;q=75
                            1080w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Ffees.png&amp;amp;w=1200&amp;amp;q=75
                            1200w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Ffees.png&amp;amp;w=1920&amp;amp;q=75
                            1920w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Ffees.png&amp;amp;w=2048&amp;amp;q=75
                            2048w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Ffees.png&amp;amp;w=3840&amp;amp;q=75
                            3840w"
                            src="_next/image/index3f19.html?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2Ffees.png&amp;amp;w=3840&amp;amp;q=75"
                            decoding="async" data-nimg="responsive"
                            style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                            class="" loading="lazy"/>
                          </noscript>
                        </span>
                      </div>
                      <div id="c3" className="swiper-slide aspect-square">
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
                              padding: 0,
                              paddingTop: "100%"
                            }}
                          />
                          <img
                            draggable="false"
                            alt=""
                            src="_next/img/incent.png"
                            decoding="async"
                            data-nimg="responsive"
                            className=""
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
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
                          <noscript>
                            <img draggable="false" alt="" sizes="100vw"
                            srcSet="/_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2FToken.png&amp;amp;w=640&amp;amp;q=75
                            640w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2FToken.png&amp;amp;w=750&amp;amp;q=75
                            750w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2FToken.png&amp;amp;w=828&amp;amp;q=75
                            828w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2FToken.png&amp;amp;w=1080&amp;amp;q=75
                            1080w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2FToken.png&amp;amp;w=1200&amp;amp;q=75
                            1200w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2FToken.png&amp;amp;w=1920&amp;amp;q=75
                            1920w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2FToken.png&amp;amp;w=2048&amp;amp;q=75
                            2048w,
                            /_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2FToken.png&amp;amp;w=3840&amp;amp;q=75
                            3840w"
                            src="_next/image/index1094.html?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F08%2FToken.png&amp;amp;w=3840&amp;amp;q=75"
                            decoding="async" data-nimg="responsive"
                            style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                            class="" loading="lazy"/>
                          </noscript>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" " id="scrol1">
              <div className="md-large:space-y-96 md-large:pt-[70px] xl:pt-44 xl:pb-44">
                <section id="sec1">
                  <div
                    id="chapter1"
                    className="relative text-center md-large:text-left"
                  >
                    <h2 className="t-28 mb-6 font-semibold transition-opacity duration-200 false">
                    "Gov
                    </h2>
                    <div className="t-18 font-medium  transition-opacity duration-200 md-large:max-w-[416px] false text-darkGrey">
                      {" "}
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </section>
                <section id="sec2">
                  <div
                    id="chapter2"
                    className="relative text-center md-large:text-left"
                  >
                    <h2 className="t-28 mb-6 font-semibold transition-opacity duration-200 opacity-30">
                      Fees
                    </h2>
                    <div className="t-18 font-medium  transition-opacity duration-200 md-large:max-w-[416px] opacity-30 text-darkGrey">
                      {" "}
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </section>
                <section id="sec3">
                  <div
                    id="chapter3"
                    className="relative text-center md-large:text-left"
                  >
                    <h2 className="t-28 mb-6 font-semibold transition-opacity duration-200 opacity-30">
                      Task
                    </h2>
                    <div className="t-18 font-medium  transition-opacity duration-200 md-large:max-w-[416px] opacity-30 text-darkGrey">
                      {" "}
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="hidden md-large:block">
              <div className="sticky top-[5rem] flex flex-col items-center space-y-8 pt-72 pb-36 ">
                <div className="h-2 w-2 transition-colors duration-200 bg-green "></div>
                <div className="h-2 w-2 transition-colors duration-200 bg-purple " />
                <div className="h-2 w-2 transition-colors duration-200 bg-purple " />
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-black py-12 lg:py-[128px]">
          <div className="pointer-events-none absolute bottom-0 left-0 md:max-w-[30%]">
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
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20
                xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271008%27%20height=%27530%27/%3e"
                />
              </span>
              <img
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                decoding="async"
                data-nimg="intrinsic"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
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
              <noscript>
                &lt;img
                srcSet="/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fnet-shape-with-colour.67d646ab.png&amp;amp;w=1080&amp;amp;q=75
                1x,
                /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fnet-shape-with-colour.67d646ab.png&amp;amp;w=2048&amp;amp;q=75
                2x"
                src="_next/image/index8d83.html?url=%2F_next%2Fstatic%2Fmedia%2Fnet-shape-with-colour.67d646ab.png&amp;amp;w=2048&amp;amp;q=75"
                decoding="async" data-nimg="intrinsic"
                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                loading="lazy" /&gt;
              </noscript>
            </span>
          </div>
          <div className="container relative z-10">
            <div className="justify-between gap-x-10 lg:flex">
              <div className="mb-10 lg:mb-0 lg:max-w-[50%] xl:max-w-[510px]">
                <div className="top-[20%] lg:sticky lg:pb-20">
                  <div className="relative z-10 container">
                    <div className="text-center  lg:text-left mx-auto lg:mx-0 ">
                      <div
                        className="flex justify-center lg:justify-start font-bold t-13 t-subheading  text-white mb-4 items-center tracking-widest js-scroll fade-in"
                        style={{ opacity: 1 }}
                      >
                        <div className="mr-2 inline-block flex-none">
                          <svg
                            width={12}
                            height={11}
                            viewBox="0 0 12 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_152_55743)">
                              <path
                                d="M11.0953 8.24996L6.33215 11L1.56901 8.24996L1.56901 2.74996L6.33215 -4.43795e-05L11.0953 2.74996L11.0953 8.24996Z"
                                fill="#7829F9"
                              />
                              <path
                                d="M6.31553 11.0058L1.57704 8.27002L1.55364 2.76855L6.3227 5.52197L6.31553 11.0058Z"
                                fill="#02F3A2"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_152_55743">
                                <rect
                                  width={11}
                                  height={11}
                                  fill="white"
                                  transform="matrix(-1 0 0 1 11.8322 0)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <h6 className=" inline-block text-center uppercase lg:text-left">
                          Home
                        </h6>
                      </div>
                      <div className="" style={{ opacity: 1 }}>
                        <h3 className="text-content-heading t-48 leading-[1.15] font-semibold text-white js-scroll fade-in">
                        Lorem ipsum dolor sit
                        </h3>
                      </div>
                      <div
                        className="mt-6 font-medium wsyiwyg !text-white t-20"
                        style={{ opacity: 1 }}
                      >
                        <p className="js-scroll fade-in">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                      <div className="mt-8 w-full font-semibold  js-scroll fade-in ">
                        <div className="w-full flex-grow items-center justify-center gap-y-6  space-y-4 sm:space-x-4 md:flex md:w-auto md:gap-y-0 md:space-y-0 md:space-x-5 lg:space-x-8 lg:justify-start ">
                          <a
                            href="governance/index.html"
                            className="inline-block  w-full border-[2px] text-center transition-colors duration-200  bg-green border-transparent text-black hover:bg-white py-4 px-8  font-bold leading-none md:w-full md:max-w-[200px]  sm:w-auto undefined undefined"
                            target=""
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="space-y-4 lg:max-w-[588px] lg:space-y-8">
                <li className="z-10 flex w-full flex-col px-4 py-6 text-center md:p-8 lg:sticky lg:-bottom-[25%] lg:text-left xl:p-10 border-darkGrey border-2  bg-black text-white z-30 lg:-bottom-[25%]">
                  <div className="mb-3 flex flex-col-reverse items-center justify-center md:mb-6 lg:flex-row lg:items-start lg:justify-start">
                    <div className="h-16 w-16">
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
                            padding: 0,
                            paddingTop: "100%"
                          }}
                        />
                        <img
                          draggable="false"
                          alt=""
                          src="https://bosonwp.wpengine.com/wp-content/uploads/2022/08/trust.svg"
                          decoding="async"
                          data-nimg="responsive"
                          className=""
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
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
                        <noscript>
                          &lt;img draggable="false" alt="" sizes="100vw"
                          srcSet="https://bosonwp.wpengine.com/wp-content/uploads/2022/08/trust.svg
                          640w,
                          https://bosonwp.wpengine.com/wp-content/uploads/2022/08/trust.svg
                          750w,
                          https://bosonwp.wpengine.com/wp-content/uploads/2022/08/trust.svg
                          828w,
                          https://bosonwp.wpengine.com/wp-content/uploads/2022/08/trust.svg
                          1080w,
                          https://bosonwp.wpengine.com/wp-content/uploads/2022/08/trust.svg
                          1200w,
                          https://bosonwp.wpengine.com/wp-content/uploads/2022/08/trust.svg
                          1920w,
                          https://bosonwp.wpengine.com/wp-content/uploads/2022/08/trust.svg
                          2048w,
                          https://bosonwp.wpengine.com/wp-content/uploads/2022/08/trust.svg
                          3840w"
                          src="https://bosonwp.wpengine.com/wp-content/uploads/2022/08/trust.svg"
                          decoding="async" data-nimg="responsive"
                          style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                          class="" loading="lazy" /&gt;
                        </noscript>
                      </span>
                    </div>
                  </div>
                  <h3 className="t-24 mb-3 font-semibold md:mb-6">
                  Lorem ipsum dolor 
                  </h3>
                  <div className="t-18-small new-line-link font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </li>
                <li className="z-10 flex w-full flex-col px-4 py-6 text-center md:p-8 lg:sticky lg:-bottom-[25%] lg:text-left xl:p-10 border-darkGrey border-2  bg-black text-white z-20 lg:-bottom-[25%]">
                  <div className="mb-3 flex flex-col-reverse items-center justify-center md:mb-6 lg:flex-row lg:items-start lg:justify-start">
                    <div className="h-16 w-16">
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
                            padding: 0,
                            paddingTop: "100%"
                          }}
                        />
                        <img
                          draggable="false"
                          alt=""
                          src="https://bosonwp.wpengine.com/wp-content/uploads/2022/08/anyone-can-use.svg"
                          decoding="async"
                          data-nimg="responsive"
                          className=""
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
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
                        <noscript>
                          &lt;img draggable="false" alt="" sizes="100vw"
                          srcSet="https://bosonwp.wpengine.com/wp-content/uploads/2022/08/anyone-can-use.svg
                          640w,
                          https://bosonwp.wpengine.com/wp-content/uploads/2022/08/anyone-can-use.svg
                          750w,
                          https://bosonwp.wpengine.com/wp-content/uploads/2022/08/anyone-can-use.svg
                          828w,
                          https://bosonwp.wpengine.com/wp-content/uploads/2022/08/anyone-can-use.svg
                          1080w,
                          https://bosonwp.wpengine.com/wp-content/uploads/2022/08/anyone-can-use.svg
                          1200w,
                          https://bosonwp.wpengine.com/wp-content/uploads/2022/08/anyone-can-use.svg
                          1920w,
                          https://bosonwp.wpengine.com/wp-content/uploads/2022/08/anyone-can-use.svg
                          2048w,
                          https://bosonwp.wpengine.com/wp-content/uploads/2022/08/anyone-can-use.svg
                          3840w"
                          src="https://bosonwp.wpengine.com/wp-content/uploads/2022/08/anyone-can-use.svg"
                          decoding="async" data-nimg="responsive"
                          style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                          class="" loading="lazy" /&gt;
                        </noscript>
                      </span>
                    </div>
                  </div>
                  <h3 className="t-24 mb-3 font-semibold md:mb-6">
                  Lorem ipsum dolor 
                  </h3>
                  <div className="t-18-small new-line-link font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </li>
                <li className="z-10 flex w-full flex-col px-4 py-6 text-center md:p-8 lg:sticky lg:-bottom-[25%] lg:text-left xl:p-10 border-darkGrey border-2  bg-black text-white z-10 lg:-bottom-[35%]">
                  <div className="mb-3 flex flex-col-reverse items-center justify-center md:mb-6 lg:flex-row lg:items-start lg:justify-start">
                    <div className="h-16 w-16">
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
                            padding: 0,
                            paddingTop: "100%"
                          }}
                        />
                        <img
                          draggable="false"
                          alt=""
                          src="https://bosonwp.wpengine.com/wp-content/uploads/2022/08/share.svg"
                          decoding="async"
                          data-nimg="responsive"
                          className=""
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
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
                        <noscript>
                          &lt;img draggable="false" alt="" sizes="100vw"
                          srcSet="https://bosonwp.wpengine.com/wp-content/uploads/2022/08/share.svg
                          640w,
                          https://bosonwp.wpengine.com/wp-content/uploads/2022/08/share.svg
                          750w,
                          https://bosonwp.wpengine.com/wp-content/uploads/2022/08/share.svg
                          828w,
                          https://bosonwp.wpengine.com/wp-content/uploads/2022/08/share.svg
                          1080w,
                          https://bosonwp.wpengine.com/wp-content/uploads/2022/08/share.svg
                          1200w,
                          https://bosonwp.wpengine.com/wp-content/uploads/2022/08/share.svg
                          1920w,
                          https://bosonwp.wpengine.com/wp-content/uploads/2022/08/share.svg
                          2048w,
                          https://bosonwp.wpengine.com/wp-content/uploads/2022/08/share.svg
                          3840w"
                          src="https://bosonwp.wpengine.com/wp-content/uploads/2022/08/share.svg"
                          decoding="async" data-nimg="responsive"
                          style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                          class="" loading="lazy" /&gt;
                        </noscript>
                      </span>
                    </div>
                  </div>
                  <h3 className="t-24 mb-3 font-semibold md:mb-6">
                  Lorem ipsum dolor 
                  </h3>
                  <div className="t-18-small new-line-link font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      data-layouts="featured_articles"
      data-background="none"
      className=" overflow-hidden  relative  py-12  !pt-0 lg:!pt-24 lg:pb-36  "
    >
      <div className="section-background pointer-events-none absolute inset-0 ">
        <div style={{ opacity: 1 }} />
      </div>
      <div className="relative space-y-8 xl:space-y-10 ">
        <div className="container ">
          <div className="relative  ">
            <div className="mb-8 flex flex-col justify-between gap-y-4 lg:mb-16 lg:flex-row">
              <div className="lg:max-w-[650px]">
                <div className="relative z-10 container">
                  <div className="text-center  lg:text-left mx-auto lg:mx-0 ">
                    <div
                      className="flex justify-center lg:justify-start font-bold t-13 t-subheading  text-darkGrey mb-4 items-center tracking-widest js-scroll fade-in"
                      style={{ opacity: 1 }}
                    >
                      <div className="mr-2 inline-block flex-none">
                        <svg
                          width={12}
                          height={11}
                          viewBox="0 0 12 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_152_55743)">
                            <path
                              d="M11.0953 8.24996L6.33215 11L1.56901 8.24996L1.56901 2.74996L6.33215 -4.43795e-05L11.0953 2.74996L11.0953 8.24996Z"
                              fill="#7829F9"
                            />
                            <path
                              d="M6.31553 11.0058L1.57704 8.27002L1.55364 2.76855L6.3227 5.52197L6.31553 11.0058Z"
                              fill="#02F3A2"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_152_55743">
                              <rect
                                width={11}
                                height={11}
                                fill="white"
                                transform="matrix(-1 0 0 1 11.8322 0)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h6 className=" inline-block text-center uppercase lg:text-left">
                        Home
                      </h6>
                    </div>
                    <div className="" style={{ opacity: 1 }}>
                      <h3 className="text-content-heading t-48 leading-[1.15] font-semibold text-black js-scroll fade-in">
                      Lorem ipsum dolor
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:self-center lg:mt-0 lg:self-end">
                <div className="block md:w-[200px]">
                  <a
                    href="index.html"
                    className="inline-block  w-full border-[2px] text-center transition-colors duration-200  border-purple hover:bg-purple text-purple   hover:text-white py-4 px-8  font-bold leading-none md:w-full md:max-w-[200px] !max-w-none sm:w-auto undefined undefined"
                    target="_self"
                  >
                    Resources
                  </a>
                </div>
              </div>
            </div>
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html: "\n                \n            "
              }}
            />
            <div className="container">
              <ul className="mt-12 grid min-h-[1200px] grid-cols-1 gap-6 sm:min-h-[736px] sm:grid-cols-2 lg:mt-20 lg:min-h-[480px] lg:grid-cols-3">
                <a
                  href=""
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
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
                          <div className="t-12 inline-block bg-green px-3 py-2 font-semibold uppercase text-white">
                            Announcements
                          </div>
                          <time className="t-15 font-semibold uppercase tracking-widest text-white">
                            7 March, 2023
                          </time>
                        </div>
                        <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
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
                          <div className="t-12 inline-block bg-green px-3 py-2 font-semibold uppercase text-white">
                            Announcements
                          </div>
                          <time className="t-15 font-semibold uppercase tracking-widest text-white">
                            7 March, 2023
                          </time>
                        </div>
                        <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
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
                          <div className="t-12 inline-block bg-green px-3 py-2 font-semibold uppercase text-white">
                            Announcements
                          </div>
                          <time className="t-15 font-semibold uppercase tracking-widest text-white">
                            7 March, 2023
                          </time>
                        </div>
                        <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
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
      </div>
    </section>
  </main>
  
</div>

        </div>


        );
    }
}

export default Home;