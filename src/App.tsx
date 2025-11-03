import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import FirmPage from "./pages/FirmPage";
import TeamPage from "./pages/TeamPage";
import InsightsPage from "./pages/InsightsPage";
import InsightDetailPage from "./pages/InsightDetailPage";
import ContactPage from "./pages/ContactPage";
import GetStartedPage from "./pages/GetStartedPage";
import NotFound from "./pages/NotFound";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import TeamManagementPage from "./pages/admin/TeamManagementPage";
import ServicesManagementPage from "./pages/admin/ServicesManagementPage";
import InsightsManagementPage from "./pages/admin/InsightsManagementPage";
import SettingsPage from "./pages/admin/SettingsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/firm/:section" element={<FirmPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:id" element={<InsightDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="team" element={<TeamManagementPage />} />
            <Route path="services" element={<ServicesManagementPage />} />
            <Route path="insights" element={<InsightsManagementPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
