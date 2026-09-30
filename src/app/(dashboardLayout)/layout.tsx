import { AppSidebar } from '@/components/app-sidebar';

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export default function DashboardLayout({
  admin,
  user,
}: {
  admin: React.ReactNode;
  user: React.ReactNode;
}) {
  const UserInfo = {
    role: 'admin',
  };
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>{UserInfo?.role === 'admin' ? admin : user}</SidebarInset>
    </SidebarProvider>
  );
}
