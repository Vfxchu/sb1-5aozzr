export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  country: string;
  category: string;
  supplier: string;
  image: string;
}

export interface MarketInsight {
  date: string;
  value: number;
  category: string;
}

export interface CountryTax {
  country: string;
  importDuty: number;
  vat: number;
  additionalTaxes: number;
}