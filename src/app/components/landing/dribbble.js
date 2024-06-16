export default function AnantaDribbble() {
  return (
    <div className="mb-6 flex">
      <div>
        <div className="recent mb-6">Recent works</div>
        <p className="desc ">
          As a tight-knit team of experts, we create memorable and emotional
          websites, digital experiences, and native apps. Discover the power of
          emotion-driven design with us.
        </p>
      </div>
      <div className="flex flex-col lg:ml-auto relative">
        <div className="h-[11rem] fill-black stroke-black w-[11rem] absolute bottom-[11rem] right-0 rotate-12">
          <img src="madeinindia.svg" className="lion" />

          <div className="h-[11rem] w-[11rem] flex absolute top-0 justify-center items-center">
            <img
              src="lion.svg"
              className="h-[5.5rem] fill-black stroke-black w-[5.5rem] absolute"
            />
          </div>
        </div>

        <div></div>
        <div className="hidden lg:block -mt-10 ml-auto">
          Over 4 thrilling years of experience!
        </div>
        <a
          className="!hidden lg:!block lg:mt-auto"
          href="https://dribbble.com/theananta"
        >
          <div className="flex !gap-4 drible-btn  style_container__ZhG39">
            <span className="initial items-center z-[2] flex gap-2 ">
              <div autoplay="" className=" w-8">
                <img src="dribble.svg" />
              </div>
              Ananta&apos;s Dribbble
            </span>
            <span
              aria-hidden="true"
              className="secondary  h-full z-[2] flex gap-2 items-center"
            >
              <div autoplay="" className=" w-8">
                <img src="dribble.svg" />
              </div>
              Ananta&apos;s Dribbble
            </span>
            <span className="flex !gap-4 drible-btn  !mb-0 bg-box absolute !w-full h-full"></span>
          </div>
        </a>
      </div>
    </div>
  );
}
