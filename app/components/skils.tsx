"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SkilsSec: React.FC = () => {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  const skillSecRef = useRef(null);

  let requestAnimationFrameId: any = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e: any) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start: number, target: number, amount: number) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: skillSecRef.current,
        scrub: true,
        start: "-400px",
        end: "0px",
      },
    });

    timeline
      .from(skillSecRef.current, {
        zIndex: 10,
        filter: "blur(5px)",
      })
      .to(skillSecRef.current, { filter: "blur(0px)", zIndex: 100 }, 0);
  }, []);
  return (
    <>
      <section
        className=" h-[115vh] bg-black relative overflow-x-hidden overflow-y-clip -mt-24  "
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
        ref={skillSecRef}
      >
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-10">
          <p>Skils</p>
          <h1 className="text-6xl font-bold">My Superpowers</h1>
        </div>

        <Image
          src="/assets/bg-elements/green.svg"
          alt="purple"
          height={700}
          width={700}
          className=" absolute top-1/2 left-1/2 -translate-x-2/3 -translate-y-1/2 z-0 "
          //   data-scroll
          //   data-scroll-speed="0.5"
        />
        <Image
          src="/assets/bg-elements/blue.svg"
          alt="purple"
          height={700}
          width={700}
          className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 "
          //   data-scroll
          //   data-scroll-speed="0.7"
        />
        <div className=" absolute top-0 left-0 " ref={plane1}>
          <img src="/assets/skills/g1.png" alt="" />
        </div>
        <div className=" absolute top-0 left-0 " ref={plane2}>
          <img src="/assets/skills/g2.png" alt="" />
        </div>
        <div className=" absolute top-0 left-0 " ref={plane3}>
          <img src="/assets/skills/g3.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default SkilsSec;
