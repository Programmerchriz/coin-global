
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import DashboardClientPage from '@/app/(dashboard)/dashboard/DashboardClient';

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/sign-in");

  return (
    <DashboardClientPage
      session = {session}
    />
  );
};
