"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/components/CartContext";
import {
  ProductGetResponseDTO,
  ProfileResponseDTO,
} from "@/types/endpoint-types-incoming";
import { useAuth } from "@/components/AuthContext";
import { useEffect, useState } from "react";
import { getProfile } from "@/utils/api-calls";

type Props = {
  readonly product: ProductGetResponseDTO;
};

export default function AddToCartButton(props: Props) {
  const { product } = props;
  const { addToCart, removeFromCart, items } = useCart();
  const { loggedIn } = useAuth();

  const [seller, setSeller] = useState<ProfileResponseDTO | undefined>();

  useEffect(() => {
    const fetchSeller = async () => {
      const seller = await getProfile(product.seller)
        .then((res) => res.json())
        .catch((err) => console.log(err));
      setSeller(seller);
    };

    fetchSeller();
  }, [product.seller]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  const handleRemoveFromCart = () => {
    if (product) {
      removeFromCart(product.productId);
    }
  };

  return (
    <div>
      {product &&
      product.status === 0 &&
      loggedIn &&
      seller &&
      loggedIn !== seller.username ? (
        items.find((element) => element.productId === product.productId) ===
        undefined ? (
          <div className="mt-4">
            <Button
              className="bg-blue-500 hover:bg-blue-400"
              variant="default"
              onMouseDown={handleAddToCart}
            >
              Add to cart
            </Button>
          </div>
        ) : (
          <div className="mt-4">
            <Button variant="destructive" onMouseDown={handleRemoveFromCart}>
              Remove from cart
            </Button>
          </div>
        )
      ) : null}
    </div>
  );
}
