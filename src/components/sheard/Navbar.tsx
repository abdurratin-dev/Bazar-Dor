"use client";
import { ShoppingCartIcon } from "lucide-react";
import { Button } from "@heroui/react";
import { useEffect, useState } from "react";
import { ICategoryDataType } from "@/types/allDataType";
import Link from "next/link";
import { getCategoryData } from "@/lib/allDataFetch";

export default function Navbar() {
  const [date, setDate] = useState("");
  const [categoryData, setCategoryData] = useState<ICategoryDataType[]>([]);
  useEffect(() => {
    const currentDate = new Date().toLocaleDateString("bn-BD", {
      dateStyle: "full",
    });
    const CategoryData = async () => {
      const data = await getCategoryData();
      setCategoryData(data);
    };
    CategoryData();
    setDate(currentDate);
  }, []);

  return (
    <nav>
      <div className="container mx-auto lg:px-30 px-5 py-3">
        <div className="flex items-center justify-between mb-2">
          {/*Navbar left side */}
          <div className="flex items-center gap-2 h-full">
            <div className="bg-[#05893E] rounded-lg p-2 w-10 h-full">
              <ShoppingCartIcon className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-[#05893E]">বাজার দর</h2>
              <p className="text-xs text-gray-600">{date}</p>
            </div>
          </div>
          {/*Navbar right side */}
          <div className="sm:flex items-center gap-4 hidden">
            <Button className="text-[#05893E] bg-white hover:bg-[#f0f0f0] rounded-lg font-semibold">
              সাইন ইন
            </Button>
            <Button className="bg-[#05893E] text-white hover:bg-[#109e4d] px-4 py-2 rounded-lg font-semibold">
              সাইন আপ
            </Button>
          </div>
        </div>
        {/*Navlinks*/}
        <div className="lg:flex items-center hidden">
            {categoryData.map((category) => (
              <Link key={category.id} href={`/categories/${category.id}`} className="px-4 py-2 text-[#05893E] font-semibold flex items-center gap-2 rounded-md hover:bg-[#05893E] hover:text-white">
                <p>{category.icon}</p>
                <p>
                    {category.nameBn}
                    </p>
              </Link>
            ))}
        </div>
      </div>
    </nav>
  );
};
