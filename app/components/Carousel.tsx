"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type CarouselProps = {
  images: string[];
  name: string;
};

export default function Carousel({ images, name }: CarouselProps) {

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="w-full md:h-80 rounded-lg overflow-hidden"
      style={{ height: "100%" }}
    >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`${name} ${index + 1}`}
              className="w-full h-full"
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
