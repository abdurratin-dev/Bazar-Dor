export const getCategoryData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {cache: "force-cache"});
    if (!res.ok) {
        throw new Error("Failed to fetch category data");
    }
    const data = await res.json();
    return data;
}

export const getProductsData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {next: { revalidate: 10 }});
    if (!res.ok) {
        throw new Error("Failed to fetch product data");
    }
    const data = await res.json();
    return data;
}