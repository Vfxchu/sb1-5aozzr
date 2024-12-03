import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <span className="text-sm font-medium text-gray-500">{product.country}</span>
        </div>
        <p className="mt-1 text-sm text-gray-600">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">
            {product.price} {product.currency}
          </span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}