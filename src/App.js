import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { routes } from "./constant";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/SpinnerContext";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "./components/LoadingSpinner";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { Toaster } from "react-hot-toast";
import ServicePageLayout from "./Layout/ServicePageLayout";
import WebDevelopment from "./pages/ServicePage/Webdevelopment";
import AppDevelopment from "./pages/ServicePage/AppDevelopment";
import ArtificialIntelligence from "./pages/ServicePage/ArtificialIntelligence";
import GenerativeAi from "./pages/ServicePage/GenerativeAi";
import CustomSoftwareDevelopment from "./pages/ServicePage/CustomSoftwareDevelopment";
import MachineLearning from "./pages/ServicePage/MachineLearning";
import DataAnalyticsAndDataScience from "./pages/ServicePage/DataAnalyticsAndDataScience";
import BlockchainDevelopment from "./pages/ServicePage/BlockchainDevelopment";
import ItConsultingAndStrategy from "./pages/ServicePage/ItConsultingAndStrategy";
import CloudMigrationServices from "./pages/ServicePage/CloudMigrationServices";
import UiUxDesigning from "./pages/ServicePage/UiUxDesigning";
import ChatbotDevelopmentAiCalling from "./pages/ServicePage/ChatbotDevelopmentAiCalling";
const LandingPage = lazy(() => import("./pages/LandingPage"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

AOS.init({
  once: true,
  duration: 1000,
  easing: "ease-in-out-quart",
  throttleDelay: 200,
});

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <SpinnerContextProvider>
        <Router>
          <LoadingSpinnerContext />
          <WhatsAppIcon />
          <ScrollToTop />
          <Toaster
            position="top-bottom"
            toastOptions={{
              style: {
                background: "#010C2A",
                color: "#ffffff",
              },
            }}
          />
          <Routes>
            {/* Website pages */}
            {routes.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                element={route.element}
              />
            ))}

            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/thank-you" element={<ThankYou />} />
            {/** service page */}
            <Route path="/services" element={<ServicePageLayout />}>
              <Route path="website-development" element={<WebDevelopment />} />
              <Route
                path="mobile-app-development"
                element={<AppDevelopment />}
              />
              <Route
                path="ai-development"
                element={<ArtificialIntelligence />}
              />
              <Route path="generative-ai" element={<GenerativeAi />} />
              <Route
                path="chatbot-development"
                element={<GenerativeAi />}
                // element={<ChatbotDevelopmentAiCalling />}
              />
              <Route
                path="custom-software-development"
                element={<CustomSoftwareDevelopment />}
              />
              <Route path="machine-learning" element={<MachineLearning />} />
              <Route
                path="data-analytics"
                element={<DataAnalyticsAndDataScience />}
              />
              <Route
                path="blockchain-development"
                element={<BlockchainDevelopment />}
              />
              <Route
                path="it-consulting"
                element={<ItConsultingAndStrategy />}
              />
              <Route
                path="cloud-migration"
                element={<CloudMigrationServices />}
              />
              <Route path="ui-ux-designing" element={<UiUxDesigning />} />
            </Route>
            {/* Landing pages */}
            <Route
              path="/web-development"
              element={<LandingPage page={"web-development"} />}
            />
            <Route
              path="/app-development"
              element={<LandingPage page={"app-development"} />}
            />
          </Routes>
        </Router>
      </SpinnerContextProvider>
    </Suspense>
  );
}

export default App;
