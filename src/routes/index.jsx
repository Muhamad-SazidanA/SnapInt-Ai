import { createBrowserRouter, Navigate } from "react-router-dom";
import Template from "../layout/Template";
import Dashboard from "../pages/Dashboard";

import Finance from "../pages/users/Solusi/Finance";
import HumanResource from "../pages/users/Solusi/HumanResource";
import Logistic from "../pages/users/Solusi/Logistic";
import AboutUsPage from "../pages/users/AboutUsPage";
import ContactUsPage from "../pages/users/ContactUsPage";
import RequestDemoPage from "../pages/RequestDemoPage";
import BlogPage from "../pages/users/BlogPage";
import CaseStudiesPage from "../pages/users/CaseStudiesPage";

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
                path: "demo",
                element: <RequestDemoPage />,
            },
            {
                path: "request-demo",
                element: <RequestDemoPage />,
            },
            {
                path: "solusi/finance",
                element: <Finance />,
            },
            {
                path: "finance",
                element: <Finance />,
            },
            {
                path: "solusi/human-resource",
                element: <HumanResource />,
            },
            {
                path: "human-resource",
                element: <HumanResource />,
            },
            {
                path: "solusi/logistic",
                element: <Logistic />,
            },
            {
                path: "logistic",
                element: <Logistic />,
            },
            {
                path: "about",
                element: <AboutUsPage />,
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
                path: "contact",
                element: <ContactUsPage />,
            },
            {
                path: "*",
                element: <Navigate to="/" replace />,
            },
        ],
    },

]);