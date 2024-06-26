import { About } from "@/components/parts/About";
import { MoreInfo } from "@/components/parts/MoreInfo";
import { DoParallaxForProjects } from "@/components/parts/ProjectParalax";
import { Services } from "@/components/parts/Services";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <div>
      <DoParallaxForProjects />
      <About />
      <Services />
      <MoreInfo />
    </div>
  ),
});
