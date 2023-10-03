"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skillsArr = [
  {
    title: "HTML",
    level: "Expert",
  },
  {
    title: "CSS",
    level: "Expert",
  },
  {
    title: "Javascript",
    level: "Expert",
  },
  {
    title: "React",
    level: "Expert",
  },
  {
    title: "NextJS",
    level: "Expert",
  },
  {
    title: "TailwindCSS",
    level: "Expert",
  },
  {
    title: "Redux",
    level: "Intermediate",
  },

  {
    title: "Wordpress",
    level: "Intermediate",
  },
  {
    title: "React Native",
    level: "Beginner",
  },
  {
    title: "Flutter",
    level: "Beginner",
  },
  {
    title: "Three JS",
    level: "Intermediate",
  },
  {
    title: "Figma",
    level: "Intermediate",
  },
  {
    title: "NodeJS",
    level: "Expert",
  },
  {
    title: "Express JS",
    level: "Expert",
  },
  {
    title: "MongoDB",
    level: "Expert",
  },
  {
    title: "Redis",
    level: "Expert",
  },
  {
    title: "MySql",
    level: "Intermediate",
  },
  {
    title: "PostgreSQL",
    level: "Intermediate",
  },
  {
    title: "SQLite",
    level: "Intermediate",
  },
  {
    title: "DynamoDB",
    level: "Beginner",
  },
  {
    title: "Socket.io",
    level: "Intermediate",
  },
  {
    title: "GO Lang",
    level: "Beginner",
  },
  {
    title: "C++",
    level: "Beginner",
  },
  {
    title: "Nginx",
    level: "Intermediate",
  },
  {
    title: "Docker",
    level: "Intermediate",
  },
  {
    title: "Firebase",
    level: "Intermediate",
  },
  {
    title: "AWS",
    level: "Intermediate",
  },
  {
    title: "AWS EC2",
    level: "Expert",
  },
  {
    title: "AWS S3",
    level: "Expert",
  },
  {
    title: "AWS SES",
    level: "Expert",
  },
  {
    title: "AWS Lambda",
    level: "Intermediate",
  },

  {
    title: "Google Cloud",
    level: "Intermediate",
  },

  {
    title: "Azure",
    level: "Beginner",
  },

  {
    title: "Cloudflare",
    level: "Intermediate",
  },
  {
    title: "Digital Ocean",
    level: "Expert",
  },
];

const SkilsSec: React.FC = () => {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  const skillSecRef = useRef(null);
  const gridRef = useRef(null);

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

    const gridTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: skillSecRef.current,
        scrub: true,
        start: "200px",
        end: "bottom-=100px  ",
        markers: true,
      },
    });

    gridTimeline
      .from(gridRef.current, {
        zIndex: 10,
        filter: "blur(5px)",
        transform: "scale(1.35)",
      })
      .to(
        gridRef.current,
        {
          filter: "blur(0px)",
          zIndex: 100,
          transform: "scale(1)",
        },
        0
      );
  }, []);
  return (
    <section className="bg-black  ">
      <div
        className=" h-[105vh] relative overflow-x-hidden overflow-y-clip -mt-20  "
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
        <div className=" absolute top-0 left-0 z-0" ref={plane1}>
          <img src="/assets/skills/g1.png" alt="" />
        </div>
        <div className=" absolute top-0 right-0 z-0" ref={plane2}>
          <img src="/assets/skills/g2.png" alt="" />
        </div>
        <div className=" absolute top-0 left-0 z-0" ref={plane3}>
          <img src="/assets/skills/g3.png" alt="" />
        </div>
      </div>
      <div className="bg-black relative z-10 overflow-hidden">
        <div
          className="bg-black  max-w-screen-xl  xl:mx-auto mx-5 py-32 "
          ref={gridRef}
        >
          <div className="grid grid-rows-5 grid-flow-col gap-4 place-content-center ">
            {skillsArr.map((item, key) => (
              <div
                key={key}
                className="bg-gray-900 w-40 h-24 grid place-items-center text-center  rounded-lg skill-card "
              >
                <div>
                  <h2 className="text-lg">{item.title}</h2>
                  <p className="text-sm text-gray-500 ">{item.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkilsSec;
