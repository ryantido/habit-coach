import { Link } from "react-router-dom";
import { MotionWrapper } from "../layouts/MotionWrapper";
import { Switch } from "../ui/Switcher";
import { TabBar } from "../ui/Tabs";
import { useState } from "react";
import { Button } from "../ui/Button";

export default function Parametre() {
  const [tab, setTab] = useState<string>("clair");
  return (
    <MotionWrapper ariaLabel="settings section">
      <h1 className="text-3xl font-extrabold tracking-normal text-gray-900 mb-4">
        Param&egrave;tres
      </h1>
      <section
        className="bg-gray-50 rounded-xl shadow-sm p-5 text-gray-900 mb-3"
        aria-label="account information"
      >
        <h2 className="text-xl font-semibold mb-4">Informations du compte</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <label htmlFor="userName" className="text-xs text-gray-600 block">
              Nom
            </label>
            <input
              type="text"
              id="userName"
              className="w-full max-w-xl rounded-3xl border border-gray-200 focus:ring-gray-200 focus:ring-3 transition duration-300 focus:outline-1 focus:outline-gray-50 py-1.5 px-3 placeholder:text-sm spacing"
              placeholder="Jeanne Dupont"
              defaultValue="Jeanne Dupont"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs text-gray-600 block">
              Adresse email
            </label>
            <input
              type="email"
              id="email"
              className="w-full max-w-xl rounded-3xl border border-gray-200 focus:ring-gray-200 focus:ring-3 transition duration-300 focus:outline-1 focus:outline-gray-50 py-1.5 px-3 placeholder:text-sm spacing"
              placeholder="jeanne@dupont.com"
              defaultValue="jeanne@dupont.com"
            />
          </div>
        </div>
        <Link
          to="#"
          className="text-blue-600 hover:text-blue-600/80 underline text-sm"
        >
          Changer le mot de passe
        </Link>
      </section>
      <section
        className="bg-gray-50 rounded-xl shadow-sm p-5 text-gray-900 mb-3"
        aria-label="notifications"
      >
        <h2 className="text-xl font-semibold mb-4">
          Pr&eacute;f&eacute;rences de notification
        </h2>
        <p className="mb-2 text-sm font-medium text-gray-700 flex justify-between items-center">
          Rappels quotidiens <Switch defaultChecked />
        </p>
        <p className="mb-2 text-sm font-medium text-gray-700 flex justify-between items-center">
          Rapports de progr&egrave;s hebdomadaires <Switch />
        </p>
      </section>
      <section
        className="bg-gray-50 rounded-xl shadow-sm p-5 text-gray-900 mb-3"
        aria-label="Thème"
      >
        <h2 className="text-xl font-semibold mb-4">Th&egrave;me</h2>
        <TabBar
          value={tab}
          onValueChange={setTab}
          tabs={[
            { value: "clair", label: "Clair" },
            { value: "sombre", label: "Sombre" },
          ]}
          className="w-fit bg-gray-100/60"
        />
      </section>
      <section
        className="bg-gray-50 rounded-xl shadow-sm p-5 text-gray-900"
        aria-label="Gestion des données"
      >
        <h2 className="text-xl font-semibold mb-4">Gestion des données</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <Button
            className="rounded-xl bg-transparent hover:bg-transparent border border-blue-500 text-blue-500 max-md:focus:ring-1"
            label="Exporter mes données"
          />
          <Button
            className="rounded-xl bg-transparent hover:bg-transparent border border-red-500 text-red-500  max-md:focus:ring-1 focus:ring-red-600"
            label="Supprimer mon compte"
          />
        </div>
      </section>
      <Button
        label="Enregistrer les modifications"
        className="rounded-xl ml-auto mt-6 max-md:mt-4 max-md:w-full"
      />
    </MotionWrapper>
  );
}
