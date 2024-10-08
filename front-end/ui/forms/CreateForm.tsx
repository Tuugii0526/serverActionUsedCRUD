"use client"
import { createProduct } from "@/lib/actions";
import { useFormState } from "react-dom";
const initialState={
    id:'',
    name:'',
    category:'',
    price:1
}
export const CreateForm = () => {
    const [state,formAction]=useFormState(createProduct,initialState)
  return (
    <form className="w-1/2 h-1/2 flex flex-col justify-around gap-1 m-auto" >
      <label htmlFor="productName">
        Product name
        <input
          className="add-inputs"
          type="text"
          id="productName"
          name="productName"
          placeholder="Product name"
          required
        />
      </label>
      <label htmlFor="productCategory">
        Product category
        <select
          className="add-inputs"
          id="productCategory"
          name="productCategory"
          defaultValue=""
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
          min={0}
        />
      </label>
      <button formAction={formAction} type="submit" className="btn bg-green-400 ">
        Add product
      </button>
    </form>
  );
};
