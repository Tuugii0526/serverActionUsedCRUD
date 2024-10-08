"use client"
import {  editProduct } from "@/lib/actions";
import { Item } from "@/lib/definition";
import { useFormState } from "react-dom";
const initialState={
    id:'',
    name:'',
    category:'',
    price:null
}
export const EditForm = ({item}:{item:Item}) => {
  const editProductWithId=editProduct.bind(null,item.id)
    const [state,formAction]=useFormState(editProductWithId,initialState)
  return (
    <form className="w-1/2 h-1/2 flex flex-col justify-around gap-1 m-auto" action={formAction} >
      <label htmlFor="productName">
        Product name
        <input
          className="add-inputs"
          type="text"
          id="productName"
          name="productName"
          placeholder="Product name"
          value={item.name}
          required
        />
      </label>
      <label htmlFor="productCategory">
        Product category
        <select
          className="add-inputs"
          id="productCategory"
          name="productCategory"
          value={item.category}
        >
          <option value="Category" selected disabled>
            Select a category
          </option>
          <option value="T-shirt">T-shirt</option>
          <option value="Trousers">Trousers</option>
          <option value="Outer clothes">Outer clothes</option>
          <option value="Boot">Boot</option>
        </select>
      </label>
      <label htmlFor="productPrice">
        Price
        <input
          className="add-inputs"
          type="number"
          id="productPrice"
          name="productPrice"
          placeholder="Price"
          value={item.price}
          min={1}
        />
      </label>
      <button formAction={formAction} type="submit" className="btn bg-green-400 ">
        Edit product
      </button>
    </form>
  );
};
