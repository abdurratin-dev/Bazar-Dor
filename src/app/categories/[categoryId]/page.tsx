'use client'
import CategoryContent from "@/components/sheard/CategoryContent";
import CategoryProductsSkeleton from "@/components/skeleton/CategoryProductsSkeleton";
import { Suspense } from "react";

interface ICatergoryPageProps{
  params : Promise<{ categoryId: string }>
}
export default function CategoryPage({ params }:ICatergoryPageProps) {
  return (
   <Suspense fallback={<CategoryProductsSkeleton />}>
      <CategoryContent params={params} />
    </Suspense>
  )
}
