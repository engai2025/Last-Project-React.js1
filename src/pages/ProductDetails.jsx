import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';

const placeholderImage = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" fill="none"><rect width="400" height="400" fill="#e5e7eb"/><path d="M120 160h160v120H120z" fill="#9ca3af"/><path d="M140 280h120v20H140z" fill="#9ca3af"/><text x="200" y="220" font-family="sans-serif" font-size="14" fill="#6b7280" text-anchor="middle">No image</text></svg>'
);

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="font-display text-2xl font-bold text-gray-900">Product not found</h2>
        <Link to="/shop" className="mt-4 inline-block text-primary-600 hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const increment = () => setQuantity((q) => Math.min(q + 1, 99));
  const decrement = () => setQuantity((q) => Math.max(q - 1, 1));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="mb-6 text-sm text-gray-500">
        <Link to="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-primary-600">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-square max-h-[500px]">
          <img
            src={imgError ? placeholderImage : product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        </div>

        <div>
          <p className="text-sm font-medium text-primary-600 uppercase tracking-wide">
            {product.category}
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            {product.name}
          </h1>
          <div className="flex items-center gap-2 mt-2 text-amber-500">
            <span>★</span>
            <span className="text-gray-600">{product.rating}</span>
          </div>
          <p className="mt-4 text-2xl font-display font-bold text-primary-600">
            ${product.price.toFixed(2)}
          </p>
          <p className="mt-6 text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={decrement}
                className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-12 h-10 flex items-center justify-center font-medium border-x border-gray-300">
                {quantity}
              </span>
              <button
                type="button"
                onClick={increment}
                className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button
              type="button"
              onClick={handleAddToCart}
              className="btn-primary flex-1 min-w-[140px]"
            >
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>
            <button
              type="button"
              onClick={() => {
                addToCart(product, quantity);
                navigate('/cart');
              }}
              className="btn-secondary"
            >
              Buy Now
            </button>
          </div>

          {product.inStock && (
            <p className="mt-4 text-sm text-emerald-600 font-medium">In stock</p>
          )}
        </div>
      </div>
    </div>
  );
}
