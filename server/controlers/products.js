import Product from "../model/product.js";

const postApiProducts = async (req,res)=>{

    const {name,price,brand,category,productImage} =req.body;

    const proObj = new Product ({
        name,
        price,
        brand,
        category,
        productImage
    });

    const savedProduct = await proObj.save();

    res.json({
        success :  true,
        data : savedProduct,
        message :"product added successfully !"
    })

} 

const getApiProducts = async (req,res)=>{
    
    const fetchallProducts = await Product.find();
    res.json({
    success : true,
    data : fetchallProducts,
    message :"all product fetch successfully !"
    })

}

const deleteApiProducts = async (req,res)=>{

    const {_id}=req.params

    await Product.deleteOne({_id : _id})
    res.json({
        success : true,
        message : "product deleted successfully"
    })
}

export {postApiProducts, getApiProducts,deleteApiProducts}