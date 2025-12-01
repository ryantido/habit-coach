import {LayoutDashboard, CircleCheckBig, ChartNoAxesColumn, MessageSquareQuote, Settings, Info} from "lucide-react"

export const TOP_LEVEL_LINKS = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Toutes les habitudes", href: "/habitudes", icon: CircleCheckBig },
  { label: "Statistiques", href: "/statistiques", icon: ChartNoAxesColumn },
  { label: "Communauté", href: "/communaute", icon: MessageSquareQuote },
] as const;

export const SUB_LEVEL_LINKS = [
  { label: "Paramètres", href: "/parametres", icon: Settings },
  { label: "Aide", href: "/aide", icon: Info },
] as const;
