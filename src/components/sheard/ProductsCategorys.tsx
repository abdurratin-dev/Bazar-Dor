"use client";
import { IProductDataType } from "@/types/allDataType";
import ProductCard from "../cards/ProductCard";
import { Button, Dropdown, Label } from "@heroui/react";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

export default function ProductsCategorys({
  categoryProducts,
}: {
  categoryProducts: IProductDataType[];
}) {
  const [dropDownText,setDropDownText] = useState("default");
  const products = categoryProducts;
  let sortProducts = products;
  const handleSorting = () => {
    if(dropDownText === "default"){
        sortProducts = categoryProducts
    }else if(dropDownText === "max") {
        sortProducts = products.sort((a, b) => a.today - b.today);
    } else {
        sortProducts = products.sort((a, b) => b.today - a.today);
    }
  };
  return (
    <>
      <div className="mt-6 px-2 flex items-center justify-between">
        <p className="text-gray-500">
          মোট {categoryProducts.length.toLocaleString("bn-BD")}টি পণ্য দেখানো
          হচ্ছে
        </p>
        <Dropdown>
          <Button aria-label="Menu" variant="secondary">
            {dropDownText === "default" ? "ডিফল্ট" : dropDownText === "min" ? "দাম কম থেকে বেশি" : "দাম বেশি থেকে কম"}
          </Button>
          <Dropdown.Popover>
            <Dropdown.Menu>
                <Dropdown.Item
                onClick={() => {
                    setDropDownText("default")
                    handleSorting()
                }}
              >
                <Label className="flex items-center gap-2">{dropDownText === "default" ? <><IoMdCheckmark /> ডিফল্ট</> : <><div className="w-3.5"></div>ডিফল্ট</>}</Label>
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                    setDropDownText("min")
                  handleSorting()
                }}
              >
                <Label className="flex items-center gap-2">{dropDownText === "min" ? <><IoMdCheckmark /> দাম কম থেকে বেশি</> : <><div className="w-3.5"></div>দাম কম থেকে বেশি</>}</Label>
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                    setDropDownText("max")
                  handleSorting()
                }}
              >
                <Label className="flex items-center gap-2">{dropDownText === "max" ? <><IoMdCheckmark /> দাম বেশি থেকে কম</> : <><div className="w-3.5"></div>দাম বেশি থেকে কম</>}</Label>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 mt-3 md:grid-cols-3 lg:grid-cols-4">
        {sortProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
