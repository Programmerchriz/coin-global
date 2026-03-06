
"use client";

import BackButton from '@/components/ui/BackButton';

export default function SettingsClient() {
  return (
    <div className="min-h-screen bg-(--bg-app) text-(--text-primary) px-4 md:px-8 pb-8">
      
      <div className="max-w-4xl mx-auto space-y-8">

        <BackButton />

        <h1 className="text-2xl md:text-3xl font-semibold">
          Notification Settings
        </h1>

        {/* In-App Messages */}
        <div className="bg-(--bg-surface) border border-(--color-5) rounded-2xl p-6 space-y-6 shadow-xl">
          <h2 className="text-lg font-medium">
            In-App Messages
          </h2>

          {[
            "Latest Events",
            "Announcements",
            "Rewards",
            "Trading Alerts",
            "News",
            "Strategy",
            "Signal",
            "Changes to Account"
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center">
              <span className="text-(--color-70)">{item}</span>

              <input
                type="checkbox"
                className="w-5 h-5 accent-(--color-primary)"
                defaultChecked
              />
            </div>
          ))}
        </div>

        {/* Push Notifications */}
        <div className="bg-(--bg-surface) border border-(--color-5) rounded-2xl p-6 space-y-6 shadow-xl">
          <h2 className="text-lg font-medium">
            Push Notifications
          </h2>

          {[
            "Campaigns",
            "Market Alerts",
            "Order Notifications",
            "Changes to Account"
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center">
              <span className="text-(--color-70)">{item}</span>

              <input
                type="checkbox"
                className="w-5 h-5 accent-(--color-primary)"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
