import siteData from "./site-data.json";

export type ServiceSlug = "fuel" | "scrap" | "hoses" | "catalysts";

export type ServicePageContent = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroIntro: string;
  offerTitle: string;
  offerPoints: string[];
  wholesaleTitle?: string;
  wholesalePoints?: string[];
};

export type ServiceHighlight = {
  icon: string;
  text: string;
};

export type ServiceDefinition = {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  heroLabel: string;
  path: string;
  color: string;
  navIcon: string;
  panelBg: string;
  sectionImage: string;
  sectionImageContain: boolean;
  galleryImages: Array<string | { src: string; thumb?: string }>;
  galleryLayout: "stack" | "side" | "featured" | "single" | "hero-mini";
  description: string;
  highlights?: ServiceHighlight[];
  ctaLabel: string;
  menuItems: { label: string; href: string }[];
  page: ServicePageContent;
};

export const services = siteData.services as ServiceDefinition[];

export const serviceMap = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<ServiceSlug, ServiceDefinition>;

export const servicePagesCommon = siteData.servicePages.common;
