"use client";
import Image from "next/image";

import React, { useRef, useEffect } from "react";

import img1 from "@/public/galleryPage/img1.webp";
import img2 from "@/public/galleryPage/img2.webp";
import img3 from "@/public/galleryPage/img3.webp";
import img4 from "@/public/galleryPage/img4.webp";
import img6 from "@/public/galleryPage/img6.webp";

import styles from "./styles.module.css";

const GridImage = () => {
  return (
    // <div className="max-w-8xl mx-auto py-16">
    //   <div className="flex flex-col gap-5 md:flex-row">
    //     <div className="flex flex-col gap-5">
    //       <div>
    //
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="w-full my-8 flex flex-col gap-y-10 ">
      <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center gap-y-8 gap-x-8">
        <Image
          src={img6}
          alt="1"
          className="2xl:w-[340px] 2xl:h-[310px] lg:w-[280px] max-w-[700px] h-[250px] rounded-3xl object-cover"
          placeholder="blur"
        />
        <Image
          src={img6}
          alt="1"
          className="2xl:w-[340px] 2xl:h-[310px] lg:w-[280px] max-w-[700px] h-[250px] rounded-3xl object-cover"
          placeholder="blur"
        />
        <Image
          src={img6}
          alt="1"
          className="2xl:h-[310px] lg:w-[320px] h-[250px] rounded-3xl object-cover lg:flex-1 lg:max-w-[880px] max-w-[700px]"
          placeholder="blur"
        />
      </div>

      <div className="flex flex-row lg:gap-x-8 max-w-[700px] lg:max-w-full mx-auto justify-between lg:m-0 sm:gap-x-6">
        <div className="flex flex-col lg:gap-y-10 gap-y-8 flex-wrap sm:flex-nowrap">
          <Image
            src={img6}
            alt="1"
            className="flex:1 2xl:flex-none 2xl:w-[420px] 2xl:h-[300px] lg:h-[550px] w-full h-[250px] sm:h-[500px] rounded-3xl object-cover lg:w-max-[700px]"
            placeholder="blur"
          />
          <Image
            src={img6}
            alt="1"
            className="block sm:hidden 2xl:block 2xl:w-[420px] 2xl:h-[300px] lg:h-[250px] lg:w-[280px] h-[250px] rounded-3xl object-cover"
            placeholder="blur"
          />
        </div>
        <Image
          src={img6}
          alt="1"
          className="hidden 2xl:block 2xl:flex-1 2xl:h-[650px] 2xl:w-[716px] lg:h-[550px] lg:w-[400px] w-[280px] h-[200px] rounded-3xl object-cover"
          placeholder="blur"
        />
        <div className="flex flex-col lg:gap-y-10 gap-y-8">
          <Image
            src={img6}
            alt="1"
            className="hidden sm:block lg:flex-1 2xl:flex-none 2xl:block lg:h-[550px] lg:w-[550px] 2xl:w-[420px] 2xl:h-[300px] w-[300px] h-[230px] rounded-3xl object-cover"
            placeholder="blur"
          />
          <Image
            src={img6}
            alt="1"
            className="hidden sm:block lg:hidden 2xl:block 2xl:w-[420px] 2xl:h-[300px] lg:h-[250px] lg:w-[280px] w-[300px] h-[230px] rounded-3xl object-cover"
            placeholder="blur"
          />
        </div>
      </div>

      <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center gap-y-8 gap-x-8">
        <Image
          src={img6}
          alt="1"
          className="2xl:h-[310px] lg:w-[320px] h-[250px] rounded-3xl object-cover lg:flex-1 lg:max-w-[880px] max-w-[700px]"
          placeholder="blur"
        />
        <Image
          src={img6}
          alt="1"
          className="2xl:w-[340px] 2xl:h-[310px] lg:w-[280px] h-[250px] rounded-3xl object-cover max-w-[700px]"
          placeholder="blur"
        />
        <Image
          src={img6}
          alt="1"
          className="2xl:w-[340px] 2xl:h-[310px] lg:w-[280px] h-[250px] rounded-3xl object-cover max-w-[700px]"
          placeholder="blur"
        />
      </div>
    </div>
  );
};

const Carousel = () => {
  useEffect(() => {
    const pictures = document.querySelectorAll(".slider .picture");
    const next = document.getElementById("next");
    const prev = document.getElementById("previous");

    let active = 0; // Start at the first image

    function loadShow() {
      let stt = 0;
      pictures.forEach((pic, index) => {
        if (index === active) {
          pic.style.transform = `none`;
          pic.style.zIndex = 1;
          pic.style.filter = "none";
          pic.style.opacity = 1;
        } else {
          const diff = Math.abs(index - active);
          pic.style.transform = `translateX(${
            150 * (index > active ? diff : -diff)
          }px) scale(${1 - 0.2 * diff})`;
          pic.style.zIndex = -diff;
          pic.style.filter = "blur(10px)";
          pic.style.opacity = diff > 2 ? 0 : 0.6;
        }
      });
    }

    loadShow();

    next.onclick = function () {
      active = (active + 1) % pictures.length; // Loop back to the first image
      loadShow();
    };

    prev.onclick = function () {
      active = (active - 1 + pictures.length) % pictures.length; // Loop back to the last image
      loadShow();
    };

    // Cleanup function
    return () => {
      next.onclick = null;
      prev.onclick = null;
    };
  }, []);

  return (
    <div className="mt:4 sm:mt-8 lg:mt-12 slider relative w-full h-[400px] sm:h-[320px] md:h-[350px] lg:h-[470px] xl:h-[570px] 2xl:h-[650px] flex items-center justify-center overflow-hidden">
      <button
        className={`absolute h-[30px]  bottom-0 left-12 pb-12 text-[50px] sm:bottom-auto sm:p-0 sm:h-fit sm:text-[150px] md:text-[200px] lg:text-[250px] xl:text-[270px] 2xl:text-[350px] text-customArrow bg-transparent border-none font-bold inline-block sm:left-[30px] md:left-[10px] xl:left-[50px] 2xl:left-[50=px] ${styles["text-shadow-md"]}`}
        id="previous"
      >
        &lt;
      </button>

      <Image
        src={img3}
        alt="1"
        className={`picture mb-4 sm:mb-0 absolute transform -translate-y-1/2 rounded-3xl h-[250px] sm:h-[270px] md:h-[300px] lg:h-[400px] xl:h-[520px] 2xl:h-[600px] ${styles["image-glow"]} w-fit`}
      />
      <Image
        src={img4}
        alt="2"
        className={`picture mb-4 sm:mb-0 absolute  -translate-y-1/2 rounded-3xl h-[250px] sm:h-[270px] md:h-[300px] lg:h-[400px] xl:h-[520px] 2xl:h-[600px] ${styles["image-glow"]} w-fit`}
      />
      <Image
        src={img3}
        alt="3"
        className={`picture mb-4 sm:mb-0 absolute -translate-y-1/2 rounded-3xl h-[250px] sm:h-[270px] md:h-[300px] lg:h-[400px] xl:h-[520px] 2xl:h-[600px] ${styles["image-glow"]} w-fit`}
      />
      <Image
        src={img4}
        alt="4"
        className={`picture mb-4 sm:mb-0 absolute -translate-y-1/2 rounded-3xl h-[250px] sm:h-[270px] md:h-[300px] lg:h-[400px] xl:h-[520px] 2xl:h-[600px] w-fit ${styles["image-glow"]}`}
      />

      <button
        className={`absolute h-[30px]  bottom-0 right-12 pb-12 text-[50px] sm:bottom-auto sm:p-0 sm:h-fit sm:text-[150px] md:text-[200px] lg:text-[250px] xl:text-[250px] 2xl:text-[350px] text-customArrow bg-transparent border-none font-bold inline-block sm:right-[30px] md:right-[10px] xl:right-[50px] 2xl:right-[50px] ${styles["text-shadow-md"]}`}
        id="next"
      >
        &gt;
      </button>
    </div>
  );
};

export { GridImage, Carousel };
