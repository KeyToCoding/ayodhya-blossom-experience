
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import RamMandirPage from "./pages/RamMandirPage";
import DharmshalaPage from "./pages/DharmshalaPage";
import BhojnalayaPage from "./pages/BhojnalayaPage";
import RestaurantsPage from "./pages/RestaurantsPage";
import HotelsPage from "./pages/HotelsPage";
import TravelPage from "./pages/TravelPage";
import PrasadPage from "./pages/PrasadPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/ram-mandir" element={<RamMandirPage />} />
              <Route path="/dharmshala" element={<DharmshalaPage />} />
              <Route path="/bhojnalaya" element={<BhojnalayaPage />} />
              <Route path="/restaurants" element={<RestaurantsPage />} />
              <Route path="/hotels" element={<HotelsPage />} />
              <Route path="/travel" element={<TravelPage />} />
              <Route path="/prasad" element={<PrasadPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
