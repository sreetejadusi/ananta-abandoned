"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import SliderSwiper from "./components/slider_swiper";

export default function Home() {
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
    // .fromTo(
    //   ".word",
    //   { y: 40 },
    //   {
    //     ease: "Power4.easeOut",
    //     y: 0,
    //     stagger: 0.13,
    //     duration: 2,
    //   }
    // );
  });
  return (
    <main className="">
      {/* <div class="z-2 absolute w-screen h-screen bg-black loader items-center flex justify-center">
        <img src="radhasundariyam.png" class="w-1/4" />
      </div> */}
      <nav className="p-6 fixed items-center justify-between flex w-full z-10 bg-white">
        <div class="hidden lg:block  relative">
          <button class="hamburger flex cursor-pointer rounded-full">
            <svg
              class=""
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 15H20"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M4 8H20"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <a
          title="go to homepage"
          className=" h-12 w-12 left-0 right-0  ml-1 lg:ml-auto block mt-[0.375rem] lg:absolute  m-auto -top-10 bottom-0 lg:mt-auto -translate-y-1/2 lg:translate-y-0 -translate-x-1/2"
          href="/"
        >
          <button class="lottie-container  ">
            <div
              autoplay=""
              className="scale-110 items-center flex justify-center"
              style={{ width: "5.5rem", height: "5.5rem" }}
            >
              <img src="logo.svg" className="h-[56%]" />
            </div>
          </button>
        </a>
        <div className="flex items-center gap-x-2">
          <div className="btn btn-white !w-fit">
            <span className="flex w-fit">Contact Us</span>
          </div>
          <div className="btn btn-black">Submit your project</div>
        </div>
      </nav>
      <div class="h-[5.3125rem]  lg:h-[6.875rem]"></div>
      <div className="landing pt-6">
        <div className="px-12">
          <h2 className="main-text mb-12">
            <div className="flex flex-wrap">
              <div
                className="word inline- flex items-center mr-4"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px)",
                }}
              >
                <div className="h-[130%] flex items-center overflow-hidden">
                  <span
                    className="relative text-inside will-change-auto"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px)",
                    }}
                  >
                    Transform
                  </span>
                </div>
              </div>
              <div
                className="word inline- flex items-center mr-4"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px)",
                }}
              >
                <div className="h-[130%] flex items-center overflow-hidden">
                  <span
                    className="relative text-inside will-change-auto"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px)",
                    }}
                  >
                    your
                  </span>
                </div>
              </div>
              <div
                className="word inline- flex items-center mr-4"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px)",
                }}
              >
                <div className="h-[130%] flex items-center overflow-hidden">
                  <span
                    className="relative text-inside will-change-auto"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px)",
                    }}
                  >
                    vision
                  </span>
                </div>
              </div>
              <div
                className="word inline- flex items-center mr-4"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px)",
                }}
              >
                <div className="h-[130%] flex items-center overflow-hidden">
                  <span
                    className="relative text-inside will-change-auto"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px)",
                    }}
                  >
                    into
                  </span>
                </div>
              </div>
              <div
                className="word inline- flex items-center mr-4"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px)",
                }}
              >
                <div className="h-[130%] flex items-center overflow-hidden">
                  <span
                    className="relative text-inside will-change-auto"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px)",
                    }}
                  >
                    reality!
                  </span>
                </div>
              </div>
            </div>
          </h2>
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
                {/* Over 4 thrilling years of experience! */}
              </div>
            </div>
          </div>
        </div>
        <div id="sliderWrapper" class="relative my-6 lg:my-12">
          <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
            <div
              class="swiper-wrapper flex"
              style={{
                "transition-duration": "0ms",
                transform: "translate3d(-1024px, 0px, 0px)",
              }}
            >
              <SliderSwiper imageSrc="stemquest.png" />
              <SliderSwiper imageSrc="stemquest.png" />
              <SliderSwiper imageSrc="reema-holidays.png" />
              <SliderSwiper imageSrc="greetify.png" />
              <SliderSwiper imageSrc="bheeshma.png" />
            </div>
          </div>
          {/* <div
            class="!hidden lg:!flex  slider-btn-wrapper pad_layout"
            style="pointer-events: none;"
          >
            <div id="nextBtnslide" class="slider-btn" style="scale: 0;"></div>
            <div id="prevBtnslide" class="slider-btn" style="scale: 0;"></div>
          </div> */}
        </div>
      </div>
    </main>
  );
}
