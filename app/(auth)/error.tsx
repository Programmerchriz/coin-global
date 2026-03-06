
'use client';

import ErrorClient from '@/components/all/ErrorClient';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="">
      <ErrorClient title="auth" page="" reset={reset} />
    </div>
  );
}
