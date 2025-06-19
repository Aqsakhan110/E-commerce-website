"use client";

import { useUser } from "@clerk/nextjs";

const BuyNowButton = ({ productId }: { productId: string }) => {
  const { isSignedIn } = useUser();

  const handleClick = () => {
    if (!isSignedIn) {
      window.location.href = "/sign-in";
      return;
    }

    // Redirect to checkout page or perform checkout logic
    console.log("Proceeding to buy product", productId);
  };

  return (
    <button onClick={handleClick} className="btn btn-success">
      Buy Now
    </button>
  );
};

export default BuyNowButton;
