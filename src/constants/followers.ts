import { Bike, BookOpen, Droplet, HeartPulse, LibraryBig } from "lucide-react";

export const followers = [
  {
    name: "Méditation",
    members: "1.2M",
    Icon: HeartPulse,
    background: "purple",
  },
  {
    name: "Lecture",
    members: "980",
    Icon: BookOpen,
    background: "blue",
  },
  {
    name: "Faire du sport",
    members: "62M",
    Icon: Bike,
    background: "rose",
  },
  {
    name: "Écrire un journal",
    members: "850",
    Icon: LibraryBig,
    background: "amber",
  },
  {
    name: "Boire de l'eau",
    members: "510",
    Icon: Droplet,
    background: "blue",
  },
] as const;

export const ColorMap = {
  purple: "bg-purple-400 text-purple-50",
  blue: "bg-blue-400 text-blue-50",
  rose: "bg-rose-400 text-rose-50",
  amber: "bg-amber-400 text-amber-50",
} as const
