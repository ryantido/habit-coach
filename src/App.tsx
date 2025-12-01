import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layouts/Layout";

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<h1>Welcome</h1>} />
        <Route path="/habitudes" element={<h1>habitudes</h1>} />
        <Route path="/statistiques" element={<h1>statistiques</h1>} />
        <Route path="/communaute" element={<h1>communaute</h1>} />
        <Route path="/parametres" element={<h1>parametre</h1>} />
        <Route path="/aide" element={<h1>aide</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </Layout>
  );
};
