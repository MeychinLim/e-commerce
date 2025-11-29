"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductType } from "@/app/types/product";

type Props = {
  product: ProductType;
};

const ProductLargeCard: React.FC<Props> = ({ product }) => {
  const {
    id,
    name,
    description,
    price,
    images,
    onSale,
    discountPercentage,
    discount,
  } = product;

  // use onSale + discountPercentage if available, fallback to legacy discount
  const effectiveDiscount = onSale ? discountPercentage ?? 0 : discount ?? 0;
  const priceAfterDiscount = effectiveDiscount
    ? (price * (100 - effectiveDiscount)) / 100
    : price;

  // get first image or placeholder
  const imageUrl =
    images && images.length > 0 ? images[0].url : "product-placeholder.png";
  const resolvedImageUrl = imageUrl.startsWith("/")
    ? imageUrl
    : `/images/products/indoor-plants-top-view.png`;

  return (
    <div className="grid grid-cols-2 group  rounded-4xl backdrop-blur-lg border border-white/20 shadow-xl border-b hover:shadow-xl transition duration-300 h-80 cursor-pointer hover:bg-black/25">
      {/* Image Container */}
      <div className="relative w-full flex justify-center">
        {/* {onSale ? (
          <span className="absolute top-5 left-5 z-10 border border-red-800 bg-red-500/75 text-xs font-bold px-2.5 py-1 rounded">
            Sale {discountPercentage ? `-${discountPercentage}%` : ""}
          </span>
        ) : null} */}
        <Image
          src={resolvedImageUrl}
          alt={name}
          // fill
          height={200}
          width={300}
          className="group-hover:scale-110 transition-transform duration-500 absolute -top-20"
        />
      </div>

      {/* Content Container */}
      <div className="p-10 flex flex-col justify-center gap-3">
        {/* <div> */}
        {/* Title */}
        <h3 className="text-3xl font-semibold line-clamp-2">{name}</h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description || "No description available."}
        </p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">
            ${priceAfterDiscount.toFixed(2)}
          </span>
          {effectiveDiscount ? (
            <span className="text-sm line-through text-muted-foreground">
              ${price.toFixed(2)}
            </span>
          ) : null}
        </div>
        {/* </div> */}

        {/* Detail Button */}
        <Link href={`/products/${id}`} className="w-full">
          <Button
            type="button"
            size="sm"
            className="px-6 py-2 rounded-tr-2xl rounded-bl-2xl border text-white transition"
          >
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductLargeCard;
