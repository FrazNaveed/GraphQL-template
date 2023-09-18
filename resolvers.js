import Product from './Schema/productSchema.js';

const resolvers = {
    Query: {
        getProductList: async (parent, args) => {
            const result = Product.find({}).then((res) => {
                if (res) {
                    return res;
                }
            });
            return result;
        },
        getProduct: async (parent, args) => {
            const result = Product.findById(args.id).then((res) => {
                if (res) {
                    return res;
                }
            });
            return result;
        }
    },
    Mutation: {
        updateProduct: async (parent, args) => {
            const result = Product.findByIdAndUpdate(args.id, {
                productName: args.productName,
                category: args.category,
                price: args.price,
                colors: args.colors,
                imgPath: args.imgPath
            }).then((res) => {
                if (res) return res;
            });
            return result;
        },
        addProduct: async (parent, args) => {
            const product = await Product({
                productName: args.productName,
                category: args.category,
                price: args.price,
                colors: args.colors,
                imgPath: args.imgPath
            });
            const result = product.save().then((res) => {
                return res;
            });
            return result;
        },
        deleteProduct: async (parent, args) => {
            try {
                await Product.findOneAndRemove({ _id: args.id });
                return true;
            } catch (e) {
                console.log(e);
                return false;
            }
        }
    }
};

export default resolvers;
