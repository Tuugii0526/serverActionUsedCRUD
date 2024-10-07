import { fetchProducts } from "@/lib/data"
import { ItemCard } from "./ItemCard";

export const Products=async ()=>{
    const products=fetchProducts();
    return <div className="w-full grid grid-cols-3 gap-6">
    {products?.map((p) => (
      <ItemCard key={p?.id} item={p} />
    ))}
  </div>

}