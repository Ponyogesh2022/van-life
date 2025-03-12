import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import "./App.css";
import Home from "./Components/Ui/Home";
import "../server.ts";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./Components/Layout/Layout.tsx";
import VansDetailPage from "./Components/Ui/Vans/VansDetailPage.tsx";
import Dashboard from "./Components/Ui/Host/Dashboard.tsx";
import Income from "./Components/Ui/Host/Income.tsx";
import Reviews from "./Components/Ui/Host/Reviews.tsx";
import HostLayout from "./Components/Layout/HostLayout.tsx";
import HostVans from "./Components/Ui/Host/HostVans.tsx";
import Details from "./Components/Ui/HostVanDetail/Details.tsx";
import Pricing from "./Components/Ui/HostVanDetail/Pricing.tsx";
import Photos from "./Components/Ui/HostVanDetail/Photos.tsx";
import HostVansDetails from "./Components/Ui/Host/HostVansDetails.tsx";
import NotFound from "./Components/Ui/404/NotFound.tsx";
import About from "./Components/Ui/About.tsx";
import Vans, { loader as vansLoader } from "./Components/Ui/Vans/Vans.tsx";
function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} loader={vansLoader} />
        <Route path="vans/:id" element={<VansDetailPage />} />

        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVansDetails />}>
            <Route index element={<Details />} />
            {/* <Route path="details" element={<Details />} /> */}
            <Route path="pricing" element={<Pricing />} />
            <Route path="photos" element={<Photos />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
