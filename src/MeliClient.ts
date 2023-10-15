// Define the `MeliClient` object
const MeliClient = {
  // Define the `item` object with methods to search for and retrieve item data
  item: {
    // Method to search for items based on a query string
    search: async (query: string) => {
      // Send a GET request to the MercadoLibre API with the query string and a limit of 4 results
      const response = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`
      );
      // Parse the response data as JSON
      const data = await response.json();
      // Return the parsed data
      return data;
    },
    // Method to retrieve an item's data based on its ID
    get: async (id: string) => {
      // Send a GET request to the MercadoLibre API with the item ID
      const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
      // Parse the response data as JSON
      const data = await response.json();
      // Return the parsed data
      return data;
    },
    // Method to retrieve an item's description based on its ID
    getDescription: async (id: string) => {
      // Send a GET request to the MercadoLibre API with the item ID and the "description" endpoint
      const response = await fetch(
        `https://api.mercadolibre.com/items/${id}/description`
      );
      // Parse the response data as JSON
      const data = await response.json();
      // Return the parsed data
      return data;
    },
    // Method to retrieve an item's category based on its ID
    getCategory: async (id: string) => {
      // Send a GET request to the MercadoLibre API with the category ID
      const response = await fetch(
        `https://api.mercadolibre.com/categories/${id}`
      );
      // Parse the response data as JSON
      const data = await response.json();
      // Return the parsed data
      return data;
    },
  },
};

// Export the `MeliClient` object as the default export of the module
export default MeliClient;
