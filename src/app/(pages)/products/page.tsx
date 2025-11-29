import React from "react";
import { products } from "@/static/products";
import ProductSmallCard from "@/app/components/Product/ProductSmallCard";

const Page: React.FC = () => {
  return (
    <div className="px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <div key={product.id} className="w-full">
            <ProductSmallCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
