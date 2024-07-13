"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductGetResponseDTO } from "@/types/endpoint-types-incoming";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = { readonly product: ProductGetResponseDTO };

export default function ProductImages(props: Props) {
  const { product } = props;
  const numberOfImages = product.imageUrls.length;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent className="relative">
        {product.imageUrls.map((url) => (
          <CarouselItem key={product.name} className="h-[60vh] w-full">
            <Image
              priority
              src={url}
              alt={product.name}
              className="size-full rounded object-contain"
              width={1000}
              height={1000}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute inset-y-1/2 w-full">
        {numberOfImages > 1 ? (
          <div className="mx-2 flex justify-between">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        ) : null}
      </div>
      <div className="pointer-events-none absolute bottom-4 z-10 flex w-full justify-center ">
        <span className="rounded bg-black/60 px-2 py-1 text-sm font-medium text-gray-100">
          {current} / {numberOfImages}
        </span>
      </div>
    </Carousel>
  );
}
