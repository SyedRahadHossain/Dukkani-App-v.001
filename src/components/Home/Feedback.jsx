// Import Swiper styles
import "swiper/css";

import "swiper/css/bundle";

import "/src/swiperJs/swiperFeedback.css";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Feedback = () => {
  return (
    <div className="sm:mx-20 md:mx-96 ">
      <h1 className="text-center font-bold text-2xl">Happy Customer</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="">
            <div className="card w-94 bg-base-100 shadow-md ml-10 mt-10 flex justify-center items-center sm:mx-10 my-10">
              <figure className="px-10 pt-10 sm:w-20 md:w-52  ">
                <img
                  src="/src/assets/Picture/CustomerPicture/user-1.png"
                  alt="Customer"
                  className="rounded-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Arefin</h2>
                <p>Genuine product, Fast delivery. </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div className="card w-94 bg-base-100 shadow-md ml-10 mt-10 flex justify-center items-center sm:mx-10 my-10">
              <figure className="px-10 pt-10 sm:w-20 md:w-52  ">
                <img
                  src="/src/assets/Picture/CustomerPicture/user-1.png"
                  alt="Customer"
                  className="rounded-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Arefin</h2>
                <p>Genuine product, Fast delivery. </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div className="card w-94 bg-base-100 shadow-md ml-10 mt-10 flex justify-center items-center sm:mx-10 my-10">
              <figure className="px-10 pt-10 sm:w-20 md:w-52  ">
                <img
                  src="/src/assets/Picture/CustomerPicture/user-1.png"
                  alt="Customer"
                  className="rounded-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Arefin</h2>
                <p>Genuine product, Fast delivery. </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div className="card w-94 bg-base-100 shadow-md ml-10 mt-10 flex justify-center items-center sm:mx-10 my-10">
              <figure className="px-10 pt-10 sm:w-20 md:w-52  ">
                <img
                  src="/src/assets/Picture/CustomerPicture/user-1.png"
                  alt="Customer"
                  className="rounded-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Arefin</h2>
                <p>Genuine product, Fast delivery. </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
       
       
        
       
        
      </Swiper>
    </div>
  );
};

export default Feedback;
