import { About } from "@/components/parts/About";
import { MoreInfo } from "@/components/parts/MoreInfo";
import { Services } from "@/components/parts/Services";
import { Solutions } from "@/components/parts/Solutions";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <div>
      <Solutions />
      <About />
      <Services />
      <MoreInfo />
    </div>
  ),
});
