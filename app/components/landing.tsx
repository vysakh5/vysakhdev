/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LandingSec: React.FC = () => {
  const titleSecRef = useRef(null);
  const aboutSecRef = useRef(null);
  const projectSecRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "100px",
        end: "+=500px",
      },
    });

    timeline
      .from(titleSecRef.current, { opacity: 1, zIndex: 10 })
      .to(
        titleSecRef.current,
        { opacity: 0.1, filter: "blur(3px)", zIndex: 100 },
        0
      );

    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "200px",
        end: "800px",
      },
    });

    timeline2
      .from(aboutSecRef.current, { opacity: 0, filter: "blur(3px)" })
      .to(aboutSecRef.current, { opacity: 1, filter: "blur(0px)" }, 0);
  }, []);

  return (
    <>
      <section className=" relative">
        {/* Background video */}

        <div className="absolute  z-0 w-full h-[90vh] overflow-hidden ">
          <video autoPlay muted loop className=" w-screen  ">
            <source src="/assets/bg-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute  z-0 w-full h-[90vh] overflow-hidden bg-video-overlay"></div>

        <div
          className="max-w-screen-xl  xl:mx-auto mx-5 min-h-[90vh]   flex flex-col justify-center gap-5"
          ref={titleSecRef}
        >
          <h1
            className="text-6xl font-bold leading-normal w-1/2 main-text-grd z-10"
            data-scroll
            data-scroll-speed="0"
          >
            Building Things <br />
            That Inspire.
          </h1>
          <p
            className="w-1/2 text-xl leading-normal z-10"
            data-scroll
            data-scroll-speed="0.1"
          >
            Hey 👋️, Vysakh here. Im a full-stack JS developer with more than 3
            years of experience. I love to build things that solve real-world
            problems.
          </p>
          <div>
            <button
              className="primary-btn  px-8 py-4 font-bod rounded z-10 "
              data-scroll
              data-scroll-speed="0.1"
            >
              Know More
            </button>
          </div>
        </div>

        {/* About section */}
        <div
          className="  flex justify-center gap-5 relative py-32"
          ref={aboutSecRef}
        >
          <div className="w-full md:w-1/2 grid place-content-center gap-3  ">
            <div className=" w-fit  ">About My Self</div>
            <h1 className="text-4xl font-bold leading-normal z-10">
              A Closer Look at My Professional Pathway
            </h1>
            <div className="z-10">
              <Image
                src="/assets/vysakh1.webp"
                alt="vysakh arakkal"
                width={300}
                height={200}
                className="rounded-lg float-left mr-5 mt-2 object-cover "
              />
              <p className="text-lg  leading-relaxed ">
                My name is Vysakh Arakkal, a dedicated software engineer based
                in Kerala, India. I embarked on my educational journey at KTU,
                where I pursued a Btech degree in Electronics and Communication.
                Although I didn't successfully complete my degree, I've managed
                to build a robust career in software development, specializing
                in NodeJS and ReactJS, with three years of hands-on experience.
              </p>

              <p className="text-lg leading-relaxed">
                As a self-taught developer, I hold a strong passion for
                programming and the continual exploration of new technologies.
                This curiosity extends beyond my professional life as I find
                myself drawn to hobby electronics. As a maker, I've channeled
                this interest into various personal projects, particularly in
                the realms of embedded systems and IoT. This blend of passion
                and hands-on experience allows me to continuously innovate and
                grow as a developer.
              </p>
            </div>
            <Image
              src="/assets/bg-elements/purple.svg"
              alt="purple"
              height={800}
              width={800}
              className="absolute top-16 right-0 z-0"
              data-scroll
              data-scroll-speed="0.3"
            />
            <Image
              src="/assets/bg-elements/green.svg"
              alt="green"
              height={500}
              width={500}
              className="absolute top-0 left-24 z-0 "
              data-scroll
              data-scroll-speed="0.2"
            />
            <Image
              src="/assets/bg-elements/pink.svg"
              alt="purple"
              height={700}
              width={700}
              className="absolute top-0 right-0 z-0"
              data-scroll
              data-scroll-speed="0.5"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingSec;
