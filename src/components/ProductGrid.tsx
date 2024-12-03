import React from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from '../types';

const products: Product[] = [
  {
    id: '1',
    name: 'Premium Electronics',
    description: 'High-quality electronic components from Japan',
    price: 1299.99,
    currency: 'USD',
    country: 'Japan',
    category: 'Electronics',
    supplier: 'Tech Corp',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'Organic Cotton',
    description: 'Premium organic cotton from India',
    price: 499.99,
    currency: 'USD',
    country: 'India',
    category: 'Textiles',
    supplier: 'Cotton Industries',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Steel Components',
    description: 'Industrial grade steel components',
    price: 899.99,
    currency: 'USD',
    country: 'Germany',
    category: 'Manufacturing',
    supplier: 'Steel Works',
    image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&w=800&q=80'
  }
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}