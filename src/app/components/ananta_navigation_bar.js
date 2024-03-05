import HamburgerMenu from "./hamburger_menu";

export default function AnantaNavigationBar() {
  return (
    <nav className="p-6 fixed items-center justify-between flex w-full z-10 bg-white">
      <div class="hidden phone:block relative">
        <HamburgerMenu />
      </div>
      <a
        title="go to homepage"
        className=" h-12 w-12 left-0 right-0  ml-1 phone:ml-auto block mt-[0.375rem] phone:absolute  m-auto -top-10 bottom-0 phone:mt-auto -translate-y-1/2 phone:translate-y-0 -translate-x-1/2"
        href="/"
      >
        <button class="lottie-container  ">
          <div
            className="scale-110 items-center flex justify-center"
            style={{ width: "5.5rem", height: "5.5rem" }}
          >
            <img src="logo.svg" className="h-[56%] hidden phone:block" />
            <img src="favicon.ico" className="h-[56%] phone:hidden" />
          </div>
        </button>
      </a>
      <div className="flex items-center gap-x-2">
        <div className="phone:flex hidden">
          <div className="btn btn-white !w-fit">
            <span className="flex w-fit">Contact Us</span>
          </div>
        </div>
        <div className="btn btn-black">Submit your project</div>
        <div className="phone:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
}
