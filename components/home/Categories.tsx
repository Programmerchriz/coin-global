import { getCategories } from '@/lib/api/categories';
import CategoriesTable from '@/components/categories/CategoriesTable';

const Categories = async () => {
  const categories = await getCategories();

  return (
    <div id="categories" className="custom-scrollbar">
      <h4>Top Categories</h4>
      <CategoriesTable categories={categories.slice(0, 10)} />
    </div>
  );
};

export default Categories;
