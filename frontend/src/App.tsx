
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VolunteerRegister from "./pages/VolunteerRegister";
import OrganizationRegister from "./pages/OrganizationRegister";
import Events from "./pages/Events";
import Organizations from "./pages/Organizations";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import VolunteerDashboardPage from "./pages/VolunteerDashboardPage";
import CreateEventPage from "./pages/CreateEventPage";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/volunteer-register" element={<VolunteerRegister />} />
        <Route path="/organization-register" element={<OrganizationRegister />} />
        <Route path="/events" element={<Events />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
        <Route path="/volunteer-dashboard" element={<VolunteerDashboardPage />} />
        <Route path="/create-event" element={<CreateEventPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
