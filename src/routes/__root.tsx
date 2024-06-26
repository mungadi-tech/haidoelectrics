import { Faq } from "@/components/parts/Faq";
import { Footer } from "@/components/parts/Footer";
import { Header } from "@/components/parts/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="flex h-dvh w-full flex-col justify-between text-primary">
      <Header />
      <Outlet />
      <Faq />
      <Footer />
    </div>
  ),
});
