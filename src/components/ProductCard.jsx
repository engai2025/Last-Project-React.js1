import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const placeholderImage = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" fill="none"><rect width="400" height="400" fill="#e5e7eb"/><path d="M120 160h160v120H120z" fill="#9ca3af"/><path d="M140 280h120v20H140z" fill="#9ca3af"/><text x="200" y="220" font-family="sans-serif" font-size="14" fill="#6b7280" text-anchor="middle">No image</text></svg>'
);

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { id, name, category, price, image, rating } = product;
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col">
      <Link to={`/product/${id}`} className="block overflow-hidden bg-gray-100 min-h-[12rem]">
        <img
          src={imgError ? placeholderImage : image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={() => setImgError(true)}
        />
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs font-medium text-primary-600 uppercase tracking-wide mb-1">
          {category}
        </p>
        <Link to={`/product/${id}`} className="flex-1">
          <h3 className="font-display font-semibold text-gray-900 hover:text-primary-600 transition-colors line-clamp-2 mb-2">
            {name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 text-amber-500 text-sm mb-2">
          <span aria-hidden>★</span>
          <span className="text-gray-600">{rating}</span>
        </div>
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
          <p className="font-display font-bold text-lg text-primary-600">
            ${price.toFixed(2)}
          </p>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="btn-primary text-sm py-1.5 px-3"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
