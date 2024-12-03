import React from 'react';
import { Header } from './components/Header';
import { MarketInsights } from './components/MarketInsights';
import { ProductGrid } from './components/ProductGrid';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-8">
          <section>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Global Trade Marketplace
            </h1>
            <MarketInsights />
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Featured Products</h2>
              <div className="flex space-x-2">
                <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
                  <option>All Categories</option>
                  <option>Electronics</option>
                  <option>Textiles</option>
                  <option>Manufacturing</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
                  <option>All Countries</option>
                  <option>Japan</option>
                  <option>India</option>
                  <option>Germany</option>
                </select>
              </div>
            </div>
            <ProductGrid />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;