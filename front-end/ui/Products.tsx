import { fetchProducts } from "@/lib/data"
import { ItemCard } from "./ItemCard";
import { Item } from "@/lib/definition";

export const Products=async ()=>{
    const products=await fetchProducts();
    return <div className="w-full grid grid-cols-3 justify-items-center gap-6 ">
    {products ? products?.map((p:Item) => (
      <ItemCard key={p?.id} item={p} />
    )) 
  : <p>Empty...?</p>
  }
  </div>

}