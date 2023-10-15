// Define the props for the PriceFormatter component
interface PriceFormatterProps {
  price: number;
  currency_id: string;
}

// Component to format a price with a currency symbol
export default function PriceFormatter({
  price,
  currency_id,
}: PriceFormatterProps) {
  // Format the price with a currency symbol using the `toLocaleString` method
  return (
    <p className="text-black">
      {price.toLocaleString("es-CL", {
        style: "currency",
        currency: currency_id,
      })}
    </p>
  );
}
