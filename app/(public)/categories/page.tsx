import { getCategories } from '@/lib/api/categories';

import CategoriesTable from '@/components/categories/CategoriesTable';
import CoinsPagination from '@/components/all/CoinsPagination';

export default async function CategoriesPage({ searchParams }: NextPageProps) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const perPage: number = 10;

  const categories = await getCategories();

  const totalPages = Math.ceil(categories.length / perPage);

  const paginatedCategories = categories.slice((currentPage - 1) * perPage, currentPage * perPage);

  const hasMorePages = currentPage < totalPages;

  return (
    <div className="main-container">
      <h4 className="text-xl md:text-2xl font-semibold mb-2 pl-5">All Categories</h4>

      <div id="categories" className="custom-scrollbar">
        <CategoriesTable categories={paginatedCategories} />
      </div>

      <CoinsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        hasMorePages={hasMorePages}
        basePath="categories"
      />
    </div>
  );
}
