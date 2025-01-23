import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Footer from "./components/Footer";
import EntruempelungPage from "./pages/EntruempelungPage.jsx";
import UmzugPage from "./pages/UmzugPage.jsx";
import ConsultationPage from "./pages/ConsultationPage.jsx";
import WhatsAppButton from "./components/WhatsAppButton"; // WhatsApp-Button importieren
import ImpressumPage from "./pages/ImpressumPage";
import DatenschutzPage from "./pages/DatenschutzPage";

import "./App.css";

// Layout Component to decide the structure of each route
function Layout({ children }) {
  const location = useLocation();

  // Paths where only Navbar and Footer are required
  const navbarOnlyPaths = ["/entruempelung", "/umzug", "/anfrage"];

  const isNavbarOnly = navbarOnlyPaths.includes(location.pathname);

  return (
    <div className="page-container">
      <Navbar />
      {isNavbarOnly ? (
        <div className="content-wrap">{children}</div>
      ) : (
        <>
          <div>
            {children}
          </div>
          <Services />
          <Footer />
        </>
      )}
      {/* WhatsApp-Button wird auf allen Seiten angezeigt */}
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <Layout>
              <HeroSection />
            </Layout>
          }
        />
        {/* Entrümpelung Page */}
        <Route
          path="/entruempelung"
          element={
            <Layout>
              <EntruempelungPage />
            </Layout>
          }
        />
        {/* Umzug Page */}
        <Route
          path="/umzug"
          element={
            <Layout>
              <UmzugPage />
            </Layout>
          }
        />
        {/* Kostenlos Beraten Page */}
        <Route
          path="/anfrage"
          element={
            <Layout>
              <ConsultationPage />
            </Layout>
          }

         /* Neue Routen für Impressum und Datenschutz */
      />
        <Route
        path="/impressum"
        element={
          <Layout>
            <ImpressumPage />
          </Layout>
        }
      />
      <Route
        path="/datenschutz"
        element={
          <Layout>
            <DatenschutzPage />
          </Layout>
        }
      />
    </Routes>
  </Router>
);
}

export default App;
