
export default function Loading() {
  return (
    <div className="min-h-screen bg-(--bg-app) text-(--text-primary) px-4 md:px-8 py-8">
      <div className="max-w-6xl mx-auto space-y-6 animate-pulse">

        <div className="h-8 w-40 bg-(--color-10) rounded" />

        <div className="space-y-4">
          {[1,2,3,4].map((_,i)=>(
            <div
              key={i}
              className="bg-(--bg-surface) border border-(--color-5) rounded-2xl p-5"
            >
              <div className="h-4 w-40 bg-(--color-10) rounded mb-3" />
              <div className="h-3 w-64 bg-(--color-10) rounded mb-2" />
              <div className="h-3 w-20 bg-(--color-10) rounded" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
