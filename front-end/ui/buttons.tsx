"use client"
import { deleteProduct } from "@/lib/actions"
import { DeleteIcon } from "./icons/DeleteIcon"
export const DeleteProduct=({id}:{id:string})=>{
const deleteProductWithId=deleteProduct.bind(null,id)
return (
    <form onSubmit={(e)=>{
  e.preventDefault()
  deleteProductWithId()
    }}>
        <button type="submit">
        <DeleteIcon/>
        </button>
    </form>
)
}
