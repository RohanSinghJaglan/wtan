'use client';

import { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
} 