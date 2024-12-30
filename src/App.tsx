import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ControllingServices from "./pages/services/ControllingServices";
import StatutoryServices from "./pages/services/StatutoryServices";
import StandardsServices from "./pages/services/StandardsServices";
import SecondmentServices from "./pages/services/SecondmentServices";
import TechnologyServices from "./pages/services/TechnologyServices";
import TrainingServices from "./pages/services/TrainingServices";
import AuditSupport from "./pages/services/AuditSupport";
import { Footer } from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen flex flex-col">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/services/controlling" element={<ControllingServices />} />
              <Route path="/services/statutory" element={<StatutoryServices />} />
              <Route path="/services/standards" element={<StandardsServices />} />
              <Route path="/services/secondment" element={<SecondmentServices />} />
              <Route path="/services/technology" element={<TechnologyServices />} />
              <Route path="/services/training" element={<TrainingServices />} />
              <Route path="/services/audit-support" element={<AuditSupport />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;