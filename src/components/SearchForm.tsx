"use client";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

// Component to display the search form
export default function SearchForm() {
  // Use the `useRouter` hook to get the router object
  const router = useRouter();

  // Function to handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Get the search query from the form input
    const searchQuery = e.currentTarget.search.value;
    // Navigate to the items page with the search query as a parameter
    router.push(`/items?search=${searchQuery}`);
  };

  // Render the search form
  return (
    <form
      onSubmit={handleSubmit}
      className="m-auto flex max-w-screen-xl px-4 flex-1"
    >
      {/* Display the search input */}
      <input
        className="h-8 flex-1 w-full text-black bg-white px-4"
        type="text"
        name="search"
        placeholder="Nunca dejes de buscar"
      />
      {/* Display the search button */}
      <button
        type="submit"
        className="bg-gray-200 px-4 py-1 text-slate-700 ml-1"
      >
        <svg
          className="w-4 h-4 m-auto"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </form>
  );
}