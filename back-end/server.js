import express from "express";
import fs from "fs";
const app = express();
const port=5678
app.use(express.json());
app.get("/", (req, res) => {
  console.log("Server started working");
  res.json({
    greeting: "hellow world",
  });
});
app.get("/product/get", (req, res) => {
  fs.readFile("./lib/data.json", "utf-8", (error, data) => {
    if (error) {
      res.json({
        success: false,
      });
    }
    const parsedData = data.length ? JSON.parse(data) : [];
    res.json({
      success: true,
      data: parsedData,
    });
  });
});
app.post("/product/add", (req, res) => {
  fs.readFile("./lib/data.json", "utf-8", (error, data) => {
    if (error) {
      res.json({
        success: false,
      });
    }
    const parsedData = data ? JSON.parse(data) : [];
    const { name, category, price } = req.body;
    const newProduct = {
      id: Date.now().toString(),
      name: name,
      category: category,
      price: price,
    };
    parsedData.push(newProduct);
    fs.writeFile("./lib/data.json", JSON.stringify(parsedData), (error) => {
      if (error) {
        res.json({
          success: false,
        });
      } else {
        res.json({
          success: true,
        });
      }
    });
  });
});
app.delete("/product/delete", (req, res) => {
  const { id } = req.body;
  fs.readFile("./lib/data.json", "utf-8", (error, data) => {
    if (error) {
      res.json({
        success: false,
      });
    }
    const parsedData = data ? JSON.parse(data) : [];
    if (parsedData.length) {
      const filteredData = parsedData.filter((data) => data.id !== id);
      fs.writeFile("./lib/data.json", JSON.stringify(filteredData), (error) => {
        if (error) {
          res.json({
            success: false,
          });
        } else {
          res.json({
            success: true,
          });
        }
      });
    }
  });
});
app.patch("/product/edit", (req, res) => {
  const {id,name,category,price}=req.body;
  fs.readFile('./lib/data.json','utf-8',(error,data)=>{
    if(error){
      res.json({
        success:false
      })
    }
    let parsedData=data ? JSON.parse(data) :[];
    if(parsedData.length)
    {
      const newProducts=parsedData.map(data=>{
        if(data.id===id)
        {
          return {
            ...data,
            name:name,
            category:category,
            price:price
          }
        }
        return data
      })
      fs.writeFile('./lib/data.json',JSON.stringify(newProducts),(error)=>{
        if(error)
        {
          res.json({
            success:false
          })
        }
        else{
          res.json({
            success:true
          })
        }
      })
    }
  })
});
app.get("/productById/:id",(req,res)=>{
  const id=req.params.id
  fs.readFile('./lib/data.json',"utf-8",(error,data)=>{
    if(error){
      res.json([])
    }
    const parsedData=data? JSON.parse(data) : []
    const foundProduct=parsedData?.find(data=>data.id===id)
    res.json({
      product:foundProduct
    })
  })
})
app.listen(port, () => {
  // console.log(`server started working : https://simple-project-bztl.onrender.com`);
  console.log(`server started working at http://localhost:${port}`)
});
