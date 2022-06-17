import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    ref: { type: Number, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true, default: 'Unknown' },
    manufacturer: { type: String, required: true, default: 'Unknown' },
    price: { type: Number, required: true },
    shipping: { type: Number, required: true, default: 0 },
    image: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    category: {
      id: { type: String },
      name: { type: String, required: true, default: 'Unknown' },
    },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
