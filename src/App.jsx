import React from 'react';
import Pricing from './pages/Pricing/Pricing';
import Navbar from './components/Navbar/Navbar';
import FloatingSocialMediaButton from './components/FloatingSocialMediaButton';
import Orders from './pages/Orders/Orders';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import Consulting from './pages/Consulting/Consulting';
import Training from './components/Training/Training';
import Docs from './pages/Docs/Docs';
import Installation from './pages/Docs/Components/Installation';
import LLMModel from './pages/Docs/Components/LLMModel';
import WidgetGeneration from './pages/Docs/Components/WidgetGeneration';
import PromptGuidelines from './pages/Docs/Components/PromptGuidelines';
import PreviewData from './pages/Docs/Components/PreviewData';
import Dashboards from './pages/Docs/Components/Dashboards';
import FirstDashboard from './pages/Docs/Components/FirstDashboard';
import DataSources from './pages/Docs/Components/DataSources';
import RealTimeDashboards from './pages/Docs/Components/RealTimeDashboards';
import Features from './pages/Features/Features';
import Smartcardai from './pages/Product/Smartcardai';
import Whysmartcardai from './pages/WhySmartCardAi/Whysmartcardai';
import AdvancedAnalytics from './pages/Docs/Components/AdvancedAnalytics';
import Contact from './pages/Contact/contact';
import Faq from './pages/Faq/Faq';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <FloatingSocialMediaButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whysmartcardai" element={<Whysmartcardai />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/smartcard-ai" element={<Smartcardai />} /> {/* New route */}

        <Route path="/features" element={<Features />}>
          <Route index element={<Navigate to="insight-generation" replace />} /> {/* Redirect to the first guideline */}
          <Route path=":guidelineType" element={<PromptGuidelines />} />
          <Route path="advanced-analytics" element={<AdvancedAnalytics />}>
            <Route path=":promptPath" element={<AdvancedAnalytics />} />
          </Route>
        </Route>
        <Route path="/docs" element={<Docs />}>
          <Route index element={<Installation />} /> {/* Default route for /docs */}
          <Route path="installation" element={<Installation />} />
          <Route path="llm-model" element={<LLMModel />} />
          <Route path="widget-generation" element={<WidgetGeneration />} />
          <Route path="preview-data" element={<PreviewData />} />
          <Route path="dashboards" element={<Dashboards />} />
          <Route path="data-sources" element={<DataSources />} />
          <Route path="real-time-dashboards" element={<RealTimeDashboards />} />
          <Route path="firstdashboard" element={<FirstDashboard />} />
          <Route path="prompting-guidelines" element={<PromptGuidelines />}>
            <Route path=":guidelineType" element={<PromptGuidelines />} />
          </Route>
          <Route path="advanced-analytics" element={<AdvancedAnalytics />}>
            <Route path=":promptPath" element={<AdvancedAnalytics />} />
          </Route>
          {/* <Route path="widget-generation" element={<WidgetGeneration />} />
          <Route path="dashboards" element={<Dashboards />} />
          <Route path="preview-data" element={<PreviewData />} />
          <Route path="data-sources" element={<DataSources />} />
          <Route path="real-time-dashboards" element={<RealTimeDashboards />} /> */}
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/training" element={<Training />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/faq/:id" element={<Faq />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;