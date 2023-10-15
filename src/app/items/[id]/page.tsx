"use client";
import { use } from "react";
import MeliClient from "@/MeliClient";
import Breadcrums from "@/components/Breadcrums";
import PriceFormatter from "@/components/PriceFormatter";
import CustomSlider from "@/components/CustomSlider";

// Helper function to get the item brand from its attributes
const GetItemBrand = (data: any) => {
  if (!data.attributes) return null;
  const brand = data.attributes.find((attr: any) => attr.id === "BRAND");
  if (!brand) return null;
  return brand.value_name;
};

// Helper function to get the item pictures
const GetPictures = (data: any) => {
  if (!data.pictures) return null;
  return data.pictures.map((pic: any) => pic.url);
};

// Async function to get the item data and description
async function getDataDescription(id: string) {
  return await Promise.all([
    MeliClient.item.get(id),
    MeliClient.item.getDescription(id),
  ]);
}

// Component to display the item page
export default function ItemsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  // Use the `use` hook to fetch the item data and description
  const [data, description] = use(getDataDescription(id));
  // Use the `use` hook to fetch the item category
  const category = use(MeliClient.item.getCategory(data.category_id));

  // Create an array of segments for the breadcrumb component
  const segments = [category.name, GetItemBrand(data)];
  // Get the item pictures
  const pictures = GetPictures(data);

  // Render the item page
  return (
    <section>
      <Breadcrums segments={segments} />
      <div className="bg-white">
        <section className="grid grid-cols-2 gap-6 p-4">
          <div className="w-1/2">
            <CustomSlider pictures={pictures} />
          </div>
          <div>
            <p className="text-xl font-bold text-black">{data.title}</p>
            <PriceFormatter price={data.price} currency_id={data.currency_id} />
            <button className="bg-blue-500 rounded-md w-full h-10 my-10 text-white">
              Comprar
            </button>
          </div>
        </section>
        <hr />
        <section className="grid gap-6 p-4">
          <p className="text-xl text-black">Descripción del Producto</p>
          <p className="text-gray-600">{description.plain_text}</p>
        </section>
      </div>
    </section>
  );
}
