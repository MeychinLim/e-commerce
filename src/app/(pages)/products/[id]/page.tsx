import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/static/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-2xl font-semibold">Product Not Found</h1>
        <Link href="/products">
          <Button>Back to Products</Button>
        </Link>
      </div>
    );
  }

  // prefer explicit `onSale` + `discountPercentage`, fallback to legacy `discount`
  const effectiveDiscount = product.onSale ? (product.discountPercentage ?? 0) : (product.discount ?? 0);
  const priceAfterDiscount = effectiveDiscount
    ? (product.price * (100 - effectiveDiscount)) / 100
    : product.price;

  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      {/* Back button */}
      {/* <Image
        src={`images/products/base.jpg`}
        alt={"Product Image"}
        fill
        className="object-cover"
      />
      jer */}
      <Link
        href="/products"
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Back to Products
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative h-96 w-full overflow-hidden rounded-lg bg-gray-100">
          {product.onSale ? (
            <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded">
              Sale {product.discountPercentage ? `-${product.discountPercentage}%` : ""}
            </span>
          ) : null}
          {product.images &&
            product.images.length > 0 &&
            product.images.map((image) => (
              <div key={image.id} className="relative h-full w-full">
                <Image
                  src={`/images/${image?.url}`}
                  alt={image?.url || "Product Image"}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
            <p className="text-muted-foreground">{product.category}</p>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <div className="text-2xl font-semibold">
              ${priceAfterDiscount.toFixed(2)}
            </div>
            {(product.onSale && product.discountPercentage && product.discountPercentage > 0) || (product.discount && product.discount > 0) ? (
              <div className="flex items-center gap-2">
                <span className="text-lg line-through text-muted-foreground">
                  ${product.price.toFixed(2)}
                </span>
                <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  -{product.onSale ? product.discountPercentage : product.discount}%
                </span>
              </div>
            ) : null}
          </div>

          {/* Rating and Reviews */}
          <div className="flex items-center gap-4 text-sm">
            {product.rating && (
              <div>
                <span className="text-lg">⭐ {product.rating}</span>
              </div>
            )}
            {product.review && (
              <div className="text-muted-foreground">
                {product.review} reviews
              </div>
            )}
            <div className="text-muted-foreground">
              {product.quantity && product.quantity > 0 ? (
                <span className="text-green-600">✓ In stock</span>
              ) : (
                <span className="text-red-600">Out of stock</span>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground">
              {product.description || "No description available."}
            </p>
          </div>

          {/* Specifications */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Specifications</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 text-sm">
              {product.size && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Size:</span>
                  <span className="font-semibold">{product.size}</span>
                </div>
              )}
              {product.quantity !== undefined && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Available:</span>
                  <span className="font-semibold">
                    {product.quantity} units
                  </span>
                </div>
              )}
              {product.sold && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sold:</span>
                  <span className="font-semibold">{product.sold} units</span>
                </div>
              )}
              {product.category && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="font-semibold">{product.category}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Add to Cart Section */}
          <div className="border-t pt-4 flex gap-3">
            <Button
              className="flex-1"
              disabled={!(product.quantity && product.quantity > 0)}
              size="lg"
            >
              Add to Cart
            </Button>
            <Button variant="outline" size="lg">
              ♡ Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
