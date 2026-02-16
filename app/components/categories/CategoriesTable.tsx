
import DataTable from "@/app/components/DataTable";
import { columns } from "./columns";

type Props = {
  categories: Category[];
};

export default function CategoriesTable({ categories }: Props) {
  return (
    <DataTable
      data={categories}
      columns={columns}
      rowKey={(row) => row.id}
      tableClassName="top-categories-table mt-3"
      headerClassName="py-3!"
      bodyCellClassName="py-2! px-4"
    />
  );
};
