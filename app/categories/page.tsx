
import { getCategories } from "@/lib/api/categories";
import CategoriesTable from "@/app/components/categories/CategoriesTable";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="p-5">
      <h4 className="text-xl md:text-2xl font-semibold mb-2">Top Categories</h4>
      <div id="categories" className="custom-scrollbar">
        <CategoriesTable categories={categories} />
      </div>
    </div>
  );
};
