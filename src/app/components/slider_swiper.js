export default function SliderSwiper(props) {
  return (
    <div class="swiper-slide">
      <div class="hover:scale-105 transition-transform duration-300">
        <div class="slide h-[15rem] lg:h-[unset] overflow-hidden lg:aspect-[1.4]">
          <div class="h-full flex overflow-hidden group relative rounded-[1.5rem] w-full">
            <img
              class="z-[3] inset-0 w-full h-full  object-cover absolute border-opacity-0 group-hover:opacity-0 transition-opacity duration-500"
              src={props.imageSrc}
              alt="Website"
            />
            <video
              alt="Skale"
              class="w-full h-full z-[2] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 inset-0"
              loop={true}
              autoplay={true}
            >
              <source src="paper.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
