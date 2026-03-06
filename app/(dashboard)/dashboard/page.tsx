
import { getServerSession } from '@/lib/session';

import DashboardClientPage from '@/app/(dashboard)/dashboard/DashboardClient';
import { Suspense } from "react";
import Loading from './loading';


export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) return null;

  return (
    <Suspense fallback={<Loading />}>
      <DashboardClientPage />
    </Suspense>
  );
};
