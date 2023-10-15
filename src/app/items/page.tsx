import PriceFormatter from "@/components/PriceFormatter";
import MeliClient from "@/MeliClient";
import Link from "next/link";

// Component to display the search results page
export default async function ItemsPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  // Use the `MeliClient` to search for items based on the search parameters
  const { results } = await MeliClient.item.search(searchParams.search);

  // Render the search results
  return (
    <section className="bg-white">
      <article className="grid gap-6 p-4">
        {results.map((item: any) => (
          // Create a link to the item page for each search result
          <Link
            href={`/items/${item.id}`}
            key={item.id}
            className="flex gap-4 text-black"
          >
            {/* Display the item thumbnail */}
            <img src={item.thumbnail} alt={item.title} className="w-36 h-36" />
            <div>
              {/* Display the item title */}
              <p className="text-xl font-bold text-black"> {item.title} </p>
              {/* Display the item price */}
              <PriceFormatter
                price={item.price}
                currency_id={item.currency_id}
              />
            </div>
            {/* Display the seller's city */}
            <span className="ml-auto text-sm capitalize text-black">
              {item.seller_address.city.name.toLowerCase()}
            </span>
          </Link>
        ))}
      </article>
    </section>
  );
}
