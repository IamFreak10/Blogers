import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';
export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex gap-2">
        <Button>
          <Link href="/dashboard/analytics/monthly">Monthly</Link>
        </Button>

        <Button>
          <Link href="/dashboard/analytics/weekly">Weekly</Link>
        </Button>
      </div>

      {children}
    </>
  );
}
