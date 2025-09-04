import { createBrowserRouter, Navigate } from "react-router-dom";
import Template from "../layout/Template";
import Dashboard from "../pages/Dashboard";

import AIProcessingPage from "../pages/users/Platform/AIProcessingPage";
import JSONOutputPage from "../pages/users/Platform/JSONOutputPage";
import NoTemplatePage from "../pages/users/Platform/NoTemplatePage";
import ImprementasiOpsiPage from "../pages/users/Platform/ImprementasiOpsiPage";
import AccountsPayable from "../pages/users/Solusi/AccountsPayable";
import PurchaseOrderProcessing from "../pages/users/Solusi/PurchaseOrderProcessing";
import SolusiperIndustri from "../pages/users/Solusi/SolusiperIndustri";
import CustomerOnboarding from "../pages/users/Solusi/CustomerOnboarding";
import PendidikanPage from "../pages/users/Pelanggan/PendidikanPage";
import ManufakturPage from "../pages/users/Pelanggan/ManufakturPage";
import JenisMitraPage from "../pages/users/Mitra/JenisMitraPage";
import ManfaatMitraPage from "../pages/users/Mitra/ManfaatMitraPage";
import PeluangKemitraanPage from "../pages/users/Mitra/PeluangKemitraanPage";
import BlogPage from "../pages/users/Sumberdaya/BlogPage";
import WebinarPage from "../pages/users/Sumberdaya/WebinarPage";
import WhitepaperPage from "../pages/users/Sumberdaya/WhitepaperPage";
// import CaseStudiesPage from "../pages/users/Sumberdaya/CaseStudiesPage";
import CaseStudiesPage from "../pages/users/Sumberdaya/CaseStudiesPage";
import AboutUsPage from "../pages/users/Perusahaan/AboutUsPage";
import ContactUsPage from "../pages/users/Perusahaan/ContactUsPage";
import KarierPage from "../pages/users/Perusahaan/KarierPage";
import NewsroomPage from "../pages/users/Perusahaan/NewsroomPage";
import BankingPage from "../pages/users/Pelanggan/BankingPage";
import InsurancePage from "../pages/users/Pelanggan/InsurancePage";
import KesehatanPage from "../pages/users/Pelanggan/KesehatanPage";
import LogistikPage from "../pages/users/Pelanggan/LogistikPage";
import RequestDemoPage from "../pages/RequestDemoPage";
import GetStartedPage from "../pages/GetStartedPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
            {
                path: "solusi/ai-processing",
                element: <AIProcessingPage />,
            },
            {
                path: "json-output",
                element: <JSONOutputPage />,
            },
            {
                path: "no-template",
                element: <NoTemplatePage />,
            },
            {
                path: "deployment",
                element: <ImprementasiOpsiPage />,
            },
            {
                path: "demo",
                element: <RequestDemoPage />,
            },
            {
                path: "request-demo",
                element: <RequestDemoPage />,
            },
            {
                path: "free-trial",
                element: <GetStartedPage />,
            },
            {
                path: "get-started",
                element: <GetStartedPage />,
            },
            {
                path: "customer-onboarding",
                element: <CustomerOnboarding />,
            },
            {
                path: "solusi/customer-onboarding",
                element: <CustomerOnboarding />,
            },
            {
                path: "solusi/accounts-payable",
                element: <AccountsPayable />,
            },
            {
                path: "accounts-payable",
                element: <AccountsPayable />,
            },
            {
                path: "solusi/purchase-orders",
                element: <PurchaseOrderProcessing />,
            },
            {
                path: "purchase-orders",
                element: <PurchaseOrderProcessing />,
            },
            {
                path: "solusi/industry-solutions",
                element: <SolusiperIndustri />,
            },
            {
                path: "industry-solutions",
                element: <SolusiperIndustri />,
            },
            {
                path: "pelanggan/education",
                element: <PendidikanPage />,
            },
            {
                path: "education",
                element: <PendidikanPage />,
            },
            {
                path: "pelanggan/manufacturing",
                element: <ManufakturPage />,
            },
            {
                path: "manufacturing",
                element: <ManufakturPage />,
            },
            {
                path: "mitra/partner-types",
                element: <JenisMitraPage />,
            },
            {
                path: "partner-types",
                element: <JenisMitraPage />,
            },
            {
                path: "mitra/partner-benefits",
                element: <ManfaatMitraPage />,
            },
            {
                path: "partner-benefits",
                element: <ManfaatMitraPage />,
            },
            {
                path: "mitra/partnership-opportunities",
                element: <PeluangKemitraanPage />,
            },
            {
                path: "partnership-opportunities",
                element: <PeluangKemitraanPage />,
            },
            {
                path: "blog",
                element: <BlogPage />,
            },
            {
                path: "case-studies",
                element: <CaseStudiesPage />,
            },
            {
                path: "sumberdaya/case-studies",
                element: <CaseStudiesPage />,
            },
            {
                path: "webinars",
                element: <WebinarPage />,
            },
            {
                path: "whitepapers",
                element: <WhitepaperPage />,
            },
            {
                path: "about",
                element: <AboutUsPage />,
            },
            {
                path: "contact",
                element: <ContactUsPage />,
            },
            {
                path: "careers",
                element: <KarierPage />,
            },
            {
                path: "newsroom",
                element: <NewsroomPage />,
            },
            {
                path: "pelanggan/banking",
                element: <BankingPage />,
            },
            {
                path: "banking",
                element: <BankingPage />,
            },
            {
                path: "pelanggan/insurance",
                element: <InsurancePage />,
            },
            {
                path: "insurance",
                element: <InsurancePage />,
            },
            {
                path: "pelanggan/kesehatan",
                element: <KesehatanPage />,
            },
            {
                path: "kesehatan",
                element: <KesehatanPage />,
            },
            {
                path: "pelanggan/healthcare",
                element: <KesehatanPage />,
            },
            {
                path: "healthcare",
                element: <KesehatanPage />,
            },
            {
                path: "pelanggan/logistik",
                element: <LogistikPage />,
            },
            {
                path: "logistik",
                element: <LogistikPage />,
            },
            {
                path: "pelanggan/logistics",
                element: <LogistikPage />,
            },
            {
                path: "logistics",
                element: <LogistikPage />,
            },
            {
                path: "*",
                element: <Navigate to="/" replace />,
            },
        ],
    },
   
]);