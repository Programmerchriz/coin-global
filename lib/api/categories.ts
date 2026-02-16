
import { fetcher } from "@/lib/coingecko.actions";

export async function getCategories() {
  return fetcher<Category[]>('/coins/categories', {
    next: { revalidate: 60 }, // cache 60 seconds
  });
};
