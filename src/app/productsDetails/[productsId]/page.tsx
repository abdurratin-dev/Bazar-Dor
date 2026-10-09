import ProductDetails from "@/components/sheard/ProductDetails";
import { CloudCog } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default async function ProductsDetailsPage({params}:{params: Promise<{productId: string}>}) {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <ProductDetails params={params} />
        </Suspense>
    )
}