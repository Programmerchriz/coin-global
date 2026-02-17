
import { fetcher } from "@/lib/coingecko.actions";

export async function getCategories() {
  return fetcher<Category[]>('/coins/categories');
};
