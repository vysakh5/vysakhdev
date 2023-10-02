"use client";
/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Image from "next/image";
import LandingSec from "@/app/components/landing";
import ProjectSec from "@/app/components/projects";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main>
      <LandingSec />
      <ProjectSec />
      <div className="h-screen">1</div>
      <div className="h-screen">1</div>
      <div className="h-screen">1</div>
    </main>
  );
}
