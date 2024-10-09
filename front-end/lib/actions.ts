"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { Item } from "./definition"
const urlForAdd=`${process.env.BACKEND_URL}/product/add`
const urlForDelete=`${process.env.BACKEND_URL}/product/delete` 
const urlForEdit=`${process.env.BACKEND_URL}/product/edit`
export const createProduct= async(state:Item,formData:FormData)=>{
  const newFormData={
    name:formData.get('productName'),
    category:formData.get('productCategory'),
    price:Number(formData.get('productPrice'))
  }
  const options={
    method:"POST",
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify(newFormData)
  }
  try {
    await fetch(urlForAdd,options)
   
  } catch (error) {
    console.log(error)
  }
  revalidatePath('/');
  redirect('/');
}
export const deleteProduct=async (id:string)=>{
  const options={
    method:"DELETE",
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(
      {
        id:id
      }
    )
  }
try {
await fetch(urlForDelete,options)
} catch (error) {
  console.log(error)
}
revalidatePath('/')
}
export const editProduct=async (preState:Item,formData:FormData)=>{
const newFormData={
  id:formData.get('id'),
  name:formData.get('productName'),
    category:formData.get('productCategory'),
    price:Number(formData.get('productPrice'))
}
  const options={
    method:"PATCH",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(newFormData)
  }
  try {
    await fetch(urlForEdit,options)
  } catch (error) {
    console.log(error)
  }
  revalidatePath('/')
  redirect('/')
}