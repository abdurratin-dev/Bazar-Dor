
import CategoryContent from "@/components/sheard/CategoryContent";
import { Suspense } from "react";

interface ICatergoryPageProps{
  params : Promise<{ categoryId: string }>
}
export default async function CategoryPage({ params }:ICatergoryPageProps) {
  return (
   <Suspense fallback={<div>Loading...</div>}>
      <CategoryContent params={params} />
    </Suspense>
  )
}
