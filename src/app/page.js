"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import Swiper JS
import { Navigation } from "swiper/modules";

import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect } from "react";
import LandingHero from "./components/landing/hero";
import AnantaNavigationBar from "./components/ananta_navigation_bar";
import SliderSwiper from "./components/slider_swiper";

export default function Home() {
  useEffect(() => {
    // init Swiper:
    const swiper = new Swiper(".swiper", {
      modules: [Navigation],
      slidesPerView: "auto",
      // freeMode: true,
      // createElements: true,
      centeredSlides: true,
      spaceBetween: 32,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
  useGSAP(() => {
    const tl = gsap
      .timeline({})
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
  });
  return (
    <main className="">
      {/* <div class="z-2 absolute w-screen h-screen bg-black loader items-center flex justify-center">
        <img src="radhasundariyam.png" class="w-1/4" />
      </div> */}
      <AnantaNavigationBar />
      <div class="h-[5.3125rem]  lg:h-[6.875rem]"></div>
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
                  <span class="initial items-center z-[2] flex gap-2 items-center">
                    <div autoplay="" class=" w-8"></div>
                    Piqo’s Dribbble
                  </span>
                  <span
                    aria-hidden="true"
                    class="secondary  h-full z-[2] flex gap-2 items-center"
                  >
                    <div autoplay="" class=" w-8"></div>
                    Piqo’s Dribbble
                  </span>
                  <span class="flex !gap-4 drible-btn  !mb-0 bg-box absolute !w-full h-full"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="relative my-6 lg:my-12">
          <div class="swiper">
            <div class="swiper-wrapper">
              <SliderSwiper imageSrc="/reema-holidays.png" />
              <SliderSwiper imageSrc="/greetify.png" />
              <SliderSwiper imageSrc="/bheeshma.png" />
            </div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
