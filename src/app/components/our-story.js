export default function OurStory() {
  return (
    <div class="fold">
      <div class="lg:px-6    styles_container__4j5Gl">
        <div class="our-story-container h-[550px] wrapper-height flex flex-col py-12 lg:py-24 pad_layout relative overflow-hidden">
          <video
            // tabindex="-1"
            class="inset-0 absolute w-full h-full object-cover"
            playsinline=""
            autoplay=""
            loop={true}
            id="myVideo"
          >
            <source src="paper.mp4" type="video/mp4" />
          </video>
          <div class="content z-[4] max-w-c w-full relative flex flex-col lg:flex-row lg:items-end h-full justify-between  gap-3 lg:gap-6">
            <div class="flex flex-col justify-between lg:h-full mb-auto">
              <h2 class="title  lg:mb-1">Our story</h2>
              <p class="text-[1rem] hidden lg:block  lg:text-[1.5rem] font-medium max-w-[22rem]">
                Experience the Power of Collaboration and Excellence!
              </p>
            </div>
            <div class="flex flex-col items-start mt-10 lg:items-end h-full">
              <div class="mb-auto hidden lg:block">
                <a href="/about-us">
                  <div class="MagneticButton_container__njxXF">
                    <span>
                      <div class="floating-btn mb-auto flex cursor-pointer ">
                        <span class="grid  place-items-center bordered-btn rounded-full !w-20 !h-20 bg-black !text-white">
                          <svg
                            class="w-6 h-6"
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
              <p class="desc">
                We’re always striving to create the best products and execute
                projects to the highest standards. We’re constantly in pursuit
                of new trends to meet our customers’ needs in the best possible
                way.{" "}
              </p>
            </div>
          </div>
          <div class=" lg:hidden mt-auto  lg:mt-6 cursor-pointer ">
            <div class="btn backdrop-blur-[8px]  bordered-btn bg-black !text-white style_container__ZhG39">
              <span class="initial items-center z-[2] flex gap-2 items-center">
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
                class="secondary  h-full z-[2] flex gap-2 items-center"
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
              <span class="btn backdrop-blur-[8px]  bordered-btn bg-black !text-white !mb-0 bg-box absolute !w-full h-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
