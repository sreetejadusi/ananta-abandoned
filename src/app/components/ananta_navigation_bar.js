import HamburgerMenu from "./hamburger_menu";

export default function AnantaNavigationBar() {
  return (
    <nav id="navigation" className="px-6 fixed items-center justify-between flex w-full duration-500 mix-blend-difference z-[9999]">
      {/* <div className="hidden phone:block relative">
    <HamburgerMenu />
  </div> */}
      <a title="go to homepage"
        className=""
        href="/">
        <button className="lottie-container">
          <img src="white-logo.svg" className="w-[16%]" />
          {/* <img src="favicon.ico" className="h-[56%] phone:hidden" /> */}
        </button>
      </a>
      <div className="flex items-center gap-x-2">
        {/* <div className="phone:flex hidden">
          <div className="btn btn-white !w-fit style_container__ZhG39 text-white">
            <div className="initial">
              <span className="flex w-fit">Contact us</span>
            </div>

            <div className="secondary" aria-hidden="true">
              <span className="flex w-fit">Contact us</span>
            </div>
          </div>
        </div> */}

        <div>
          <span className="initial items-center z-[2] flex py-2 px-4 rounded-full">
            <div className="w-8 hidden lg:block">
              <img src="party_popper.svg" />
            </div>
            <p className="text-white">Let's collaborate</p>
          </span>
        </div>
        {/* <div className="phone:hidden">
      <HamburgerMenu />
    </div> */}
      </div>
    </nav>
  );
}