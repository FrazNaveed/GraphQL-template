import mongoose from 'mongoose';

const productListSchema = new mongoose.Schema({
    category: String,
    productName: String,
    price: Number,
    colors: Object,
    imgPath: String
});

const Product = mongoose.model('Product', productListSchema);

export default Product;
