export default function SliderSwiper(props) {
  return (
    <div
      class="swiper-slide swiper-slide-prev"
      style={{ "margin-right": "32px" }}
      data-swiper-slide-index="1"
    >
      <div class="hover:scale-105 transition-transform duration-300">
        <div
          tabindex="0"
          class="slide h-[15rem] lg:h-[unset] lg:w-[30rem] overflow-hidden lg:aspect-[1.4] "
        >
          <div
            class="h-full group  flex overflow-hidden relative rounded-[1.5rem] w-full landing-hero-img "
            alt="Iconly"
          >
            <img
              class="landing-hero-img z-[3] inset-0 w-full h-full object-cover absolute transition-opacity duration-500"
              src={props.imageSrc}
              alt={props.imageSrc}
            />
            {/* <video
              alt="Iconly"
              class="w-full h-full z-[2] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500  inset-0"
              loop=""
              autoplay=""
            >
              <source
                src="https://dash.piqo.design/uploads/iconly_6789216206.mp4"
                type="video/mp4"
              />
            </video> */}
          </div>
        </div>
      </div>
    </div>
  );
}
