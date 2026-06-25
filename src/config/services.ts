import { colors } from "./theme";
import type { ServiceSlug } from "./site";

export type ServiceDefinition = {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  heroLabel: string;
  path: string;
  color: string;
  menuItems: { label: string; href: string }[];
};

export const services: ServiceDefinition[] = [
  
  {
    slug: "scrap",
    name: "Skup złomu",
    shortName: "Skup złomu",
    heroLabel: "Złom",
    path: "/skup-zlomu",
    color: colors.services.scrap,
    menuItems: [
      { label: "Lokalizacje", href: "/skup-zlomu#lokalizacje" },
      { label: "Godziny otwarcia", href: "/skup-zlomu#godziny-otwarcia" },
      { label: "Oferta", href: "/skup-zlomu#oferta" },
      { label: "Oferta hurtowa", href: "/skup-zlomu#oferta-hurtowa" },
    ],
  },
  {
    slug: "fuel",
    name: "Skład i sprzedaż opału",
    shortName: "Skład opału",
    heroLabel: "Opał",
    path: "/sklad-opalu",
    color: colors.services.fuel,
    menuItems: [
      { label: "Lokalizacje", href: "/sklad-opalu#lokalizacje" },
      { label: "Godziny otwarcia", href: "/sklad-opalu#godziny-otwarcia" },
      { label: "Oferta", href: "/sklad-opalu#oferta" },
    ],
  },
  {
    slug: "hoses",
    name: "Zakuwanie węży hydraulicznych",
    shortName: "Węże hydrauliczne",
    heroLabel: "Węże",
    path: "/weze-hydrauliczne",
    color: colors.services.hoses,
    menuItems: [
      { label: "Lokalizacje", href: "/weze-hydrauliczne#lokalizacje" },
      { label: "Godziny otwarcia", href: "/weze-hydrauliczne#godziny-otwarcia" },
      { label: "Oferta", href: "/weze-hydrauliczne#oferta" },
    ],
  },
  {
    slug: "catalysts",
    name: "Skup katalizatorów",
    shortName: "Katalizatory",
    heroLabel: "Katalizatory",
    path: "/katalizatory",
    color: colors.services.catalysts,
    menuItems: [
      { label: "Lokalizacje", href: "/katalizatory#lokalizacje" },
      { label: "Godziny otwarcia", href: "/katalizatory#godziny-otwarcia" },
      { label: "Oferta", href: "/katalizatory#oferta" },
    ],
  },
];

export const serviceMap = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<ServiceSlug, ServiceDefinition>;
