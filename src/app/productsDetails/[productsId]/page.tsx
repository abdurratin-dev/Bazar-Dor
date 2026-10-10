'use client'
import ProductDetails from "@/components/sheard/ProductDetails";
import ProductDetailsSkeleton from "@/components/skeleton/ProductDetailsSkeleton";
import { Suspense } from "react";

export default function ProductsDetailsPage({params}:{params: Promise<{productId: string}>}) {
    
    return (
        <Suspense fallback={<ProductDetailsSkeleton />}>
            <ProductDetails params={params} />
        </Suspense>
    )
}