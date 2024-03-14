"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Swiper JS
import { Navigation } from "swiper/modules";

import Swiper from "swiper";
import "swiper/css";
// import { useEffect, useRef } from "react";
import { useState } from "react";
import LandingHero from "./components/landing/hero";
import AnantaNavigationBar from "./components/ananta_navigation_bar";
import SliderSwiper from "./components/slider_swiper";
import OurStory from "./components/our-story";
import OurProjets from "./components/our-projects";
import AnantaDribbble from "./components/landing/dribbble";
import OurServices from "./components/our-services";
import OurClients from "./components/our-clients";
import OurPricing from "./components/our-pricing";

export default function Home() {
  // let el = useRef();
  // useEffect(() => {
  //   // init Swiper:
  //   /*
  //   allowTouchMove: !0,
  //             loop: !0,
  //             centeredSlidesBounds: !0,
  //             centeredSlides: !0,
  //             freeMode: !0,
  //             spaceBetween: 16,
  //             speed: 1e3,
  //             navigation: { nextEl: "#nextBtnslide", prevEl: "#prevBtnslide" },
  //             slidesPerView: 1.3,
  //             initialSlide: 2,
  //             breakpoints: {
  //               440: { spaceBetween: 20, slidesPerView: 1.8 },
  //               1024: {
  //                 centeredSlidesBounds: !1,
  //                 centeredSlides: !1,
  //                 slidesPerView: "auto",
  //                 spaceBetween: 32,
  //               },
  //             },
  //   */
  //   const swiper = new Swiper(".swiper", {
  //     allowTouchMove: true,
  //     loop: true,
  //     centeredSlides: true,
  //     centeredSlidesBounds: true,
  //     freeMode: true,
  //     spaceBetween: 16,
  //     speed: 1000,
  //     modules: [Navigation],
  //     slidesPerView: 1.3,
  //     initialSlide: 2,

  //     breakpoints: {
  //       440: { spaceBetween: 20, slidesPerView: 1.8 },
  //       1024: {
  //         centeredSlidesBounds: false,
  //         centeredSlides: false,
  //         slidesPerView: "auto",
  //         spaceBetween: 32,
  //       },
  //     },
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //   });
  // });

  const [selectedFAQ, setSelectedFAQ] = useState(-1);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.globalTimeline.fromTo(
      ".lion",
      { rotate: 0 },
      { rotate: 360, duration: 54, repeat: -1 }
    );
    const tl = gsap.globalTimeline
      .fromTo(
        ".web-curtain",
        { y: 0 },
        { y: "-100%", ease: "Power4.easeOut", stagger: 0.13, duration: 2 }
      )
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
    // let p8 = gsap.utils.selector();
    Array.from(document.querySelectorAll(".fold")).map((element) => {
      return gsap.fromTo(
        element,
        { y: 200 },
        {
          y: 0,
          duration: 1,
          scrollTrigger: {
            toggleActions: "play none none reverse",
            trigger: element,
            start: "top 95%",
          },
        }
      );
    });
    // p8(".fold").map((element) => console.log(element));
    // p8(".fold").map((element) =>
    // gsap.fromTo(
    //   ".fold",
    //   { y: 200 },
    //   {
    //     y: 0,
    //     duration: 1,
    //     scrollTrigger: {
    //       toggleActions: "play none none reverse",
    //       trigger: ".fold",
    //       start: "top 95%",
    //     },
    //   }
    // );
    // );
  });
  return (
    <main className="">
      <div className="web-curtain fixed top-0 w-full h-full z-[35] bg-black flex items-center justify-center flex-col">
        <div className="flex flex-col w-[30%] text-white">
          <img src="white-logo.svg" className="w-full" />
          <div className="text-2xl -translate-y-2 opacity-60">
            be limitless.
          </div>
        </div>
      </div>
      {/* <div class="z-2 absolute w-screen h-screen bg-black loader items-center flex justify-center">
        <img src="radhasundariyam.png" class="w-1/4" />
      </div> */}

      <div className="flex flex-col gap-12 lg:gap-[6.25rem]">
        <div className="landing pt-6">
          <div className="xl:px-[5.5rem] lg:px-14 px-6">
            <LandingHero />
            <AnantaDribbble />
          </div>
          <div className="relative mt-6 lg:mt-12">
            {/* <div class="swiper">
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
            </div> */}
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
        <OurStory />
        <OurProjets />
        <OurServices />
        <OurClients />
        <OurPricing />
        <div class="fold ">
          <div class="styles_container__vSlUu pad_layout">
            <div class="section-title">projects</div>
            <div class="projects flex-col flex lg:grid lg:grid-cols-3    gap-8 mb-8 lg:mb-16">
              <div class="styles_container__baAHo group">
                <div class=" cursor-pointer">
                  <a
                    class="relative block aspect-[1.4] overflow-hidden mb-6 rounded-[3rem] group-hover:scale-110 transition-all duration-300 group-hover:z-[2] group-hover:shadow-[0rem_4rem_6.875rem_0rem_rgba(0,0,0,0.15)]"
                    href="/case-study/bettermotion"
                  >
                    <div class="videoWrapper h-full group  flex overflow-hidden relative rounded-[1.5rem] w-full landing-hero-img ">
                      <img
                        class="landing-hero-img z-[3] inset-0 w-full h-full object-cover absolute border-opacity-0 group-hover:opacity-0 transition-opacity duration-500"
                        src="https://dash.piqo.design/uploads/Rectangle_13_3f6cfbd2dc.png"
                        alt="Bettermotion"
                      />
                      <video
                        class="w-full h-full z-[2] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500  inset-0"
                        playsinline=""
                        loop=""
                        autoplay=""
                      >
                        <source
                          src="https://dash.piqo.design/uploads/Wide_video_fce5184d19.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </a>
                </div>
                <h5 class="project-title">Bettermotion</h5>
                <div class="subtitle flex gap-1 flex-wrap">
                  <div>Development -</div>
                  <div>Product Design -</div>
                  <div>Illustration</div>
                </div>
              </div>
              <div class="styles_container__baAHo group">
                <div class=" cursor-pointer">
                  <a
                    class="relative block aspect-[1.4] overflow-hidden mb-6 rounded-[3rem] group-hover:scale-110 transition-all duration-300 group-hover:z-[2] group-hover:shadow-[0rem_4rem_6.875rem_0rem_rgba(0,0,0,0.15)]"
                    href="/case-study/oneseed"
                  >
                    <div class="videoWrapper h-full group  flex overflow-hidden relative rounded-[1.5rem] w-full landing-hero-img ">
                      <img
                        class="landing-hero-img z-[3] inset-0 w-full h-full object-cover absolute border-opacity-0 group-hover:opacity-0 transition-opacity duration-500"
                        src="https://dash.piqo.design/uploads/3_ec489b8e79.png"
                        alt="Oneseed "
                      />
                      <video
                        class="w-full h-full z-[2] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500  inset-0"
                        playsinline=""
                        loop=""
                        autoplay=""
                      >
                        <source
                          src="https://dash.piqo.design/uploads/thumbnail_1080_e142bd74d4.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </a>
                </div>
                <h5 class="project-title">Oneseed </h5>
                <div class="subtitle flex gap-1 flex-wrap">
                  <div>3D -</div>
                  <div>Product Design -</div>
                  <div>Branding -</div>
                  <div>Animation</div>
                </div>
              </div>
              <div class="styles_container__baAHo group">
                <div class=" cursor-pointer">
                  <a
                    class="relative block aspect-[1.4] overflow-hidden mb-6 rounded-[3rem] group-hover:scale-110 transition-all duration-300 group-hover:z-[2] group-hover:shadow-[0rem_4rem_6.875rem_0rem_rgba(0,0,0,0.15)]"
                    href="/case-study/skale"
                  >
                    <div class="videoWrapper h-full group  flex overflow-hidden relative rounded-[1.5rem] w-full landing-hero-img ">
                      <img
                        class="landing-hero-img z-[3] inset-0 w-full h-full object-cover absolute border-opacity-0 group-hover:opacity-0 transition-opacity duration-500"
                        src="https://dash.piqo.design/uploads/Rectangle_11_986f3f04ce.png"
                        alt="Skale"
                      />
                      <video
                        class="w-full h-full z-[2] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500  inset-0"
                        playsinline=""
                        loop=""
                        autoplay=""
                      >
                        <source
                          src="https://dash.piqo.design/uploads/square_eaa43c4eaf.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </a>
                </div>
                <h5 class="project-title">Skale</h5>
                <div class="subtitle flex gap-1 flex-wrap">
                  <div>Development -</div>
                  <div>3D -</div>
                  <div>Product Design -</div>
                  <div>Animation</div>
                </div>
              </div>
            </div>
            <div class="flex items-end">
              <p class="text hidden lg:block">
                Driven by user-centered design, we propel productivity and boost
                revenue for our clients. Our expertise and ingenuity set us
                apart, but we are forever chasing new heights, consistently
                outdoing and outperforming our previous achievements.
              </p>
              <div class="btns w-full flex flex-col lg:flex-row-reverse lg:gap-2  gap-4">
                <a href="/projects">
                  <div class="btn font-semibold bg-black text-white style_container__ZhG39">
                    <span class="initial items-center z-[2] flex gap-2 items-center">
                      More projects
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.84106 6.02149L18.5 6L18.4796 15.6601"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M18.5 6.00146L6.50037 17.9999"
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
                      More projects
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.84106 6.02149L18.5 6L18.4796 15.6601"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M18.5 6.00146L6.50037 17.9999"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span class="btn font-semibold bg-black text-white !mb-0 bg-box absolute !w-full h-full"></span>
                  </div>
                </a>
                <a href="/submit-project">
                  <div class="btn font-semibold bordered-btn  style_container__ZhG39">
                    <span class="initial items-center z-[2] flex gap-2 items-center">
                      Tell us about your new project
                    </span>
                    <span
                      aria-hidden="true"
                      class="secondary  h-full z-[2] flex gap-2 items-center"
                    >
                      Tell us about your new project
                    </span>
                    <span class="btn font-semibold bordered-btn  !mb-0 bg-box absolute !w-full h-full"></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="pb-1">
          <div class="fold">
            <div class="styles_container__17Xs3">
              <div
                class="p-6 wrapper group"
                style={{ background: "rgb(226, 226, 226)", color: "black" }}
              >
                <div class="inside-wrapper wrapper-height w-full flex flex-col lg:grid  lg:gap-[0]">
                  <div class="left relative flex flex-col gap-4  justify-between lg:px-5 py-1 lg:p-8">
                    <div class=" flex gap-4 items-center">
                      <div class="w-6"></div>Next about Art Direction
                    </div>
                    <h3 class=" title data-title">
                      <div class="flex flex-wrap">
                        <div class="word inline- flex items-center  mr-4 ">
                          <div class=" h-[130%] flex items-center overflow-hidden">
                            <span class="relative text-inside will-change-auto">
                              {" "}
                              Elevate
                            </span>
                          </div>
                        </div>
                        <div class="word inline- flex items-center  mr-4 ">
                          <div class=" h-[130%] flex items-center overflow-hidden">
                            <span class="relative text-inside will-change-auto">
                              {" "}
                              your
                            </span>
                          </div>
                        </div>
                        <div class="word inline- flex items-center  mr-4 ">
                          <div class=" h-[130%] flex items-center overflow-hidden">
                            <span class="relative text-inside will-change-auto">
                              {" "}
                              brand
                            </span>
                          </div>
                        </div>
                        <div class="word inline- flex items-center  mr-4 ">
                          <div class=" h-[130%] flex items-center overflow-hidden">
                            <span class="relative text-inside will-change-auto">
                              {" "}
                              with
                            </span>
                          </div>
                        </div>
                        <div class="word inline- flex items-center  mr-4 ">
                          <div class=" h-[130%] flex items-center overflow-hidden">
                            <span class="relative text-inside will-change-auto">
                              {" "}
                              cutting-edge
                            </span>
                          </div>
                        </div>
                        <div class="word inline- flex items-center  mr-4 ">
                          <div class=" h-[130%] flex items-center overflow-hidden">
                            <span class="relative text-inside will-change-auto">
                              {" "}
                              design
                            </span>
                          </div>
                        </div>
                        <div class="word inline- flex items-center  mr-4 ">
                          <div class=" h-[130%] flex items-center overflow-hidden">
                            <span class="relative text-inside will-change-auto">
                              {" "}
                              solutions
                            </span>
                          </div>
                        </div>
                      </div>
                    </h3>
                    <p class="data-desc text-16 lg:text-20 font-medium lg:max-w-[24rem] leading-[140%]">
                      Transforming concepts into visual stories, our branding
                      design speaks the language of innovation and leaves an
                      unforgettable mark on your digital presence.
                    </p>
                    <div class="data-tags tags">
                      <div class="tag">Logo</div>
                      <div class="tag">Branding</div>
                      <div class="tag">Social</div>
                      <div class="tag">Brand Identity</div>
                    </div>
                    <div class="ajimaji  text-black -translate-y-[80%] -translate-x-[70%] opacity-0 group-hover:opacity-100 group-hover:transition group-hover:duration-[1000]">
                      <div autoplay="" class=" w-6 mb-1 mr-1">
                        <img src="/magic-hand.svg" />
                      </div>
                      Lumos
                    </div>
                  </div>
                  <div class="right  hidden lg:block  items-center flex relative p-6  lg:p-12">
                    <video
                      class="inset-0 absolute w-full h-full object-cover transition-opacity duration-1000"
                      autoplay=""
                      loop=""
                      id="myVideo"
                    >
                      <source
                        src="/media/Harrypotter/Art direction.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <video
                      class="inset-0 absolute w-full h-full object-cover transition-opacity duration-1000"
                      autoplay=""
                      loop=""
                      id="myVideo"
                    >
                      <source
                        src="/media/Harrypotter/Development.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <video
                      class="inset-0 absolute w-full h-full object-cover transition-opacity duration-1000"
                      autoplay=""
                      loop=""
                      id="myVideo"
                    >
                      <source
                        src="/media/Harrypotter/Design.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <video
                      class="inset-0 absolute w-full h-full object-cover transition-opacity duration-1000"
                      autoplay=""
                      loop=""
                      id="myVideo"
                    >
                      <source
                        src="/media/Harrypotter/Branding.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="fold mt-12 lg:my-[6.25rem]">
            <div class="pad_layout justify-between w-full flex flex-col md:flex-row">
              <div>
                <h3 class="section-title">Faq</h3>
                <h3 class="text-32 leading-[100%] md:text-48 -mt-2 md:-mt-5 mb-5 font-semibold max-w-[450px] ">
                  Answer to your questions
                </h3>
              </div>
              <div class="flex flex-col gap-4 ">
                <button
                  class="styles_container__cAeIB"
                  onClick={() => {
                    setSelectedFAQ(selectedFAQ === 0 ? -1 : 0);
                  }}
                >
                  <div class="flex gap-2 items-center justify-between">
                    <div class="title text-16 md:text-24 font-medium">
                      What expertise does our team have?
                    </div>
                    <div class="icon">
                      <div class="icon">
                        <div class="line"></div>
                        <div class="line transition-transform duration-500 opacity-20  rotate-90 !opacity-100 "></div>
                      </div>
                    </div>
                  </div>
                  <div
                    class={`answer text-14 md:text-20 ${
                      selectedFAQ === 0 ? "active mt-3 md:mt-5" : ""
                    }`}
                  >
                    Our team consists of experts in various fields such as
                    Product Design, 3D, Animation, and Development, covering all
                    the expertise you need for your product.
                  </div>
                </button>
                <button
                  class="styles_container__cAeIB"
                  onClick={() => {
                    setSelectedFAQ(selectedFAQ === 1 ? -1 : 1);
                  }}
                >
                  <div class="flex gap-2 items-center justify-between">
                    <div class="title text-16 md:text-24 font-medium">
                      How does collaboration begin after purchasing a
                      subscription?
                    </div>
                    <div class="icon">
                      <div class="icon">
                        <div class="line"></div>
                        <div class="line transition-transform duration-500 opacity-20  rotate-90 !opacity-100 "></div>
                      </div>
                    </div>
                  </div>
                  <div
                    class={`answer text-14 md:text-20 ${
                      selectedFAQ === 1 ? "active mt-3 md:mt-5" : ""
                    }`}
                  >
                    It is recommended to schedule a session with us through
                    Calendly before making any payment. We will then contact you
                    to move the project forward after payment.
                  </div>
                </button>
                <button
                  class="styles_container__cAeIB"
                  onClick={() => {
                    setSelectedFAQ(selectedFAQ === 2 ? -1 : 2);
                  }}
                >
                  <div class="flex gap-2 items-center justify-between">
                    <div class="title text-16 md:text-24 font-medium">
                      What happens if I don&apos;t like the output?
                    </div>
                    <div class="icon">
                      <div class="icon">
                        <div class="line"></div>
                        <div class="line transition-transform duration-500 opacity-20  rotate-90 !opacity-100 "></div>
                      </div>
                    </div>
                  </div>
                  <div
                    class={`answer text-14 md:text-20 ${
                      selectedFAQ === 2 ? "active mt-3 md:mt-5" : ""
                    }`}
                  >
                    Our team considers customer feedback in 2-3 stages to
                    elevate the project to your desired level.
                  </div>
                </button>
                <button
                  class="styles_container__cAeIB"
                  onClick={() => {
                    setSelectedFAQ(selectedFAQ === 3 ? -1 : 3);
                  }}
                >
                  <div class="flex gap-2 items-center justify-between">
                    <div class="title text-16 md:text-24 font-medium">
                      How is task management handled?
                    </div>
                    <div class="icon">
                      <div class="icon">
                        <div class="line"></div>
                        <div class="line transition-transform duration-500 opacity-20  rotate-90 !opacity-100 "></div>
                      </div>
                    </div>
                  </div>
                  <div
                    class={`answer text-14 md:text-20 ${
                      selectedFAQ === 3 ? "active mt-3 md:mt-5" : ""
                    }`}
                  >
                    Our team is managed by a Project Manager, ensuring precise
                    management of all tasks and communication through Notion
                    software, providing you peace of mind.
                  </div>
                </button>
                <button
                  class="styles_container__cAeIB"
                  onClick={() => {
                    setSelectedFAQ(selectedFAQ === 4 ? -1 : 4);
                  }}
                >
                  <div class="flex gap-2 items-center justify-between">
                    <div class="title text-16 md:text-24 font-medium">
                      Does your team handle both design and development?
                    </div>
                    <div class="icon">
                      <div class="icon">
                        <div class="line"></div>
                        <div class="line transition-transform duration-500 opacity-20  rotate-90 !opacity-100 "></div>
                      </div>
                    </div>
                  </div>
                  <div
                    class={`answer text-14 md:text-20 ${
                      selectedFAQ === 4 ? "active mt-3 md:mt-5" : ""
                    }`}
                  >
                    Yes, our team comprises individuals who can work seamlessly
                    on both design and development concurrently.
                  </div>
                </button>
                <button
                  class="styles_container__cAeIB"
                  onClick={() => {
                    setSelectedFAQ(selectedFAQ === 5 ? -1 : 5);
                  }}
                >
                  <div class="flex gap-2 items-center justify-between">
                    <div class="title text-16 md:text-24 font-medium">
                      How is communication managed during the project?
                    </div>
                    <div class="icon">
                      <div class="icon">
                        <div class="line"></div>
                        <div class="line transition-transform duration-500 opacity-20  rotate-90 !opacity-100 "></div>
                      </div>
                    </div>
                  </div>
                  <div
                    class={`answer text-14 md:text-20 ${
                      selectedFAQ === 5 ? "active mt-3 md:mt-5" : ""
                    }`}
                  >
                    Weekly sessions are held to discuss project progress, and
                    further communication is facilitated through Slack and
                    Notion.
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div class="fold">
            <div class="py-12">
              <div class="marquee-container">
                <div class="marquee">
                  <div class="initial-child-container">
                    <div class="child">
                      <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                        illustration
                      </div>
                    </div>
                    <div class="child">
                      <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                        branding
                      </div>
                    </div>
                    <div class="child">
                      <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                        Design
                      </div>
                    </div>
                    <div class="child">
                      <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                        Development
                      </div>
                    </div>
                    <div class="child">
                      <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                        UI
                      </div>
                    </div>
                    <div class="child">
                      <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                        3D
                      </div>
                    </div>
                    <div class="child">
                      <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                        illustration
                      </div>
                    </div>
                    <div class="child">
                      <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                        branding
                      </div>
                    </div>
                    <div class="child">
                      <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                        Design
                      </div>
                    </div>
                    <div class="child">
                      <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                        Development
                      </div>
                    </div>
                    <div class="child">
                      <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                        UI
                      </div>
                    </div>
                    <div class="child">
                      <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                        3D
                      </div>
                    </div>
                    <div class="child">
                      <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                        illustration
                      </div>
                    </div>
                    <div class="child">
                      <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                        branding
                      </div>
                    </div>
                    <div class="child">
                      <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                        Design
                      </div>
                    </div>
                    <div class="child">
                      <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                        Development
                      </div>
                    </div>
                    <div class="child">
                      <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                        UI
                      </div>
                    </div>
                    <div class="child">
                      <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                        3D
                      </div>
                    </div>
                  </div>
                </div>
                <div class="marquee">
                  <div class="child">
                    <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                      illustration
                    </div>
                  </div>
                  <div class="child">
                    <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                      branding
                    </div>
                  </div>
                  <div class="child">
                    <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                      Design
                    </div>
                  </div>
                  <div class="child">
                    <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                      Development
                    </div>
                  </div>
                  <div class="child">
                    <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                      UI
                    </div>
                  </div>
                  <div class="child">
                    <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                      3D
                    </div>
                  </div>
                  <div class="child">
                    <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                      illustration
                    </div>
                  </div>
                  <div class="child">
                    <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                      branding
                    </div>
                  </div>
                  <div class="child">
                    <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                      Design
                    </div>
                  </div>
                  <div class="child">
                    <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                      Development
                    </div>
                  </div>
                  <div class="child">
                    <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                      UI
                    </div>
                  </div>
                  <div class="child">
                    <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                      3D
                    </div>
                  </div>
                  <div class="child">
                    <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                      illustration
                    </div>
                  </div>
                  <div class="child">
                    <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                      branding
                    </div>
                  </div>
                  <div class="child">
                    <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                      Design
                    </div>
                  </div>
                  <div class="child">
                    <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                      Development
                    </div>
                  </div>
                  <div class="child">
                    <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                      UI
                    </div>
                  </div>
                  <div class="child">
                    <div class="px-8 text-[#9A9A9A] uppercase lg:text-[1.25rem] text-[0.875rem]">
                      3D
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="fold">
            <div class="styles_container__lqnx9">
              <div class="wrapper wrapper-height h-[25rem] relative overflow-hidden">
                <video
                  class="mainVideo inset-0 absolute w-full h-full object-cover"
                  autoplay=""
                  playsinline=""
                  loop=""
                >
                  <source src="/media/footer/Footer.mp4" type="video/mp4" />
                </video>
                <h3 class="title  mb-12 max-w-[28 0rem]">Let’s collaborate</h3>
                <div>
                  <a href="/submit-project">
                    <div class="btn-submit cursor-pointer flex gap-2 lg:gap-4 items-center mb-4 lg:mb-16 lg:mb-0 style_container__ZhG39">
                      <span class="initial items-center z-[2] flex gap-2 items-center">
                        <div autoplay="" class="w-6 lg:w-12">
                          <img src="party_popper.svg" />
                        </div>
                        Start Now!
                      </span>
                      <span
                        aria-hidden="true"
                        class="secondary  h-full z-[2] flex gap-2 items-center"
                      >
                        <div autoplay="" class="w-6 lg:w-12">
                          <img src="party_popper.svg" />
                        </div>
                        Start Now!
                      </span>
                      <span class="btn-submit cursor-pointer flex gap-2 lg:gap-4 items-center mb-4 lg:mb-16 lg:mb-0 !mb-0 bg-box absolute !w-full h-full"></span>
                    </div>
                  </a>
                </div>
              </div>
              <div class=" flex flex-col-reverse lg:flex-row pb-6 lg:pb-0 lg:gap-8 bottom-16 pt-6 lg:px-12 items-center lg:w-full justify-between">
                <div class="flex flex-col lg:flex-row gap-4 items-center">
                  <div class="w-fit flex gap-3 text-[#606060] font-semibold">
                    {/* <svg
                      class="w-6 h-6"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>piqo logo</title>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.67719 23.9861C8.03638 20.4559 8.64307 14.4929 9.00613 10.9242C9.23569 8.66769 11.251 7.02454 13.5075 7.25409C15.764 7.48365 17.4071 9.49901 17.1777 11.7555C17.1687 11.8435 17.1569 11.9305 17.1427 12.0166L19.2608 13.7864H12.5416L14.7009 14.7066L17.2297 24C21.7557 22.1297 24.9405 17.6719 24.9405 12.4703C24.9405 5.58313 19.3573 0 12.4703 0C5.58313 0 0 5.58313 0 12.4703C0 17.659 3.16903 22.1077 7.67719 23.9861ZM8.06168 8.4744C7.97048 9.06186 7.42033 9.46419 6.83287 9.37299C6.24539 9.28182 5.84308 8.73166 5.93425 8.14418C6.02545 7.55672 6.5756 7.1544 7.16307 7.24559C7.75054 7.33676 8.15285 7.88692 8.06168 8.4744ZM8.41787 6.3416C9.00535 6.4328 9.55551 6.03047 9.6467 5.44301C9.73788 4.85553 9.33555 4.30537 8.74809 4.2142C8.16063 4.123 7.61046 4.52533 7.51928 5.11279C7.42809 5.70027 7.83041 6.25043 8.41787 6.3416ZM13.0737 4.86143C12.9825 5.44889 12.4324 5.85122 11.8449 5.76003C11.2574 5.66885 10.8551 5.11868 10.9463 4.53122C11.0375 3.94375 11.5876 3.54143 12.1751 3.6326C12.7626 3.7238 13.1649 4.27395 13.0737 4.86143ZM14.9957 11.0572C14.948 11.5253 14.5299 11.8661 14.0618 11.8185C13.5937 11.7709 13.2528 11.3528 13.3005 10.8847C13.3481 10.4166 13.7662 10.0757 14.2343 10.1233C14.7024 10.1709 15.0433 10.589 14.9957 11.0572Z"
                        fill="black"
                      ></path>
                        </svg>*/}
                    © 2024 The Ananta Studio. All rights reserved.
                  </div>
                  <a
                    target="_blank"
                    href=""
                    class="flex items-center  gap-2 font-semibold"
                  >
                    {/*<svg
                      class="w-6 h-6"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.6772 2.76175H9.02517C6.94517 2.75378 5.24117 4.41078 5.19117 6.49078V17.2278C5.14617 19.3298 6.81417 21.0698 8.91517 21.1148C8.95217 21.1148 8.98917 21.1158 9.02517 21.1148H17.0132C19.1032 21.0408 20.7552 19.3188 20.7432 17.2278V8.03778L15.6772 2.76175Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M15.4154 2.75V5.659C15.4154 7.079 16.5644 8.23 17.9844 8.234H20.7384"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M12.5824 15.9497V9.90869"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M10.2367 13.5942L12.5817 15.9492L14.9267 13.5942"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg> */}
                    Download our proposal
                  </a>
                </div>
                <ul class="socials flex flex-wrap gap-3 justify-center mb-4 lg:mb-0">
                  <a href="https://www.instagram.com/theanantastudio">
                    <div class="social-item style_container__ZhG39">
                      <span class="initial items-center z-[2] flex gap-2 items-center">
                        Instagram
                      </span>
                      <span
                        aria-hidden="true"
                        class="secondary  h-full z-[2] flex gap-2 items-center"
                      >
                        Instagram
                      </span>
                      <span class="social-item !mb-0 bg-box absolute !w-full h-full"></span>
                    </div>
                  </a>
                  <a href="https://twitter.com/TheAnantaStudio">
                    <div class="social-item style_container__ZhG39">
                      <span class="initial items-center z-[2] flex gap-2 items-center">
                        X
                      </span>
                      <span
                        aria-hidden="true"
                        class="secondary  h-full z-[2] flex gap-2 items-center"
                      >
                        X
                      </span>
                      <span class="social-item !mb-0 bg-box absolute !w-full h-full"></span>
                    </div>
                  </a>
                  <a href="https://dribbble.com/theananta">
                    <div class="social-item style_container__ZhG39">
                      <span class="initial items-center z-[2] flex gap-2 items-center">
                        Dribbble
                      </span>
                      <span
                        aria-hidden="true"
                        class="secondary  h-full z-[2] flex gap-2 items-center"
                      >
                        Dribbble
                      </span>
                      <span class="social-item !mb-0 bg-box absolute !w-full h-full"></span>
                    </div>
                  </a>
                  <a href="">
                    <div class="social-item style_container__ZhG39">
                      <span class="initial items-center z-[2] flex gap-2 items-center">
                        Linkedin
                      </span>
                      <span
                        aria-hidden="true"
                        class="secondary  h-full z-[2] flex gap-2 items-center"
                      >
                        Linkedin
                      </span>
                      <span class="social-item !mb-0 bg-box absolute !w-full h-full"></span>
                    </div>
                  </a>
                  <a href="">
                    <div class="social-item style_container__ZhG39">
                      <span class="initial items-center z-[2] flex gap-2 items-center">
                        Gumroad
                      </span>
                      <span
                        aria-hidden="true"
                        class="secondary  h-full z-[2] flex gap-2 items-center"
                      >
                        Gumroad
                      </span>
                      <span class="social-item !mb-0 bg-box absolute !w-full h-full"></span>
                    </div>
                  </a>
                  <a href="">
                    <div class="social-item style_container__ZhG39">
                      <span class="initial items-center z-[2] flex gap-2 items-center">
                        Behance
                      </span>
                      <span
                        aria-hidden="true"
                        class="secondary  h-full z-[2] flex gap-2 items-center"
                      >
                        Behance
                      </span>
                      <span class="social-item !mb-0 bg-box absolute !w-full h-full"></span>
                    </div>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Last div */}
      </div>
    </main>
  );
}
