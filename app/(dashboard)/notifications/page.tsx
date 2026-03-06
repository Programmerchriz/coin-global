
import { Suspense } from "react";
import { redirect } from "next/navigation";

import { getServerSession } from "@/lib/session";
import NotificationsClient from "./NotificationsClient";
import Loading from "./loading";

export default async function Notifications() {
  const session = await getServerSession();
  if (!session) redirect("/sign-in");

  return (
    <Suspense fallback={<Loading />}>
      <NotificationsClient />
    </Suspense>
  );
};
