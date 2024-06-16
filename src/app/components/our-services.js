export default function OurServices() {
  return (
    <div className="fold pad_layout styles_container__dEjBN">
      <h3 className="section-title">Skills</h3>
      <div className="main-text  mb-10 lg:mb-[4.5rem]">
        Unlock{" "}
        <span className="bg-black text-[2.125rem] lg:text-[4rem] w-12 h-9 lg:w-32 lg:h-24 text-center inline-block aspect-square  rounded-[4rem]">
          <div
            className="w-6 lg:w-12 leading-4 mb-1 inline-block invert"
            autoplay=""
          >
            <img src="unlock.svg" />
          </div>
        </span>{" "}
        your design potential with our studio&apos;s expertise
      </div>
      <div className="projects grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-6">
        <div className="project cursor-pointer">
          <button className="sqr">
            <div autoplay="" className="w-10  lg:w-16">
              <img src="pen_tool.svg" />
            </div>
          </button>
          <div className="title">Illustrations</div>
          <div></div>
        </div>
        <div className="project cursor-pointer">
          <button className="sqr ">
            <div autoplay="" className="w-10  lg:w-16">
              <img src="marketing.svg" />
            </div>
          </button>
          <div className="title">Marketing</div>
          <div></div>
        </div>
        <div className="project cursor-pointer">
          <button className="sqr ">
            <div autoplay="" className="w-10  lg:w-16">
              <img src="development.svg" />
            </div>
          </button>
          <div className="title">Development</div>
          <div></div>
        </div>
        <div className="project cursor-pointer">
          <button className="sqr ">
            <div autoplay="" className="w-10  lg:w-16">
              <img src="product-design.svg" />
            </div>
          </button>
          <div className="title">Product Design</div>
          <div></div>
        </div>
        <div className="project cursor-pointer">
          <button className="sqr ">
            <div autoplay="" className="w-10  lg:w-16">
              <img src="branding.svg" />
            </div>
          </button>
          <div className="title">Branding</div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
