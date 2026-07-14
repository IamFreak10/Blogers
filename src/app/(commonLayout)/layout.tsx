import { Navbar } from '@/components/Layouts/Navbar';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
