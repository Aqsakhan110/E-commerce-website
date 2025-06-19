import { useParams } from 'next/navigation';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.productId;

  return (
    <div>
      <h1>Product Details for ID: {productId}</h1>
      {/* Fetch and display product data based on productId here */}
    </div>
  );
}