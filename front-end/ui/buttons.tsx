"use client"
import { deleteProduct } from "@/lib/actions"
import { DeleteIcon } from "./icons/DeleteIcon"
import { EditForm } from "./forms/EditForm"
import { Item } from "@/lib/definition"

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
