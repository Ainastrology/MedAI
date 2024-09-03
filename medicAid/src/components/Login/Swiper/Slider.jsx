// import React from 'react'
// import '../Login.css'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// import { assets } from '../../../assets/assets';

// const Slider = () => {
//   return (
//     <div className="swiper-container">
//       <h5>Log in to Consult with Our Specialists</h5>
//         <Swiper
//           effect="coverflow"
//           grabCursor={true}
//           centeredSlides={true}
//           loop={true}
//           slidesPerView={3} /* Show 3 images side by side */
//           spaceBetween={20} /* Space between slides */
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 50,
//             modifier: 2.5,
//           }}
//           pagination={{ el: '.swiper-pagination', clickable: true }}
//           navigation={{
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//             clickable: true,
//           }}
//           modules={[EffectCoverflow, Pagination, Navigation]}
//         >
         
//           <SwiperSlide>
//             <img src={assets.Fdoc1} alt="slide_image_1" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={assets.Fdoc2} alt="slide_image_2" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={assets.Fdoc3} alt="slide_image_3" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={assets.Mdoc1} alt="slide_image_4" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={assets.Mdoc2} alt="slide_image_5" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={assets.Mdoc3} alt="slide_image_6" />
//           </SwiperSlide>
//         </Swiper>
//         <div className="slider-controller">
//           <div className="swiper-button-prev slider-arrow">
//             <ion-icon name="arrow-back-outline"></ion-icon>
//           </div>
//           <div className="swiper-button-next slider-arrow">
//             <ion-icon name="arrow-forward-outline"></ion-icon>
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//     </div>
//   )
// }

// export default Slider