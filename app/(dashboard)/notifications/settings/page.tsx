
import { Suspense } from 'react';

import SettingsClient from './SettingsClient';
import Loading from './loading';

export default function SettingsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <SettingsClient />
    </Suspense>
  );
}
