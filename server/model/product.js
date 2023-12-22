import { Schema,model } from "mongoose";

const productSchema = new Schema ({
    name:{
        type : String,
        required : true
    },
    description:{
        type : String,
    },
    price:{
        type : String,
    },
    category:{
        type : String ,
        enum : ["shooping", "food","movies","clothes","electrician"],
        default : "other"
    },
    brand:{
        type : String,
       
    },
    productImage:{
        type : String ,
        required : true    
    }
},
{
    timestamps : true,
})

const Product = model ('Product',productSchema)

export default Product