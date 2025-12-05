import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-gray-100 px-6 fixed inset-0 z-10">
      <motion.img
        src="/404.jpg"
        alt="Astronaut Lost"
        className="w-64 h-64 object-cover rounded-full shadow-xl mb-8 opacity-70"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-7xl font-extrabold tracking-tight"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        404
      </motion.h1>

      <motion.p
        className="text-lg text-gray-400 mt-4 max-w-xl text-center"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        Oups… La page que tu cherches semble perdue dans l’espace.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <Link
          to="/"
          className="mt-10 inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition
          shadow-lg hover:shadow-indigo-600/40"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour à l’accueil
        </Link>
      </motion.button>
    </div>
  );
}
