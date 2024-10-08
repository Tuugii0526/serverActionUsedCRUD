const urlForGet = "http://localhost:1234/product/get";
const urlForGetById="http://localhost:1234/product/edit"
export const fetchProducts = async () => {
  try {
    const res = await fetch(urlForGet);
    const data = await res.json();
  return data?.data
  } catch (error) {
console.log(error)    
  }
};
export const fetchProductById=async (id:string)=>{
try {
  const res=await fetch(`http://localhost:1234/productById/${id}`)
  const data=await res.json()
  if(data.success)
  {
    return data.data
  }
  else{
    return null
  }
} catch (error) {
  console.log(error)
}
}
