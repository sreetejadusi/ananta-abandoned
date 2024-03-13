"use client";
import { useState } from "react";

export default function OurPricing() {
  const [isDiscounted, setDiscount] = useState(false);
  return (
    <div class="fold">
      <div class="pad_layout">
        <h3 class="section-title">subscription</h3>
        <div class="relative">
          <div class="grid grid-rows-3 md:grid-rows-1 mb-4 md:grid-cols-3 gap-4">
            <div class="big-box md:h-[27rem] order-1 xl:h-[30rem] flex  flex-col md:flex-row md:row-span-1 md:col-span-2 border-1 border-[#e7e7e7] row-span-2 rounded-24 md:rounded-48 overflow-hidden">
              <div class="first bg-[#E7E7E7] flex flex-col py-8 px-6 xl:p-12">
                <h4 class="text-24 mb-4 md:text-32 font-semibold">Starter</h4>
                <div class="font-medium md:text-24 mb-8 md:mb-4 xl:mb-8">
                  Ignite your startup with a professional design team.
                </div>
                <div class="font-semibold text-32 md:text-48 mb-8 xl:mb-12">
                  {isDiscounted ? "₹12,000/m" : "₹16,000/m"}
                </div>
                <div
                  target="_blank"
                  class="mt-auto"
                  onClick={() => {
                    let person = prompt("Please enter your coupon code", "");
                    if (person == "ANANTA20") {
                      alert("Discount applied!");
                      setDiscount(true);
                    } else {
                      setDiscount(false);
                    }
                  }}
                >
                  <div class="btn !w-full bg-black text-white text-14 md:text-[.875rem] font-semibold style_container__ZhG39">
                    <span class="initial items-center z-[2] flex gap-2 items-center">
                      Get Started
                    </span>
                    <span
                      aria-hidden="true"
                      class="secondary  h-full z-[2] flex gap-2 items-center"
                    >
                      Get Started
                    </span>
                    <span class="btn !w-full bg-black text-white text-14 md:text-[.875rem] font-semibold !mb-0 bg-box absolute !w-full h-full"></span>
                  </div>
                </div>
              </div>
              <div class="second md:min-w-[50%] py-8 px-6 xl:p-12 flex flex-col flex-grow">
                <div class="font-semibold mb-6 md:text-24">
                  What&apos;s included:
                </div>
                <ul class="font-medium list-disc md:text-20 pl-4 flex-grow flex flex-col justify-between ">
                  <li>One request at a time</li>
                  <li>Branding & Marketing</li>
                  <li>Single Static Web Page</li>
                  <li>Average 2 week delivery</li>
                  <li>Flexible and scalable</li>
                  <li>Pause or cancel anytime</li>
                  <li>Easy payment</li>
                </ul>
              </div>
            </div>
            <div class="md:row-span-3 md:order-2 order-0">
              <div class="small-box border-1 md:h-[27rem] xl:h-[30rem]  order-0 md:order-1 md:sticky md:top-[7rem]   border-[#e7e7e7] flex flex-col rounded-24 md:rounded-48 overflow-hidden border-[#E7E7E7] px-6 py-8 md:p-12">
                <svg
                  class="w-8 h-8 mb-3"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.7288 20.7171C21.8367 23.1598 19.8652 25.2255 17.3258 25.3293C17.1388 25.3372 8.02009 25.3188 8.02009 25.3188C5.49296 25.5106 3.28121 23.6947 3.08188 21.2611C3.06686 21.0798 3.07095 11.2956 3.07095 11.2956C2.959 8.85022 4.92773 6.77933 7.46852 6.67158C7.65829 6.66239 16.7647 6.67947 16.7647 6.67947C19.3041 6.49025 21.5227 8.31936 21.7193 10.7647C21.7331 10.9408 21.7288 20.7171 21.7288 20.7171Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M21.7331 13.3061L26.1237 9.71279C27.2117 8.82212 28.8437 9.59812 28.8424 11.0021L28.8264 20.8008C28.8251 22.2048 27.1917 22.9741 26.1064 22.0835L21.7331 18.4901"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <h4 class="text-24 md:text-32 mb-4 font-semibold">
                  Book a call
                </h4>
                <div class="mb-8 md:text-24 font-medium">
                  Learn more about how our studio works and how it can help you.
                </div>
                <a class="mt-auto" target="_blank" href="">
                  <div class="btn mt-auto !w-full bg-black text-white text-14 md:text-[.875rem]   font-semibold style_container__ZhG39">
                    <span class="initial items-center z-[2] flex gap-2 items-center">
                      Book a call
                    </span>
                    <span
                      aria-hidden="true"
                      class="secondary  h-full z-[2] flex gap-2 items-center"
                    >
                      Book a call
                    </span>
                    <span class="btn mt-auto !w-full bg-black text-white text-14 md:text-[.875rem]   font-semibold !mb-0 bg-box absolute !w-full h-full"></span>
                  </div>
                </a>
              </div>
            </div>
            <div class="big-box md:h-[27rem] order-2 xl:h-[30rem] flex flex-col md:flex-row md:row-span-1  md:col-span-2 border-1 border-[#e7e7e7] row-span-2 rounded-24 md:rounded-48 overflow-hidden">
              <div class="first bg-neutral-600/85 text-white flex flex-col py-8 px-6 xl:p-12">
                <h4 class="text-24 mb-4 md:text-32 font-semibold">Standard</h4>
                <div class="font-medium md:text-24 mb-8 md:mb-4 xl:mb-8">
                  Experience the Power of Collaboration and Excellence!
                </div>
                <div class="font-semibold text-32 md:text-48 mb-6 xl:mb-12">
                  {isDiscounted ? "₹25,000/m" : "₹35,000/m"}
                </div>
                <a target="_blank" class="mt-auto" href="">
                  <div class="btn !w-full bg-white text-black  text-14 md:text-[.875rem] font-semibold style_container__ZhG39">
                    <span class="initial items-center z-[2] flex gap-2 items-center">
                      Get Started
                    </span>
                    <span
                      aria-hidden="true"
                      class="secondary  h-full z-[2] flex gap-2 items-center"
                    >
                      Get Started
                    </span>
                    <span class="btn !w-full bg-white text-black  text-14 md:text-[.875rem] font-semibold !mb-0 bg-box absolute !w-full h-full"></span>
                  </div>
                </a>
              </div>
              <div class="second  md:min-w-[50%] py-8 px-6 xl:p-12 flex flex-col flex-grow">
                <div class="font-semibold mb-6 md:text-24">
                  What&apos;s included:
                </div>
                <ul class="font-medium list-disc md:text-20 pl-4 flex-grow flex flex-col justify-between ">
                  <li>One request at a time</li>
                  <li>Higher quality output.</li>
                  <li>Flexible and scalable</li>
                  <li className="font-semibold">Multi-paged Static website</li>
                  <li>Utilizing top expertise.</li>
                  <li>Pause or cancel anytime</li>
                  <li>Easy payment</li>
                </ul>
              </div>
            </div>
            <div class="big-box md:h-[27rem] order-2 xl:h-[30rem] flex flex-col md:flex-row md:row-span-1  md:col-span-2 border-1 border-[#e7e7e7] row-span-2 rounded-24 md:rounded-48 overflow-hidden">
              <div class="first bg-[#000] text-white flex flex-col py-8 px-6 xl:p-12">
                <h4 class="text-24 mb-4 md:text-32 font-semibold">Pro</h4>
                <div class="font-medium md:text-24 mb-8 md:mb-4 xl:mb-8">
                  Design + Product Development utilizing top expertise.
                </div>
                <div class="font-semibold text-32 md:text-48 mb-6 xl:mb-12">
                  {isDiscounted ? "₹35,000/m" : "₹50,000/m"}
                </div>
                <a target="_blank" class="mt-auto" href="">
                  <div class="btn !w-full bg-white text-black  text-14 md:text-[.875rem] font-semibold style_container__ZhG39">
                    <span class="initial items-center z-[2] flex gap-2 items-center">
                      Get Started
                    </span>
                    <span
                      aria-hidden="true"
                      class="secondary  h-full z-[2] flex gap-2 items-center"
                    >
                      Get Started
                    </span>
                    <span class="btn !w-full bg-white text-black  text-14 md:text-[.875rem] font-semibold !mb-0 bg-box absolute !w-full h-full"></span>
                  </div>
                </a>
              </div>
              <div class="second  md:min-w-[50%] py-8 px-6 xl:p-12 flex flex-col flex-grow">
                <div class="font-semibold mb-6 md:text-24">
                  What&apos;s included:
                </div>
                <ul class="font-medium list-disc md:text-20 pl-4 flex-grow flex flex-col justify-between ">
                  <li>One request at a time</li>
                  <li>Best quality output.</li>
                  <li>Flexible and scalable</li>
                  <li>Utilizing top expertise.</li>
                  <li>Pause or cancel anytime</li>
                  <li>Easy payment</li>
                  <li className="font-bold">
                    Fully Functional Application (Mobile + Web)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
