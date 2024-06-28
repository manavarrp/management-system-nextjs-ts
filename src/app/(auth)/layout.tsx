import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col justify-center items-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className=" font-bold text-3xl text-[#2E2E2E]">Bievenido !</h1>
          <p className="text-base text-[#555555]">
            Ingresa o crea tu cuenta para continuar
          </p>
          <div className="flex items-center justify-center mt-8">
            <ClerkLoaded>{children}</ClerkLoaded>
            <ClerkLoading>
              <Loader2 className="animate-spin text-muted-foreground" />
            </ClerkLoading>
          </div>
        </div>
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        <Image src={"/logo.png"} height={250} width={250} alt="logo" />
      </div>
    </div>
  );
};

export default AuthLayout;
