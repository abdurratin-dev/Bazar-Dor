import ProductDetails from "@/components/sheard/ProductDetails";
import ProductDetailsSkeleton from "@/components/skeleton/ProductDetailsSkeleton";
import { Suspense } from "react";

interface ProductsDetailsPageProps{
    params: Promise<{
        productsId: string
    }>
}

export default function ProductsDetailsPage({params}:ProductsDetailsPageProps) {
    
    return (
        <Suspense fallback={<ProductDetailsSkeleton />}>
            <ProductDetails params={params} />
        </Suspense>
    )
}