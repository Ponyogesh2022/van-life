import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import About from "./Components/Ui/About";
import Home from "./Components/Ui/Home";
import Navbar from "./Components/Navbar";
import "../server.ts";
import Vans from "./Components/Ui/Vans.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
