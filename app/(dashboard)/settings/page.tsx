
import { getServerSession } from "@/lib/session";
import SettingsClient from "./SettingsClient";
import { Suspense } from "react";
import Loading from "./loading";

export default async function SettingsPage() {
  const session = await getServerSession();
  if (!session) return null;

  return (
    <Suspense fallback={<Loading />}>
      <SettingsClient
        user={session.user}
      />
    </Suspense>
  );
};
