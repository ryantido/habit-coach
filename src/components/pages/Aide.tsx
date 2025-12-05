import { Search } from "lucide-react";
import { MotionWrapper } from "../layouts/MotionWrapper";
import FAQ from "../ui/FAQ";
import { help } from "@/constants/help";
import { Button } from "../ui/Button";

export default function Aide() {
  return (
    <MotionWrapper ariaLabel="help section">
      <header className="mb-4">
        <h1 className="text-3xl font-extrabold tracking-tighter text-gray-900 max-md:mb-2">
          Centre d&apos;aide
        </h1>
        <span className="text-gray-400 text-[15px]" aria-label="sub-title">
          Trouvez des r&eacute;ponses &agrave; vos questions
        </span>
      </header>
      <div className="relative mb-6 md:mb-10">
        <input
          className="w-full bg-gray-50 rounded-3xl border border-gray-200 
        focus:ring-gray-200 focus:ring-3 transition duration-300 
          focus:outline-1 focus:outline-gray-50 py-1.5 pl-10 pr-3 
          placeholder:text-sm spacing z-0"
          aria-label="search-input"
          placeholder="Rechercher dans le centre d'aide..."
          type="search"
          name="search"
          id="search"
        />
        <Search
          size={20}
          className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400"
          aria-label="search-icon"
          aria-hidden="true"
        />
      </div>
      <section className="space-y-4 mb-6 md:mb-10" aria-label="help-content">
        <h2 className="text-xl font-bold tracking-tighter text-gray-900">
          Questions les plus fréquentes
        </h2>
        <FAQ items={help} />
      </section>
      <footer className="flex flex-col gap-y-3 items-center text-center">
        <h3 className="text-lg font-bold text-gray-900">
          Vous ne trouvez pas de r&eacute;ponse ?
        </h3>
        <p className="max-w-md text-sm text-gray-600">
          Notre &eacute;quipe est l&agrave; pour vous aider.
          N&apos;h&eacute;sitez pas &agrave; nous contacter
        </p>
        <Button
          label="Contacter le support"
          className="rounded-xl md:py-1.5 md:px-6 max-md:w-full mt-2"
        />
      </footer>
    </MotionWrapper>
  );
}
