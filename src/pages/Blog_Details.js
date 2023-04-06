import React from "react";

class Blog_Details extends React.Component
{
    render()
    {
        return(
            <div>
                <div id="__next">
  <div className="h-[33px]" />
  <main className="bg-lightGrey">
    <div className="container pt-[7rem] md:pb-40 md:pt-[7.6rem]"  style={{padding:"5px"}}>
      <div className="relative flex flex-col gap-y-8 gap-x-24 py-8 lg:flex-row lg:py-28">
        <aside className="relative hidden w-full md:block lg:w-[305px]">
          <div className="top-24 bg-black p-6 lg:sticky">
            <div className="relative pb-6 after:absolute after:inset-x-0 after:bottom-0 after:h-[1px] after:bg-darkGrey/20">
              <a
                href="/blog"
                className="group inline-block shrink-0"
                target="_self"
              >
                <div className="flex items-center gap-x-3 font-semibold flex-row-reverse">
                  <span className="underline decoration-transparent transition duration-200 text-white group-hover:decoration-white">
                    Back to resources
                  </span>
                  <span className="m-0 rotate-180 text-white group-hover:decoration-white transition-transform duration-200 group-hover:translate-x-2">
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
                  </span>
                </div>
              </a>
            </div>
            <div
              id="mc_embed_signup"
              className="relative pt-8 pb-10 after:absolute after:inset-x-0 after:bottom-0 after:h-[1px] after:bg-darkGrey/20"
            >
              <form
                action=""
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate=""
              >
                <span className="t-28-heading mb-6 block font-semibold text-white lg:mb-8">
                  Stay updated on the latest Sharepass news
                </span>
                <div id="mc_embed_signup_scroll">
                  <div className="mc-field-group">
                    <input
                      type="email"
                      name="EMAIL"
                      className="w-full py-4 px-6 font-medium"
                      id="mce-EMAIL"
                      required=""
                      placeholder="Enter your email"
                      defaultValue=""
                    />
                    <span id="mce-EMAIL-HELPERTEXT" className="helper_text" />
                  </div>
                  <div id="mce-responses" className="clear">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: "none" }}
                    />
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="absolute left-[-5000px]" aria-hidden="true">
                    <input
                      type="text"
                      name="b_041835ebb075036b079fe1a13_b0476087d6"
                      tabIndex={-1}
                      defaultValue=""
                    />
                  </div>
                  <div className="clear">
                    <button
                      type="submit"
                      className="mt-3 w-full bg-green py-4 text-center font-semibold text-black duration-300 hover:bg-purple hover:text-white"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex pt-10">
              <div className="font-medium text-lightGrey/70">Share post:</div>
              <div className="ml-auto flex items-center gap-3">
                <a href="" target="_blank" rel="noreferrer">
                  <svg
                    width={20}
                    height={16}
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5988 4.16693C17.6238 4.26521 17.6363 4.42491 17.6363 4.64605C17.6363 5.94826 17.3867 7.25048 16.8876 8.5527C16.3886 9.83035 15.6774 11.0097 14.7541 12.0908C13.8557 13.1473 12.6829 14.0073 11.2355 14.6707C9.78821 15.3341 8.19116 15.6658 6.44437 15.6658C4.24842 15.6658 2.23961 15.0884 0.417969 13.9336C0.692463 13.9581 1.00439 13.9704 1.35375 13.9704C3.17539 13.9704 4.80988 13.4176 6.25722 12.3119C5.38382 12.3119 4.61025 12.0662 3.93649 11.5748C3.28768 11.0589 2.83851 10.42 2.58897 9.65836C2.83851 9.68293 3.07558 9.69521 3.30016 9.69521C3.64952 9.69521 3.99888 9.65836 4.34823 9.58465C3.74933 9.46179 3.21282 9.21609 2.7387 8.84754C2.26457 8.47899 1.89026 8.03673 1.61576 7.52075C1.34127 6.98021 1.20402 6.40281 1.20402 5.78856V5.71485C1.75301 6.03426 2.33943 6.20625 2.96328 6.23082C1.79044 5.44458 1.20402 4.36349 1.20402 2.98756C1.20402 2.2996 1.39118 1.64849 1.76549 1.03423C2.7387 2.23817 3.92401 3.19641 5.32144 3.90894C6.74382 4.62148 8.25354 5.0146 9.8506 5.08831C9.80069 4.79347 9.77574 4.49862 9.77574 4.20378C9.77574 3.14727 10.15 2.23817 10.8987 1.4765C11.6722 0.714822 12.5955 0.333984 13.6686 0.333984C14.8165 0.333984 15.7772 0.739392 16.5508 1.55021C17.4491 1.37822 18.2851 1.07109 19.0586 0.628826C18.7592 1.53792 18.1853 2.25046 17.3368 2.76643C18.0854 2.66815 18.8341 2.4593 19.5827 2.13989C19.0337 2.92614 18.3724 3.60181 17.5988 4.16693Z"
                      fill="#F1F3F9"
                      className=""
                    />
                  </svg>
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <svg
                    width={17}
                    height={18}
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_152_129983)">
                      <rect
                        width={17}
                        height={17}
                        transform="translate(0 0.5)"
                        fill="#F1F3F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18 17.4514C18 18.0304 17.5304 18.5 16.9514 18.5H0.0486221C-0.530647 18.5 -1 18.0304 -1 17.4514V0.548685C-1 -0.03058 -0.530647 -0.5 0.0486221 -0.5H16.9514C17.5304 -0.5 18 -0.03058 18 0.548685V17.4514ZM11.7074 10.904V17.4434H9.07564V10.904H6.875V8.35545H9.07564V6.47599C9.07564 4.29486 10.4077 3.1072 12.3535 3.1072C13.2854 3.1072 14.0865 3.17661 14.32 3.20761V5.48701L12.9704 5.48764C11.9123 5.48764 11.7074 5.99045 11.7074 6.72832V8.35545H14.2311L13.9025 10.904H11.7074Z"
                        fill="#09182C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_152_129983">
                        <rect
                          width={17}
                          height={17}
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <svg
                    width={17}
                    height={16}
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.621094 15.6132H3.9386V4.57422H0.621094V15.6132Z"
                      fill="#F1F3F9"
                      className=""
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.1011 9.46783V15.6133H12.8533V9.80925C12.8533 8.32979 12.3295 7.41935 11.1771 7.41935C10.4312 7.41138 9.76073 7.91212 9.50091 8.6712C9.40767 8.96254 9.37205 9.27323 9.39615 9.58164V15.6133H6.14844V4.91565H9.39615V6.39511C10.0058 5.26389 11.1237 4.57082 12.3295 4.57423C14.4248 4.57423 16.1011 6.1675 16.1011 9.46783Z"
                      fill="#F1F3F9"
                      className=""
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.3267 0.164933C1.47484 0.0712231 0.714902 0.746757 0.628674 1.6715C0.623936 1.71887 0.622041 1.76521 0.621094 1.81258C0.622041 2.72599 1.30428 3.46434 2.14382 3.46228C2.17319 3.46228 2.20257 3.46228 2.23194 3.46022C3.0838 3.5529 3.84374 2.87943 3.92997 1.95365C3.93376 1.90629 3.9366 1.85995 3.93755 1.81258C3.96787 0.931088 3.3349 0.191707 2.52474 0.157724C2.45841 0.155665 2.39208 0.157724 2.3267 0.164933Z"
                      fill="#F1F3F9"
                      className=""
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex-1">
          <div>
            <div className="mb-4 flex items-center gap-x-4">
              <div className="t-12 inline-block bg-purple px-3 py-2 font-semibold uppercase text-white">
                Announcements
              </div>
              <time
                className="t-15 font-semibold tracking-widest text-darkGrey"
                dateTime="6 March, 2023"
              >
                6 March, 2023
              </time>
            </div>
            <div>
              <h1 className="t-52 mb-4 font-semibold text-black lg:mb-8">
                {/* */}Welcome to SharePass
              </h1>
              <div className="flex">
                <svg
                  width={24}
                  height={24}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 3.797C6.031 1.516 8.781.375 12 .375c3.219 0 5.953 1.14 8.203 3.422 2.281 2.25 3.422 4.984 3.422 8.203 0 3.219-1.14 5.969-3.422 8.25-2.25 2.25-4.984 3.375-8.203 3.375-3.219 0-5.969-1.125-8.25-3.375C1.5 17.969.375 15.219.375 12c0-3.219 1.125-5.953 3.375-8.203ZM22.125 12c0-2.813-1-5.203-3-7.172C17.156 2.86 14.781 1.875 12 1.875c-2.813 0-5.203 1-7.172 3C2.86 6.844 1.875 9.219 1.875 12c0 2.813.984 5.203 2.953 7.172 2 1.969 4.39 2.953 7.172 2.953 2.813 0 5.203-.984 7.172-2.953 1.969-2 2.953-4.39 2.953-7.172Zm-6.984 4.125-3.797-2.766a.46.46 0 0 1-.235-.421v-7.5c0-.375.188-.563.563-.563h.656c.375 0 .563.188.563.563v6.843l3.328 2.438c.281.219.312.469.093.75l-.375.562c-.218.282-.484.313-.796.094Z"
                    fill="#02F3A2"
                  />
                </svg>
                <div className="t-18 relative top-[-2px] pl-3 font-semibold text-darkGrey opacity-70">
                  2 mins
                  {/* */} read
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 lg:py-20">
            <article className="space-y-8 lg:space-y-20">
              
              <div className="prose prose-lg">
                <p>
                  <span style={{ fontWeight: 400 }}>
                  Passwords, we all have them, lots of them. Almost every website, membership, device, portal, or other online service requires you to have a password, PIN code or both. Most of the cybersecurity breaches today occur as a result of bad password hygiene and practices. So, what do we need to do with passwords? We need to create, store, organise, update, manage, audit, remember, keep them unique and complicated to avoid unauthorised access to our online accounts.

Password managers like Myki, LastPass, 1Password, Dashlane can handle these tasks and are a must-have solution for any business or user. But, they all have the same challenges: instant sharing and cross-platform sharing.
                  </span>
                </p>
                <p>&nbsp;</p>
                <p>
                
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 lg:gap-6">
                <div className="relative max-w-full">
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
                        paddingTop: "56.666666666666664%"
                      }}
                    />
                    <img
                      draggable="false"
                      alt=""
                      src="/_next/image/?url=https%3A%2F%2Fbosonwp.wpengine.com%2Fwp-content%2Fuploads%2F2023%2F03%2FPartnership-01..png&w=3840&q=75"
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
                        maxHeight: "100%",
                        objectFit: "cover"
                      }}
                      sizes="100vw"
                      srcSet="https://miro.medium.com/v2/resize:fit:828/format:webp/1*9M0P0_9n2_DvK3xvoEyonw.png"
                    />
                  </span>
                </div>
              </div>

              <div className="prose prose-lg">
                <p>
                  <span style={{ fontWeight: 400 }}>
                  Passwords, we all have them, lots of them. Almost every website, membership, device, portal, or other online service requires you to have a password, PIN code or both. Most of the cybersecurity breaches today occur as a result of bad password hygiene and practices. So, what do we need to do with passwords? We need to create, store, organise, update, manage, audit, remember, keep them unique and complicated to avoid unauthorised access to our online accounts.

Password managers like Myki, LastPass, 1Password, Dashlane can handle these tasks and are a must-have solution for any business or user. But, they all have the same challenges: instant sharing and cross-platform sharing.
                  </span>
                </p>
                <p>&nbsp;</p>
                <p>
                
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 lg:gap-6">
                <div className="relative max-w-full">
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
                        paddingTop: "75.44378698224851%"
                      }}
                    />
                    <img
                      draggable="false"
                      alt=""
                      src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*AbDBQdACpxN2jLNxLIbNiQ.png"
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
                        maxHeight: "100%",
                        objectFit: "cover"
                      }}
                    />
               
                  </span>
                </div>
              </div>
              <div className="prose prose-lg">
                <p>
                 
                </p>
                <p>&nbsp;</p>
                <h3>
                  <span style={{ fontWeight: 400 }}>About SHarepass:</span>
                </h3>
                <p>
                  <span style={{ fontWeight: 400 }}>
                  SharePass will allow you to securely share your confidential information by sending a one-time link that will expire upon receiving, so it is no longer available to open and read. SharePass also includes an open API and Webhooks that will allow advanced users to integrate it into their process and change to an encryption algorithm of their choice.

                  In the next blog post, we will focus on explaining further features available on SharePass; in the meantime,

                  Don’t risk it, SharePass it!
                  </span>
                </p>
                <p>
                
                </p>
                <p>
                 
                </p>
                <p>&nbsp;</p>
                <h3>
                 
                </h3>
                <p>
                 
                </p>
                <p>
                  
                </p>
                <p>
                
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
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
              srcSet="/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fpurple-dots-top-right.3c4352ac.png&amp;amp;w=640&amp;amp;q=75
              640w,
              /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fpurple-dots-top-right.3c4352ac.png&amp;amp;w=750&amp;amp;q=75
              750w,
              /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fpurple-dots-top-right.3c4352ac.png&amp;amp;w=828&amp;amp;q=75
              828w,
              /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fpurple-dots-top-right.3c4352ac.png&amp;amp;w=1080&amp;amp;q=75
              1080w,
              /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fpurple-dots-top-right.3c4352ac.png&amp;amp;w=1200&amp;amp;q=75
              1200w,
              /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fpurple-dots-top-right.3c4352ac.png&amp;amp;w=1920&amp;amp;q=75
              1920w,
              /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fpurple-dots-top-right.3c4352ac.png&amp;amp;w=2048&amp;amp;q=75
              2048w,
              /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fpurple-dots-top-right.3c4352ac.png&amp;amp;w=3840&amp;amp;q=75
              3840w"
              src="/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fpurple-dots-top-right.3c4352ac.png&amp;amp;w=3840&amp;amp;q=75"
              decoding="async" data-nimg="fill"
              style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
              loading="lazy" /&gt;
            </noscript>
          </span>
        </div>
        <div className="mx-4 text-center md:mx-auto md:max-w-[635px]">
          <h3 className="t-52 mb-8 font-semibold md:mb-16">
            Stay updated on the latest Sharepass news
          </h3>
          <form
            action=""
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
      <div className="mt-16 pb-12 md:pb-0 lg:mt-40" style={{paddingBottom:"30px"}}>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html: "\n               \n            "
          }}
        />
        <h3 className="t-48 mx-auto my-8 text-center font-semibold text-black lg:my-20 lg:max-w-[600px] ">
          Related Posts
        </h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-9 mt-12 grid min-h-[1200px] grid-cols-1 gap-6 sm:min-h-[736px] sm:grid-cols-2 lg:mt-20 lg:min-h-[480px] lg:grid-cols-3">
          <a
            id="rp1"
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
                  Sharepass AMA Recap from 3/3/23 With Co-Founder Justin Banon
                  and CTO Mischa Tuffield
                </h3>
              </div>
              <div
                id="rp3"
                className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                style={{}}
              >
                <div className="flex h-full flex-col justify-between">
                  <div
                    className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                    style={{ padding: 0 }}
                  >
                    <div className="mb-4 flex items-center gap-4 lg:mb-8">
                      <div className="t-12 inline-block bg-green px-3 py-2 font-semibold uppercase text-white">
                        Announcements
                      </div>
                      <time className="t-15 font-semibold uppercase tracking-widest text-white">
                        7 March, 2023
                      </time>
                    </div>
                    <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300  line-clamp-3">
                      Sharepass AMA Recap from 3/3/23 With Co-Founder Justin
                      Banon and CTO Mischa Tuffield
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            id="rp4"
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
                    6 March, 2023
                  </time>
                </div>
                <h3 className="t-24 font-semibold !leading-[1.15] text-black duration-300  line-clamp-3">
                  NFTSnapback partners with Sharepass to drive sales on their
                  product collection in Sharepass customized D-Commerce
                  storefront
                </h3>
              </div>
              <div
                id="rp5"
                className="absolute inset-0 bottom-0 top-full hidden h-full w-full -translate-y-[148px] p-10 md:block lg:p-6 lg:pr-0 xl:p-10"
                style={{}}
              >
                <div className="flex h-full flex-col justify-between">
                  <div
                    className="w-[280px] md:w-auto p-4 lg:p-8 xl:p-10"
                    style={{ padding: 0 }}
                  >
                    <div className="mb-4 flex items-center gap-4 lg:mb-8">
                      <div className="t-12 inline-block bg-green px-3 py-2 font-semibold uppercase text-white">
                        Announcements
                      </div>
                      <time className="t-15 font-semibold uppercase tracking-widest text-white">
                        7 March, 2023
                      </time>
                    </div>
                    <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300  line-clamp-3">
                      NFTSnapback partners with Sharepass to drive sales on
                      their product collection in Sharepass customized
                      D-Commerce storefront
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            id="rp6"
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
                    1 March, 2023
                  </time>
                </div>
                <h3 className="t-24 font-semibold !leading-[1.15] text-black duration-300  line-clamp-3">
                  Sharepass announces its latest roadmap update
                </h3>
              </div>
              <div
                id="rp7"
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
                    <h3 className="t-24 font-semibold !leading-[1.15] text-white duration-300  line-clamp-3">
                      Sharepass announces its latest roadmap update
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="flex justify-center">
          <a
            className="mt-8 inline-block border-2 border-purple py-4 px-4 text-center font-semibold text-purple duration-200 hover:bg-purple hover:text-white lg:mt-16 lg:min-w-[225px]"
            href=""
          >
            Explore all articles
          </a>
        </div>
      </div>
    </div>
  </main>
</div>

            </div>
        )
    }
}

export default Blog_Details;