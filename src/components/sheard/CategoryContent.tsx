'use client'
import { getCategoryData, getProductsData } from "@/lib/allDataFetch";
import { ICategoryDataType, IProductDataType } from "@/types/allDataType";
import  ProductsCategorys  from "./ProductsCategorys";
import { useEffect, useState } from "react";
import NotFound from "../not-found/NotFound";

export default function CategoryContent({
  categoryId,
}: {
  categoryId : string ;
}) {
  const [products, setPoducts] = useState<IProductDataType[]>([]);
  const [categories, setCategories] = useState<ICategoryDataType[]>([]);
  useEffect(() => {
    const contorldata = async() => {
    const products: IProductDataType[] = await getProductsData();
    const categories: ICategoryDataType[] = await getCategoryData();
    setPoducts(products);
    setCategories(categories)
    }
    contorldata();
  }, []);
  console.log(categoryId)
  const categoryProducts = products.filter(
      (product) => product.category === categoryId,
    );
  const head = categories.find((product) => product.id === categoryId);
  if(head?.id === categoryId){
    return (
      <div className="mt-8 h-screen">
      <div className="flex items-center gap-5">
        <div
          className="
            flex size-14 shrink-0 items-center justify-center
            rounded-xl bg-gradient-to-br from-gray-200 to-gray-300
            text-2xl sm:size-16 sm:text-3xl
            transition-transform duration-300
            group-hover:scale-105
          "
        >
          {head?.icon}
        </div>
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            {head?.nameBn}
          </h2>
          <p>
            {categoryProducts.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম
            ও পরিবর্তন
          </p>
        </div>
      </div>
      <ProductsCategorys categoryProducts={categoryProducts} />
    </div>
    )
  }
  return (
    <NotFound />
  );
}
