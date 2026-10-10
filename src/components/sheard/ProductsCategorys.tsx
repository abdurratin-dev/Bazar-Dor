import { IProductDataType } from "@/types/allDataType";
import ProductCard from "../cards/ProductCard";
import { Button, Dropdown, Label } from "@heroui/react";

export function ProductsCategorys({categoryProducts}:{categoryProducts:IProductDataType[]}) {
    
    return <>
    <div className="mt-6 px-2">
        <p className="text-gray-500">
          মোট {categoryProducts.length.toLocaleString("bn-BD")}টি পণ্য দেখানো
          হচ্ছে
        </p>
        <Dropdown>
      <Button aria-label="Menu" variant="secondary">
        Actions
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="new-file" textValue="New file">
            <Label>New file</Label>
          </Dropdown.Item>
          <Dropdown.Item id="copy-link" textValue="Copy link">
            <Label>Copy link</Label>
          </Dropdown.Item>
          <Dropdown.Item id="edit-file" textValue="Edit file">
            <Label>Edit file</Label>
          </Dropdown.Item>
          <Dropdown.Item id="delete-file" textValue="Delete file" variant="danger">
            <Label>Delete file</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 mt-3 md:grid-cols-3 lg:grid-cols-4">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div></>
}