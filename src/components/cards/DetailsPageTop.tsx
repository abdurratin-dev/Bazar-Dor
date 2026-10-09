import { unitBangla } from "@/lib/units";
import { IProductDataType, IUnitBangla } from "@/types/allDataType";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";

export default function DetailsPageTop({
  product,
}: {
  product: IProductDataType;
}) {
  const unit = unitBangla[product?.unit as keyof IUnitBangla];
  const isUp = product?.change.dir === "up";

  const priceParcentege = isUp
    ? ((product?.today - product?.yesterday) / product?.today) * 100
    : ((product?.yesterday - product?.today) / product?.yesterday) * 100;

  const arrowIcon = isUp ? (
    <FaAnglesUp className="text-xs sm:text-sm" />
  ) : (
    <FaAnglesDown className="text-xs sm:text-sm" />
  );
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-6 lg:p-7">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-blue-50/70 blur-3xl" />

      <div className="relative flex flex-col gap-6 sm:gap-7 md:flex-row md:items-center md:justify-between">
        {/* Product Information */}
        <div className="flex min-w-0 flex-1 items-start gap-4 sm:gap-5">
          {/* Product Image / Emoji */}
          <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-gray-100 text-4xl shadow-sm sm:size-20 sm:text-5xl">
            {product?.image}
          </div>

          {/* Product Details */}
          <div className="min-w-0 flex-1 space-y-2">
            <h2 className="text-xl font-extrabold leading-snug tracking-tight text-gray-900 sm:text-2xl lg:text-3xl">
              {product?.nameBn}
            </h2>

            <p className="text-sm font-medium text-gray-500 sm:text-base">
              প্রতি {unit} {product?.categoryNameBn}
            </p>

            {/* Price Change Description */}
            <div
              className={`inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold sm:text-sm ${
                product?.change.dir === "up"
                  ? "bg-red-50 text-red-600"
                  : product?.change.dir === "down"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-gray-100 text-gray-600"
              }`}
            >
              <span>
                {product?.change.dir === "up"
                  ? "↗"
                  : product?.change.dir === "down"
                    ? "↘"
                    : "—"}
              </span>

              <span>
                {product?.change.dir === "up"
                  ? "গতকালের তুলনায় দাম বেড়েছে"
                  : product?.change.dir === "down"
                    ? "গতকালের তুলনায় দাম কমেছে"
                    : "গতকালের তুলনায় দাম অপরিবর্তিত"}
              </span>

              {product?.change.dir === "up" ? (
                <span>
                  {(product?.today - product?.yesterday).toLocaleString(
                    "bn-BD",
                  )}{" "}
                  টাকা
                </span>
              ) : product?.change.dir === "down" ? (
                <span>
                  {(product?.yesterday - product?.today).toLocaleString(
                    "bn-BD",
                  )}{" "}
                  টাকা
                </span>
              ) : null}
            </div>
          </div>
        </div>

        {/* Today's Price Card */}
        <div className="w-full shrink-0 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-4 sm:p-5 md:w-auto md:min-w-52 md:text-center lg:min-w-60">
          <p className="text-sm font-medium text-gray-500">আজকের বাজারদর</p>

          <div className="mt-2 flex items-baseline gap-2 md:justify-center">
            <span className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              {product?.today.toLocaleString("bn-BD")}
            </span>

            <span className="text-sm font-semibold text-gray-500">টাকা</span>
          </div>

          {/* Percentage Change */}
          <div className="mt-4 flex items-center justify-between gap-3 border-t border-gray-200 pt-3 md:justify-center">
            <div
              className={`flex shrink-0 items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold sm:text-sm ${
                product?.change.dir === "up"
                  ? "bg-red-100 text-red-700"
                  : product?.change.dir === "down"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-gray-100 text-gray-600"
              }`}
            >
              <span>{arrowIcon}</span>
              <span>{Math.abs(priceParcentege).toFixed(2)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
