
import DataTable from "@/app/components/DataTable";
import { columns } from "./columns";

type Props = {
  trendingCoins: TrendingCoin[];
};

export default function TrendingCoinsTable({ trendingCoins }: Props) {
  return (
    <DataTable<TrendingCoin>
      data={trendingCoins || []}
      columns={columns}
      rowKey={(row) => row.item.id}
      tableClassName="trending-coins-table"
      headerClassName="py-3!"
      bodyCellClassName="py-2!"
    />
  );
};
