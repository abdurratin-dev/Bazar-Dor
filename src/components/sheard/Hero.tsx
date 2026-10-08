"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import HeroImg from "@/assets/bazar-hero.png"

export default function Hero() {
  const [date, setDate] = useState("");
  useEffect(() => {
    const newDate = new Date().toLocaleDateString("bn-BD", {
      dateStyle: "full",
    });
    setDate(newDate);
  }, []);
  return (
    <div className="bg-white shadow-md py-6 grid grid-cols-2 rounded-2xl px-7">
      <div className="wrap-anywhere flex flex-col justify-between">
        <div className="grid gap-5">
          <p className="bg-[#E2F0E7] text-[#05893E] font-semibold w-fit h-fit py-2 px-4 rounded-full">{date}</p>
          <h2 className="text-4xl font-bold">আজকের বাজারের দাম এক নজরে</h2>
        </div>
        <p className="text-gray-500 line-clamp-2">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন- সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
        <Button className="bg-[#05893E] text-white rounded-lg">hllo</Button>
      </div>
      <div className="flex items-center justify-end">
        <Image src={HeroImg} alt="Image" width={300} height={300} />
      </div>
    </div>
  );
}
