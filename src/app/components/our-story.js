export default function OurStory() {
  return (
    <div className="fold">
      <div className="lg:px-6    styles_container__4j5Gl">
        <div className="our-story-container h-[550px] wrapper-height flex flex-col py-12 lg:py-24 pad_layout relative overflow-hidden">
          <video
            // tabindex="-1"
            className="inset-0 absolute w-full h-full object-cover"
            playsinline=""
            autoplay=""
            loop={true}
            id="myVideo"
          >
            <source src="paper.mp4" type="video/mp4" />
          </video>
          <div className="content z-[4] max-w-c w-full relative flex flex-col lg:flex-row lg:items-end h-full justify-between  gap-3 lg:gap-6">
            <div className="flex flex-col justify-between lg:h-full mb-auto">
              <h2 className="title  lg:mb-1">Our story</h2>
              <p className="text-[1rem] hidden lg:block  lg:text-[1.5rem] font-medium max-w-[22rem]">
                Experience the Power of Collaboration and Excellence!
              </p>
            </div>
            <div className="flex flex-col items-start mt-10 lg:items-end h-full">
              <div className="mb-auto hidden lg:block">
                <a href="/about-us">
                  <div className="MagneticButton_container__njxXF">
                    <span>
                      <div className="floating-btn mb-auto flex cursor-pointer ">
                        <span className="grid  place-items-center bordered-btn rounded-full !w-20 !h-20 bg-black !text-white">
                          <svg
                            className="w-6 h-6"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.34106 6.02155L18 6.00006L17.9796 15.6602"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M18 6.00153L6.00037 18"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </span>
                  </div>
                </a>
              </div>
              <p className="desc">
                We’re always striving to create the best products and execute
                projects to the highest standards. We’re constantly in pursuit
                of new trends to meet our customers’ needs in the best possible
                way.{" "}
              </p>
            </div>
          </div>
          <div className=" lg:hidden mt-auto  lg:mt-6 cursor-pointer ">
            <div className="btn backdrop-blur-[8px]  bordered-btn bg-black !text-white style_container__ZhG39">
              <span className="initial items-center z-[2] flex gap-2 items-center">
                Read more
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.34106 6.02155L18 6.00006L17.9796 15.6602"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M18 6.00153L6.00037 18"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
              <span
                aria-hidden="true"
                className="secondary  h-full z-[2] flex gap-2 items-center"
              >
                Read more
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.34106 6.02155L18 6.00006L17.9796 15.6602"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M18 6.00153L6.00037 18"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
              <span className="btn backdrop-blur-[8px]  bordered-btn bg-black !text-white !mb-0 bg-box absolute !w-full h-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
