"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Swiper JS
import { Navigation } from "swiper/modules";

import Swiper from "swiper";
import "swiper/css";
import { useEffect } from "react";
import LandingHero from "./components/landing/hero";
import AnantaNavigationBar from "./components/ananta_navigation_bar";
import SliderSwiper from "./components/slider_swiper";

export default function Home() {
  useEffect(() => {
    // init Swiper:
    /*
    allowTouchMove: !0,
              loop: !0,
              centeredSlidesBounds: !0,
              centeredSlides: !0,
              freeMode: !0,
              spaceBetween: 16,
              speed: 1e3,
              navigation: { nextEl: "#nextBtnslide", prevEl: "#prevBtnslide" },
              slidesPerView: 1.3,
              initialSlide: 2,
              breakpoints: {
                440: { spaceBetween: 20, slidesPerView: 1.8 },
                1024: {
                  centeredSlidesBounds: !1,
                  centeredSlides: !1,
                  slidesPerView: "auto",
                  spaceBetween: 32,
                },
              },
    */
    const swiper = new Swiper(".swiper", {
      allowTouchMove: true,
      loop: true,
      centeredSlides: true,
      centeredSlidesBounds: true,
      freeMode: true,
      spaceBetween: 16,
      speed: 1000,
      modules: [Navigation],
      slidesPerView: 1.3,
      initialSlide: 2,

      breakpoints: {
        440: { spaceBetween: 20, slidesPerView: 1.8 },
        1024: {
          centeredSlidesBounds: false,
          centeredSlides: false,
          slidesPerView: "auto",
          spaceBetween: 32,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.globalTimeline
      // .fromTo(
      //   ".loader",
      //   { y: 0 },
      //   { ease: "Power4.easeOut", y: "-100%", duration: 1 },
      //   "+=1"
      // )
      .fromTo(
        ".text-inside",
        { translateY: 400 },
        {
          ease: "Power4.easeOut",
          translateY: 0,
          stagger: 0.13,
          duration: 2,
        }
      );
    const t2 = gsap.globalTimeline.fromTo(
      ".fold",
      { y: 200 },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          toggleActions: "play none none reverse",
          trigger: ".fold",
          start: "top 95%",
        },
      }
    );
  });
  return (
    <main className="">
      {/* <div class="z-2 absolute w-screen h-screen bg-black loader items-center flex justify-center">
        <img src="radhasundariyam.png" class="w-1/4" />
      </div> */}
      <AnantaNavigationBar />
      <div class="h-[5.3125rem]  lg:h-[6.875rem]"></div>
      <div className="flex flex-col gap-12 lg:gap-[6.25rem]">
        <div className="landing pt-6">
          <div className="xl:px-[5.5rem] lg:px-14 px-6">
            <LandingHero />
            <div class="mb-6 flex">
              <div>
                <div class="recent mb-6">Recent works</div>
                <p class="desc ">
                  As a tight-knit team of experts, we create memorable and
                  emotional websites, digital experiences, and native apps.
                  Discover the power of emotion-driven design with us.
                </p>
              </div>
              <div class="flex flex-col lg:ml-auto">
                <div class="hidden lg:block -mt-10 ml-auto">
                  Over 4 thrilling years of experience!
                </div>
                <a
                  class="!hidden lg:!block lg:mt-auto"
                  href="https://dribbble.com/piqostudio"
                >
                  <div class="flex !gap-4 drible-btn  style_container__ZhG39">
                    <span class="initial items-center z-[2] flex gap-2 ">
                      <div autoplay="" class=" w-8">
                        <img src="dribble.svg" />
                      </div>
                      Piqo’s Dribbble
                    </span>
                    <span
                      aria-hidden="true"
                      class="secondary  h-full z-[2] flex gap-2 items-center"
                    >
                      <div autoplay="" class=" w-8">
                        <img src="dribble.svg" />
                      </div>
                      Piqo’s Dribbble
                    </span>
                    <span class="flex !gap-4 drible-btn  !mb-0 bg-box absolute !w-full h-full"></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="relative mt-6 lg:mt-12">
            <div class="swiper">
              <div class="swiper-wrapper">
                <SliderSwiper imageSrc="bheeshma.png" />
                <SliderSwiper imageSrc="reema-holidays.png" />
                <SliderSwiper imageSrc="greetify.png" />
                <SliderSwiper imageSrc="reema-holidays.png" />
                <SliderSwiper imageSrc="bheeshma.png" />
                <SliderSwiper imageSrc="bheeshma.png" />
                <SliderSwiper imageSrc="greetify.png" />
                <SliderSwiper imageSrc="bheeshma.png" />
                <SliderSwiper imageSrc="bheeshma.png" />
              </div>
            </div>
            {/* <div className="absolute items-center justify-between z-[5] flex h-full top-0 w-full px-11">
            <div class="swiper-button-prev bg-black cursor-pointer w-[5.5rem] h-[5.5rem] rounded-full items-center justify-center flex text-white group-hover:scale-100 scale-0 transition duration-300 -translate-x-[150%] group-hover:translate-x-0">
              Back
            </div>
            <div class="swiper-button-next  bg-black cursor-pointer w-[5.5rem] h-[5.5rem] rounded-full items-center justify-center flex text-white group-hover:scale-100 scale-0 transition duration-300 translate-x-[150%] group-hover:translate-x-0">
              Next
            </div>
          </div> */}
          </div>
        </div>
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
                    We’re always striving to create the best products and
                    execute projects to the highest standards. We’re constantly
                    in pursuit of new trends to meet our customers’ needs in the
                    best possible way.{" "}
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
      </div>
    </main>
  );
}
