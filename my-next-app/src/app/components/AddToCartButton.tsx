// components/AddToCartButton.tsx
"use client";

import { useUser } from "@clerk/nextjs";

const AddToCartButton = ({ productId }: { productId: string }) => {
  const { isSignedIn } = useUser();

  const handleClick = () => {
    if (!isSignedIn) {
      window.location.href = "/sign-in"; // or use modal (see below)
      return;
    }

    // Your logic to add the item to the cart
    console.log("Added product", productId);
  };

  return (
    <button onClick={handleClick} className="btn btn-primary">
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
