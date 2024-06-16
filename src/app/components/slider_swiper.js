export default function SliderSwiper(props) {
  return (
    <div className="swiper-slide">
      <div className="hover:scale-105 transition-transform duration-300">
        <div className="slide h-[15rem] lg:h-[unset] overflow-hidden lg:aspect-[1.4]">
          <div className="h-full flex overflow-hidden group relative rounded-[1.5rem] w-full">
            <img
              className="z-[3] inset-0 w-full h-full  object-cover absolute border-opacity-0 group-hover:opacity-0 transition-opacity duration-500"
              src={props.imageSrc}
              alt="Website"
            />
            <video
              alt="Skale"
              className="w-full h-full z-[2] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 inset-0"
              loop={true}
              autoplay={true}
            >
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
