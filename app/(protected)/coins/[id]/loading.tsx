
export default function Loading() {
  return (
    <section className="min-h-screen bg-[#0B0F19] text-white px-4 py-8">
      <div className="max-w-7xl mx-auto space-y-8 animate-pulse">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Side */}
          <div className="lg:col-span-2 space-y-6">

            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#111827] border border-white/5" />
              <div className="space-y-2">
                <div className="h-6 w-36 bg-[#111827] rounded-md border border-white/5" />
                <div className="h-4 w-20 bg-[#111827] rounded-md border border-white/5" />
              </div>
            </div>

            {/* Price */}
            <div className="h-12 w-64 bg-[#111827] rounded-xl border border-white/5 shadow-inner" />

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 bg-[#111827] border border-white/5 shadow-lg space-y-3"
                >
                  <div className="h-4 w-24 bg-[#0F1623] rounded-md" />
                  <div className="h-6 w-20 bg-[#0F1623] rounded-md" />
                </div>
              ))}
            </div>
          </div>

          {/* Converter Card */}
          <div className="bg-[#111827] rounded-2xl border border-white/5 shadow-xl p-6 space-y-5">
            <div className="h-5 w-28 bg-[#0F1623] rounded-md" />
            <div className="h-14 w-full bg-[#0F1623] rounded-xl" />
            <div className="flex justify-center">
              <div className="h-6 w-6 bg-[#1f2937] rounded-full" />
            </div>
            <div className="h-14 w-full bg-[#0F1623] rounded-xl" />
          </div>
        </div>

        {/* Chart + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Chart Card */}
          <div className="lg:col-span-2 bg-[#111827] rounded-2xl border border-white/5 shadow-xl p-6 space-y-6">
            <div className="h-5 w-36 bg-[#0F1623] rounded-md" />
            <div className="h-80 w-full bg-gradient-to-r from-[#0F1623] to-[#111827] rounded-2xl" />
          </div>

          {/* Coin Details */}
          <div className="space-y-6">
            <div className="h-5 w-36 bg-[#111827] rounded-md border border-white/5" />

            <div className="bg-[#111827] rounded-2xl border border-white/5 shadow-xl p-6 space-y-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="h-4 w-28 bg-[#0F1623] rounded-md" />
                  <div className="h-4 w-20 bg-[#0F1623] rounded-md" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
