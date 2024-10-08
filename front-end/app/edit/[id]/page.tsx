import { fetchProductById } from "@/lib/data";
import { EditForm } from "@/ui/forms/EditForm"
import { notFound } from "next/navigation";
export default async function Page ({params}:{params:{id:string}}){
    const id=params.id;
    let item
    try {
         item= await fetchProductById(id);
    } catch (error) {
        console.log(error)
    }
    if(!item)
    {
        notFound();
    }
    return (
       <EditForm item={item}/>
    )
}