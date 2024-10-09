const urlForGet = `${process.env.BACKEND_URL}/product/get`;
const urlForGetById=`${process.env.BACKEND_URL}/product/edit`
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
  const res=await fetch(`${process.env.BACKEND_URL}/productById/${id}`)
  const data=await res.json()
  return data?.product
} catch (error) {
  console.log(error)
}
}
