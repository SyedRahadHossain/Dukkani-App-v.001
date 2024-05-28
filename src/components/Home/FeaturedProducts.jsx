import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import "swiper/css/bundle";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

import "/src/swiperJs/swiperFeaturedProducts.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
const FeaturedProducts = () => {
  return (
    // <div className="flex flex-row justify-center m-8">
    //   <div className="h-96 carousel carousel-vertical rounded-box">
    //     <div className="carousel-item h-full">
    //       <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
    //     </div>
    //     <div className="carousel-item h-full">
    //       <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
    //     </div>
    //     <div className="carousel-item h-full">
    //       <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
    //     </div>
    //     <div className="carousel-item h-full">
    //       <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" />
    //     </div>
    //     <div className="carousel-item h-full">
    //       <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
    //     </div>
    //     <div className="carousel-item h-full">
    //       <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" />
    //     </div>
    //     <div className="carousel-item h-full">
    //       <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
    //     </div>
    //   </div>
    // </div>
    <>
      <h1 className="text font-bold text-3xl text-center mt-8">
        Featured Products
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        // eslint-disable-next-line no-undef
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <div className="">
          <SwiperSlide className="">
            <img
              className="rounded-lg"
              src="/src/assets/Picture/Ladies Collection/Handloom Collection/Handloom-lwhl-01g.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="/src/assets/Picture/Ladies Collection/Handloom Collection/Handloom-lwhl-02g.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="/src/assets/Picture/Ladies Collection/Handloom Collection/Handloom-lwhl-03g.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="/src/assets/Picture/Ladies Collection/Handloom Collection/Handloom-lwhl-04h.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="/src/assets/Picture/Ladies Collection/Handloom Collection/Handloom-lwhl-05h.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="/src/assets/Picture/Ladies Collection/Handloom Collection/Handloom-lwhl-06h.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="/src/assets/Picture/Ladies Collection/Handloom Collection/Handloom-lwhl-07j.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="/src/assets/Picture/Ladies Collection/Handloom Collection/Handloom-lwhl-08j.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="/src/assets/Picture/Ladies Collection/Handloom Collection/Handloom-lwhl-09j.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="/src/assets/Picture/Ladies Collection/Handloom Collection/Handloom-lwhl-10j.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="/src/assets/Picture/Ladies Collection/Handloom Collection/Handloom-lwhl-11j.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="/src/assets/Picture/Ladies Collection/Handloom Collection/Handloom-lwhl-12j.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="/src/assets/Picture/Ladies Collection/Handloom Collection/Handloom-lwhl-13j.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="/src/assets/Picture/Ladies Collection/Handloom Collection/Handloom-lwhl-14j.jpg"
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};

export default FeaturedProducts;
