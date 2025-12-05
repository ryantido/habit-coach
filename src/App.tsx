import { Layout } from "./components/layouts/Layout";
import NotFound from "./components/pages/NotFound";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Statistiques = lazy(() => import("@components/pages/Statistiques"));
const Communaute = lazy(() => import("@components/pages/Communaute"));
const Parametre = lazy(() => import("@components/pages/Parametre"));
const Habitudes = lazy(() => import("@components/pages/Habitudes"));
const Dashboard = lazy(() => import("@components/pages/Dashboard"));
const Profile = lazy(() => import("@components/pages/Profile"));
const Details = lazy(() => import("@components/pages/Details"));
const Aide = lazy(() => import("@components/pages/Aide"));

export const App = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="w-8 h-8 rounded-full border-b-2 border-indigo-900 animate-spin relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        }
      >
        <Routes>
          <Route path="/statistiques" element={<Statistiques />} />
          <Route path="/communaute" element={<Communaute />} />
          <Route path="/parametres" element={<Parametre />} />
          <Route path="/habitude/:id" element={<Details />} />
          <Route path="/habitudes" element={<Habitudes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/aide" element={<Aide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
