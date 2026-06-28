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
              Membangun Pengalaman Digital yang Luar Biasa <br />
              <span className="text-5xl md:text-[6rem] font-bold mt-4 block leading-none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Portofolio Kreatif Saya
              </span>
            </h1>
          </div>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1400&auto=format&fit=crop"
          alt="Showcase Portofolio"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full w-full object-center"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}