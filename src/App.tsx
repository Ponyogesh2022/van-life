import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import About from "./Components/Ui/About";
import Home from "./Components/Ui/Home";
import "../server.ts";
import Vans from "./Components/Ui/Vans/Vans.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import VansDetailPage from "./Components/Ui/Vans/VansDetailPage.tsx";
import Layout from "./Components/Layout/Layout.tsx";
import Dashboard from "./Components/Ui/Host/Dashboard.tsx";
import Income from "./Components/Ui/Host/Income.tsx";
import Reviews from "./Components/Ui/Host/Reviews.tsx";
import HostLayout from "./Components/Layout/HostLayout.tsx";
import HostVans from "./Components/Ui/Host/HostVans.tsx";
import HostVansDetails from "./Components/Ui/Host/HostVansDetails.tsx";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VansDetailPage />} />

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVansDetails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
