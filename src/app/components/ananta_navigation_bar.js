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
          <div className="btn btn-white !w-fit style_container__ZhG39">
            <div className="initial">
              <span className="flex w-fit">Contact us</span>
            </div>

            <div className="secondary" aria-hidden="true">
              <span className="flex w-fit">Contact us</span>
            </div>
          </div>
        </div>

        <div>
          <a tabindex="0" href="/submit-project">
            <div class="btn btn-black style_container__ZhG39">
              <span class="initial items-center z-[2] flex gap-2 items-center">
                <div class="w-8 hidden lg:block">
                  <img src="party_popper.svg" />
                </div>
                Submit your project
              </span>
              <span
                aria-hidden="true"
                class="secondary  h-full z-[2] flex gap-2 items-center"
              >
                <div class="flex gap-2.5">
                  Let's make it together!
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.34106 6.02155L18 6.00006L17.9796 15.6602"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M18 6.00153L6.00043 18"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </span>
              <span class="btn btn-black !mb-0 bg-box absolute !w-full h-full"></span>
            </div>
          </a>
        </div>
        <div className="phone:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
}
