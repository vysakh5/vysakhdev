/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectSec: React.FC = () => {
  const mainSecRef = useRef(null);

  useLayoutEffect(() => {
    const animationContainer = mainSecRef.current;

    // Create the animation timeline
    const projetTL = gsap.timeline({
      scrollTrigger: {
        trigger: animationContainer,
        scrub: true,
        start: "-800px",
        end: "-250px",
      },
    });

    // Create the animation sequence
    projetTL
      .from(animationContainer, {
        clipPath: `inset(15%)`,
        transform: "translatey(0)",
        filter: "blur(3px)",
        opacity: 0,
      })
      .to(
        animationContainer,
        {
          clipPath: "inset(0%)",

          transform: "translatey(-5%)",
          filter: "blur(0px)",
          opacity: 1,
        },
        0
      );
  }, []);

  return (
    <section ref={mainSecRef} className="bg-black relative pb-16 ">
      <div className=" grid place-items-center  max-w-screen-xl  xl:mx-auto mx-5  z-10 relative py-36">
        <div className="w-full md:w-2/3">
          <div className=" w-fit  ">Projects</div>
          <h1 className="text-4xl font-bold leading-normal z-10">
            Sneak Peek into My Creations
          </h1>{" "}
          <p className="text-lg  leading-relaxed mt-5 z-10">
            Although I have worked on over 100 projects throughout my career,
            the majority of them remain unfinished, much like an endless game of
            whack-a-mole that I just can't seem to win.Although I have worked on
            over 100 projects throughout my career, the majority of them remain
            unfinished
          </p>
          <p className="text-lg  leading-relaxed ">
            Although I have worked on over 100 projects throughout my career,
            the majority of them remain unfinished, much like an endless game of
            whack-a-mole that I just can't seem to win.
          </p>
          <button className="primary-btn  px-8 py-4 font-bod rounded z-10 mt-5">
            Check my Github
          </button>
        </div>
      </div>
      <Image
        src="/assets/bg-elements/purple.svg"
        alt="purple"
        height={800}
        width={800}
        className="absolute top-16 left-36  z-0"
        data-scroll
        data-scroll-speed="0.3"
      />
      <Image
        src="/assets/bg-elements/pink.svg"
        alt="purple"
        height={700}
        width={700}
        className="absolute top-32 right-0 z-0"
        data-scroll
        data-scroll-speed="0.8"
      />
      <Image
        src="/assets/bg-elements/green.svg"
        alt="purple"
        height={700}
        width={700}
        className="absolute top-32 left-32 z-0"
        data-scroll
        data-scroll-speed="0.4"
      />
      {/* Galary section */}

      <div className="p-5 grid grid-flow-col-dense justify-center gap-2 h-full pb-36">
        <div className=" flex flex-col gap-2">
          <div
            className=" h-64 w-64 rounded-lg"
            style={{
              background: "url('/assets/projects/13.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className=" h-64 w-64 rounded-lg"
            style={{
              background: "url('/assets/projects/22.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className=" flex flex-col gap-2">
          <div
            className=" h-64 w-64 rounded-lg"
            style={{
              background: "url('/assets/projects/25.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className=" h-64 w-64 rounded-lg"
            style={{
              background: "url('/assets/projects/18.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div
          className=" flex flex-col gap-2  h-full w-96 rounded-lg"
          style={{
            background: "url('/assets/projects/1.jpg')",
            backgroundSize: "cover",
          }}
        ></div>
        <div className=" flex flex-col gap-2">
          <div
            className=" h-64 w-96 rounded-lg"
            style={{
              background: "url('/assets/projects/gitex.jpeg')",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className=" h-64 w-96 rounded-lg"
            style={{
              background: "url('/assets/projects/9.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className=" flex flex-col gap-2">
          <div className=" h-64 w-64">
            <video muted autoPlay loop>
              <source src="/assets/projects/v1.mp4" type="video/mp4" />
            </video>
          </div>
          <div
            className=" h-64 w-64 rounded-lg"
            style={{
              background: "url('/assets/projects/8.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSec;
