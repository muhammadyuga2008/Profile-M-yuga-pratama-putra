"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-32 pt-20 bg-zinc-950">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-semibold text-white text-center">
              M.yuga pratama putra<br />
              <span className="text-5xl md:text-[6rem] font-bold mt-4 block leading-none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Portofolio 
              </span>
            </h1>
          </div>
        }
      >
        {/* Container wrapper untuk mengunci aspect ratio */}
        <div className="mx-auto h-full w-full max-w-4xl overflow-hidden rounded-2xl">
          <Image
            src="/image/fotoyuga.jpeg"
            alt="Showcase Portofolio"
            height={1000}
            width={750}
            // aspect-[3/4] akan memaksa foto menjadi portrait/tegak
            className="mx-auto h-full w-full object-cover aspect-[3/4]"
            draggable={false}
            priority
          />
        </div>
      </ContainerScroll>
    </div>
  );
}