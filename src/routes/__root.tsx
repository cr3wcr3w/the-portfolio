import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import AnimationWrapper from "../shared/components/animation-wrapper";
import Navigation from "../shared/components/navigation";
import Footer from "../shared/components/footer";

export const Route = createRootRoute({
  component: () => (
    <AnimationWrapper>
      <Navigation />
      <Outlet />
      <Footer />
      {/* <TanStackRouterDevtools /> */}
    </AnimationWrapper>
  ),
});
