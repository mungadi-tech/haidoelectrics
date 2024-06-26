import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { routeTree } from "./routeTree.gen";
import { Theme } from "@radix-ui/themes";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <Theme accentColor="red">
        <RouterProvider router={router} />
      </Theme>
    </StrictMode>
  );
}
