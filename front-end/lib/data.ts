const urlForGet = "http://localhost:1234/product/get";
export const fetchProducts = async () => {
  try {
    const res = await fetch(urlForGet);
  const data = await res.json();
  return data?.data
  } catch (error) {
console.log(error)    
  }
};
