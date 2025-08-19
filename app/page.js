"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroCarousel from "./components/HeroCarousel.jsx";
import FlashSales from "./components/FlashSales.jsx";
import Categories from "./components/Categories.jsx";
import BestSelling from "./components/BestSelling.jsx";
import PromoBanner from "./components/PromoBanner.jsx";
import ExploreProducts from "./components/ExploreProducts.jsx";
import NewArrival from "./components/NewArrival.jsx";
import Services from "./components/Services.jsx";
import "./globals.css";

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  return (
    <>
      <HeroCarousel />

      {/* Flash Sales */}
      <FlashSales products={allProducts.slice(0, 10)} />

      {/* Browse By Category */}
      <Categories />

      {/* Best Selling */}
      <BestSelling products={allProducts.slice(6, 10)} />

      {/* Promo Banner */}
      <PromoBanner />

      {/* Explore Products */}
      <ExploreProducts products={allProducts.slice(10, 18)} />

      {/* New Arrival */}
      <NewArrival />

      {/* Services (Free Delivery / Support / Money Back) */}
      <Services />

    </>
  );
}
