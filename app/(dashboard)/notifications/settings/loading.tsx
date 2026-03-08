
export default function Loading() {
  return (
    <div className="min-h-screen bg-(--bg-app) text-(--text-primary) px-4 md:px-8 py-8">

      <div className="max-w-4xl mx-auto space-y-8 animate-pulse">

        <div className="h-8 w-64 bg-(--color-10) rounded" />

        {[1,2].map((_,section)=>(
          <div
            key={section}
            className="bg-(--bg-surface) border border-(--color-5) rounded-2xl p-6 space-y-4"
          >
            <div className="h-5 w-40 bg-(--color-10) rounded" />

            {[1,2,3,4].map((_,i)=>(
              <div key={i} className="flex justify-between">
                <div className="h-4 w-40 bg-(--color-10) rounded" />
                <div className="h-5 w-5 bg-(--color-10) rounded" />
              </div>
            ))}
          </div>
        ))}

      </div>
    </div>
  );
};
