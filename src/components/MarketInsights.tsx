import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign, Activity } from 'lucide-react';
import type { MarketInsight } from '../types';

const data: MarketInsight[] = [
  { date: 'Jan', value: 4000, category: 'Electronics' },
  { date: 'Feb', value: 3000, category: 'Electronics' },
  { date: 'Mar', value: 5000, category: 'Electronics' },
  { date: 'Apr', value: 4500, category: 'Electronics' },
  { date: 'May', value: 6000, category: 'Electronics' },
];

export function MarketInsights() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Market Insights</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
            Last 30 Days
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            <span className="ml-2 text-sm text-gray-600">Market Trend</span>
          </div>
          <p className="mt-2 text-2xl font-semibold text-gray-900">+12.5%</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <div className="flex items-center">
            <DollarSign className="h-6 w-6 text-green-600" />
            <span className="ml-2 text-sm text-gray-600">Average Price</span>
          </div>
          <p className="mt-2 text-2xl font-semibold text-gray-900">$4,521</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <div className="flex items-center">
            <Activity className="h-6 w-6 text-purple-600" />
            <span className="ml-2 text-sm text-gray-600">Trade Volume</span>
          </div>
          <p className="mt-2 text-2xl font-semibold text-gray-900">1.2M</p>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}