import React from 'react';
import Link from 'next/link';
export default function SalesLayout({
  children,
  devlopmentSlot,
  marketingSlot,
}: {
  children: React.ReactNode;
  devlopmentSlot: React.ReactNode;
  marketingSlot: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto flex gap-2 mb-20">
        <button>
          {' '}
          <Link href="/devlopment">Devlopment</Link>
        </button>
        <button>
          {' '}
          <Link href="/marketing">Marketing</Link>
        </button>
        <button>
          {' '}
          <Link href="/sales">Sales</Link>
        </button>
        <button>
          {' '}
          <Link href="/testing">Testing</Link>
        </button>
        <button>
          {' '}
          <Link href="/marketing/settings">Settings</Link>
        </button>
      </div>
      <div className="flex gap-2">
        {devlopmentSlot}
        {marketingSlot}
      </div>
      {children}
    </>
  );
}
