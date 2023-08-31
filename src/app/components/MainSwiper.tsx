'use client'

import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/autoplay'

const MainSwiper = () => {
    return (
        <div className="main-swiper">
            <h2>이벤트</h2>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 7000, disableOnInteraction: false }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Link href="https://www.goodchoice.kr/more/eventView/3348?page=0">
                        <img
                            src="./img/main/main_slide1.png"
                            alt="여름휴가는 어촌 바다로"
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/more/eventView/608?page=0">
                        <img
                            src="./img/main/main_slide2.jpg"
                            alt="페이백 50﹪ 쿠폰 이벤트"
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/more/eventView/3348?page=0">
                        <img
                            src="./img/main/main_slide3.png"
                            alt="여름휴가는 어촌 바다로"
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="http://more/eventView/3307?page=0">
                        <img
                            src="./img/main/main_slide4.jpg"
                            alt="레저도 강원특별자치도"
                        />
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default MainSwiper
