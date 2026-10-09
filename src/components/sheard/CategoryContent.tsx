import { getCategoryData, getProductsData } from "@/lib/allDataFetch";
import { ICategoryDataType, IProductDataType } from "@/types/allDataType";
import ProductCard from "../cards/ProductCard";

export default async function CategoryContent({
  params,
}: {
  params: { categoryId: string };
}) {
  const { categoryId } = await params;
  const products: IProductDataType[] = await getProductsData();
  const categories: ICategoryDataType[] = await getCategoryData();
  const categoryProducts = products.filter(
    (product) => product.category === categoryId,
  );
  const head = categories.find((product) => product.id === categoryId);
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
          <h2 className="flex items-center gap-2 text-2xl font-bold">{head?.nameBn}</h2>
          <p>{categoryProducts.length.toLocaleString('bn-BD')}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
        </div>
      </div>
      <div className="mt-6 px-2">
        <p className="text-gray-500">
        মোট {categoryProducts.length.toLocaleString('bn-BD')}টি পণ্য দেখানো হচ্ছে
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 mt-3 md:grid-cols-3 lg:grid-cols-4">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
