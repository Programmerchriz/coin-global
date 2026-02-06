
import DataTable from '@/app/components/DataTable';

export const CoinOverviewFallback = () => {
  return (
    <section id="coin-overview-fallback">
      {/* Header */}
      <div className="header">
        <div className="header-image skeleton" />
        <div className="info">
          <div className="header-line-sm skeleton" />
          <div className="header-line-lg skeleton" />
        </div>
      </div>

      {/* Period buttons */}
      <div className="flex gap-2 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="period-button-skeleton skeleton" />
        ))}
      </div>

      {/* Chart */}
      <div className="chart">
        <div className="chart-skeleton skeleton" />
      </div>
    </section>
  );
};

export const TrendingCoinsFallback = () => {
  const columns = [
    {
      header: 'Name',
      cell: () => (
        <div className="name-cell">
          <div className="name-link">
            <div className="name-image skeleton" />
            <div className="name-line skeleton" />
          </div>
        </div>
      ),
    },
    {
      header: 'Price',
      cell: () => <div className="price-line skeleton" />,
    },
    {
      header: '24h Change',
      cell: () => (
        <div className="price-change">
          <div className="change-icon skeleton" />
          <div className="change-line skeleton" />
        </div>
      ),
    },
  ];

  const rows = Array.from({ length: 6 });

  return (
    <section id="trending-coins-fallback">
      <h4>Trending Coins</h4>

      <div className="trending-coins-table">
        <DataTable
          columns={columns}
          data={rows}
          rowKey={(_, i) => i}
          tableClassName="w-full"
        />
      </div>
    </section>
  );
};
