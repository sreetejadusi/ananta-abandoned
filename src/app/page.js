"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Swiper JS
import { Navigation } from "swiper/modules";

import Swiper from "swiper";
import "swiper/css";
// import { useEffect, useRef } from "react";
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
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.globalTimeline.fromTo(
      ".lion",
      { rotate: 0 },
      { rotate: 360, duration: 54, repeat: -1 }
    );
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
      {/* <div class="z-2 absolute w-screen h-screen bg-black loader items-center flex justify-center">
        <img src="radhasundariyam.png" class="w-1/4" />
      </div> */}
      <AnantaNavigationBar />
      <div class="h-[5.3125rem]  lg:h-[6.875rem]"></div>
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
        <div></div>
      </div>
    </main>
  );
}
