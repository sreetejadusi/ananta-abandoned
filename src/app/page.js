"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import { useState } from "react";
import LandingHero from "./components/landing/hero";

export default function Home() {


  const [selectedFAQ, setSelectedFAQ] = useState(-1);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl =
      gsap.globalTimeline.fromTo(
        ".web-curtain",
        { y: 0 },
        { y: "-100%", ease: "Power4.easeOut", stagger: 0.13, duration: 2, delay: 1.5 }
      )
    tl.to(".storysection", {
      scrollTrigger: {
        trigger: ".homesection",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
      yPercent: 0,
    });

    ScrollTrigger.create({
      trigger: '.homesection',
      scrub: true,
      start: "top top",
      end: "bottom 200%",
      opacity: 1,
      animation: gsap.to('.blob', {
        opacity: 0,
      }),
      markers: true,
    });

    // STORYTEXT APPEARANCE
    const storytext = document.querySelector('.storytext');

    const text = new SplitType.create(storytext, { types: 'words, chars' });
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: ".storysection",
        start: "top 60%",
        end: "bottom 100%",
        scrub: true,
        duration: 100,
      },
      opacity: 0.2,
      stagger: 0.1,
    });

    // EXPERTISE ROLLING TEXT
    const repeatCount = 8;
    const ptl = gsap.timeline({ paused: true });
    const split = new SplitType.create(".rolling", { type: "chars" });

    split.chars.forEach((obj, i) => {
      let txt = obj.innerText;
      let clone = `<div class="cloneText"> ${txt} </div>`;
      let newHTML = `<div class="originalText"> ${txt} </div>${clone}`;
      obj.innerHTML = newHTML;
      gsap.set(obj.childNodes[1], {
        yPercent: i % 2 === 0 ? -100 : 100
      });
      let tween = gsap.to(obj.childNodes, {
        repeat: repeatCount,
        ease: "none",
        yPercent: i % 2 === 0 ? "+=100" : "-=100"
      });
      tl.add(tween, 0);
    });
    gsap.to(ptl, { progress: 1, duration: 4, ease: "power4.inOut" });

  });
  return (
    <main className="mainsection relative overflow-hidden">
      <div className="blob absolute -z-10"></div>
      <div className="web-curtain fixed top-0 w-full h-full z-[99999] bg-black flex items-center justify-center flex-col">
        <div className="flex flex-col w-[30%] text-white">
          <img src="white-logo.svg" className="w-full" />
          <div className="text-2xl -translate-y-2 opacity-60">
            be limitless.
          </div>
        </div>
      </div>
      <div className="homesection flex flex-col gap-12 lg:gap-[6.25rem]">
        <div className="">
          <LandingHero />
        </div>
      </div>
      {/* <div className="h-screen"></div> */}
      {/* <div className="storysection data-scroll-container h-screen flex flex-col items-center justify-start px-12 py-20 bg-[#030d12] text-[black] z-[30]">
        <h1 className="absolute -z-10 text-[20em] bottom-0 font-black text-[#cccccc19]">ST☻RY</h1>
        <h1 className="typewriter py-10 text-xl">[ OUR STORY ]</h1>
        <p className="storytext text-4xl">
          We're always striving to create the best products and execute projects to the highest standards.
          <br /><br />
          We're constantly in pursuit of new trends to meet our customers' needs in the best possible way.
        </p>
      </div>
      <div className="bg-white text-left gap-x-1">
        <h1 className="service font-semibold">UI/UX.</h1>
        <h1 className="service font-semibold">WEB DEVELOPMENT.</h1>
        <h1 className="service font-semibold">BRANDING.</h1>
        <h1 className="service font-semibold">ANDROID DEVELOPMENT.</h1>
        <h1 className="service font-semibold">E-COMMERCE.</h1>
        <h1 className="service font-semibold">GRAPHIC DESIGNING.</h1>
        <h1 className="service font-semibold">SEO.</h1>
        <h1 className="service font-semibold">API DEVELOPMENT.</h1>
        <h1 className="service font-semibold">DIGITAL MARKETING.</h1>
        <h1 className="service font-semibold">VIDEO PRODUCTION</h1>
      </div>
      <div className="h-screen flex flex-col items-start justify-center text-black bg-white pl-12 py-20 z-[35]">
        <div className="text-left">
          <p className="py-1">something to discuss?</p>
          <p className="py-1">just grab your coffee! we have all the time you need</p>
        </div>
        <h1 className="text-[16vw] font-medium">LET'S TALK</h1>
      </div> */}
      {/* <footer className="flex absolute bottom-0 w-full z-50 justify-between text-black py-6 px-4 text-sm bg-[#ffffff13] backdrop-blur-3xl">
        <p>© 2024 theAnanta. All Rights Reserved</p>
        <div className="flex justify-between w-1/4">
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
          <a>Write to us</a>
        </div>
      </footer> */}
    </main>
  );
}