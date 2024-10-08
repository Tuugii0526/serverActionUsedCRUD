import { fetchProductById } from "@/lib/data";
import { EditForm } from "@/ui/forms/EditForm"
import { notFound } from "next/navigation";
export default async function constPage ({params}:{params:{id:string}}){
    const id=params.id;
    const item= await fetchProductById(id);
    if(!item)
    {
        notFound();
    }
    return (
       <EditForm item={item}/>
    )
}