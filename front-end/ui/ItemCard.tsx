import { Item } from "@/lib/definition"
import { EditIcon } from "./icons/EditIcon"
import { DeleteProduct } from "./buttons"
import Link from "next/link"
export const ItemCard=({item}:{item:Item})=>{
    
    return (
        <div className="p-5 h-fit w-fit ring-1 ring-green-400 rounded-sm">
            <div className="flex gap-5 items-center">
                <p>Product name : {item.name}</p>
                <div className="flex gap-2 ">
                    <DeleteProduct id={item.id}/>
                    <Link href={`/edit/${item.id}`}>
                      <EditIcon />
                    </Link>
                </div>
            </div>
            <p>Product category : {item.category}</p>
            <p>Price : ${item.price}</p>
        </div>
    )
}