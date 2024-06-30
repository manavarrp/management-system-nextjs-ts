import Header from "@/components/header";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">{children}</main>
    </>
  );
};

export default DashboardLayout;
