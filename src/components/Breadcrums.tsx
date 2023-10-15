import Link from "next/link";

// Define the props for the Breadcrums component
interface BreadcrumsProps {
  segments: string[];
}

// Component to display the breadcrumb navigation
export default function Breadcrums({ segments }: BreadcrumsProps) {
  // Render the breadcrumb navigation
  return (
    <nav className="flex">
      <ul className="flex text-gray-600">
        {/* Map over each segment and create a link to the items page with the segment as a search query */}
        {segments.map((segment, index) => (
          <Link
            href={`/items?search=${segment}`}
            key={segment}
            className="flex mr-2"
          >
            {/* Display a separator arrow between segments */}
            {index !== 0 && <span className="mr-2"> =&gt; </span>}
            {/* Display the segment text */}
            <span>{segment}</span>
          </Link>
        ))}
      </ul>
    </nav>
  );
}