import { IProductDataType } from "@/types/allDataType";

export default function MarketsPrice({
  product,
}: {
  product: IProductDataType;
}) {
  return (
    <div className="space-y-4">
      {/* Section Heading */}
      <div className="flex items-center gap-3">
        <div>
          <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
            বাজারভিত্তিক আজকের দাম
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            বিভিন্ন বাজারের দামের তুলনা
          </p>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-50">
                <th className="border-b border-gray-200 px-4 py-4 text-sm font-bold text-gray-600">
                  বাজার
                </th>
                <th className="border-b border-gray-200 px-4 py-4 text-sm font-bold text-gray-600">
                  বিভাগ
                </th>
                <th className="border-b border-gray-200 px-4 py-4 text-sm font-bold text-emerald-700">
                  সর্বনিম্ন
                </th>
                <th className="border-b border-gray-200 px-4 py-4 text-sm font-bold text-rose-700">
                  সর্বাধিক
                </th>
                <th className="border-b border-gray-200 px-4 py-4 text-sm font-bold text-indigo-700">
                  গড় দাম
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {product?.markets?.map((item, ind) => {
                const averagePrice = (item.max + item.min) / 2;
                
                return (
                  <tr
                    key={ind}
                    className="transition-colors duration-200 hover:bg-indigo-50/40"
                  >
                    {/* Market */}
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="font-semibold text-gray-900">
                        {item.market}
                      </span>
                    </td>

                    {/* Division */}
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="inline-flex rounded-lg bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 sm:text-sm">
                        {item.division}
                      </span>
                    </td>

                    {/* Minimum Price */}
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="inline-flex rounded-lg bg-emerald-50 px-3 py-1.5 text-sm font-bold text-emerald-700">
                        {item.min.toLocaleString("bn-BD")}
                      </span>
                    </td>

                    {/* Maximum Price */}
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="inline-flex rounded-lg bg-rose-50 px-3 py-1.5 text-sm font-bold text-rose-700">
                        {item.max.toLocaleString("bn-BD")}
                      </span>
                    </td>

                    {/* Average Price */}
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="inline-flex rounded-lg bg-indigo-50 px-3 py-1.5 text-sm font-bold text-indigo-700">
                        {averagePrice.toLocaleString("bn-BD", {
                          maximumFractionDigits: 2,
                        })}
                      </span>
                    </td>
                  </tr>
                );
              })}

              {product?.markets?.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-10 text-center text-sm text-gray-500"
                  >
                    এই পণ্যের কোনো বাজারের তথ্য পাওয়া যায়নি।
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
