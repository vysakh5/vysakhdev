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
        markers: true,
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
    <section ref={mainSecRef} className="bg-black relative ">
      <div className=" flex flex-col md:flex-row max-w-screen-xl  xl:mx-auto mx-5 py-32 z-10 relative min-h-screen ">
        <div className="w-full md:w-1/2">
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
        <div className="w-full md:w-1/2"> image </div>
      </div>
      <Image
        src="/assets/bg-elements/purple.svg"
        alt="purple"
        height={800}
        width={800}
        className="absolute -top-16 -left-36 rotate-90 z-0"
        data-scroll
        data-scroll-speed="0.3"
      />

      <Image
        src="/assets/bg-elements/pink.svg"
        alt="purple"
        height={700}
        width={700}
        className="absolute top-0 rotate-90 -left-32 z-0"
        data-scroll
        data-scroll-speed="0.4"
      />
    </section>
  );
};

export default ProjectSec;
