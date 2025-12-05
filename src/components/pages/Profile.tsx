import { Link } from "react-router-dom";
import { MotionWrapper } from "../layouts/MotionWrapper";
import { Button } from "../ui/Button";

export default function Profile() {
  const info = [
    {
      number: 12,
      text: "Habitudes Actives",
    },
    {
      number: 78,
      text: "Jours de Série",
    },
    {
      number: 150,
      text: "Habitudes Complétées",
    },
  ];
  return (
    <MotionWrapper ariaLabel="profile section">
      <h1 className="text-3xl font-extrabold tracking-tighter text-gray-900 mb-4">
        Mon Profil
      </h1>
      <section
        className="bg-gray-50 shadow-sm rounded-xl p-5 space-y-7"
        aria-label="user information"
      >
        <div className="flex flex-col items-center">
          <img
            src="/uploads/avatar/default.jpg"
            alt="profile photo"
            className="h-20 w-20 rounded-full object-cover ring ring-gray-100 my-2"
          />
          <p className="text-gray-900 font-bold text-lg">Jeanne Dupont</p>
          <span className="text-xs text-gray-500 -translate-y-1">
            jeanne@dupont.com
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-2">
          {info.map(({ number, text }, i) => (
            <div
              key={i}
              className="border rounded-2xl border-gray-200 p-4 text-center"
            >
              <p className="text-gray-900 font-bold text-lg">{number}</p>
              <span className="text-xs text-gray-500 font-medium">{text}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-3 max-md:flex-col">
          <div className="space-y-2 flex-1">
            <label htmlFor="userName" className="text-xs text-gray-600 block">
              Nom d'utilisateur
            </label>
            <input
              type="text"
              id="userName"
              className="w-full max-w-xl rounded-3xl border border-gray-200 focus:ring-gray-200 focus:ring-3 transition duration-300 focus:outline-1 focus:outline-gray-50 py-1.5 px-3 placeholder:text-sm spacing"
              placeholder="Jeanne Dupont"
            />
          </div>
          <div className="space-y-2 flex-1">
            <label htmlFor="email" className="text-xs text-gray-600 block">
              Adresse email
            </label>
            <input
              type="email"
              id="email"
              className="w-full max-w-xl rounded-3xl border border-gray-200 focus:ring-gray-200 focus:ring-3 transition duration-300 focus:outline-1 focus:outline-gray-50 py-1.5 px-3 placeholder:text-sm spacing"
              placeholder="jeanne@dupont.com"
            />
          </div>
        </div>
        <hr className="mt-1 mb-7 text-gray-200 rounded-full" />
        <div className="flex items-center justify-between mb-2 max-md:flex-col gap-y-4 flex-wrap">
          <Link
            to="#"
            className="text-blue-600 hover:underline text-sm max-md:self-start"
          >
            Modifier le mot de passe
          </Link>
          <Button
            label="Enregistrer les modifications"
            className="px-4 text-sm max-md:w-full"
          />
        </div>
      </section>
    </MotionWrapper>
  );
}
