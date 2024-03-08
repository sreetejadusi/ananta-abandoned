export default function OurServices() {
  return (
    <div class="fold pad_layout styles_container__dEjBN">
      <h3 class="section-title">Skills</h3>
      <div class="main-text  mb-10 lg:mb-[4.5rem]">
        Unlock{" "}
        <span class="bg-black text-[2.125rem] lg:text-[4rem] w-12 h-9 lg:w-32 lg:h-24 text-center inline-block aspect-square  rounded-[4rem]">
          <div
            class="w-6 lg:w-12 leading-4 mb-1 inline-block invert"
            autoplay=""
          >
            <img src="unlock.svg" />
          </div>
        </span>{" "}
        your design potential with our studio's expertise
      </div>
      <div class="projects grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-6">
        <div class="project cursor-pointer">
          <button class="sqr">
            <div autoplay="" class="w-10  lg:w-16"></div>
          </button>
          <div class="title">Illustrations</div>
          <div></div>
        </div>
        <div class="project cursor-pointer">
          <button class="sqr ">
            <div autoplay="" class="w-10  lg:w-16"></div>
          </button>
          <div class="title">Marketing</div>
          <div></div>
        </div>
        <div class="project cursor-pointer">
          <button class="sqr ">
            <div autoplay="" class="w-10  lg:w-16"></div>
          </button>
          <div class="title">Development</div>
          <div></div>
        </div>
        <div class="project cursor-pointer">
          <button class="sqr ">
            <div autoplay="" class="w-10  lg:w-16"></div>
          </button>
          <div class="title">Product Design</div>
          <div></div>
        </div>
        <div class="project cursor-pointer">
          <button class="sqr ">
            <div autoplay="" class="w-10  lg:w-16"></div>
          </button>
          <div class="title">Branding</div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
