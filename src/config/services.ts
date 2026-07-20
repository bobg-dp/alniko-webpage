import siteData from "./site-data.json";

export type ServiceSlug = "fuel" | "scrap" | "hoses" | "catalysts";

export type ServicePageContent = {
  metaTitle: string;
  metaDescription: string;
  offerTitle: string;
  offerPoints: string[];
  wholesalePoints?: string[];
};

export type ServiceDefinition = {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  heroLabel: string;
  path: string;
  color: string;
  panelBg: string;
  sectionImage: string;
  sectionImageContain: boolean;
  galleryImages: string[];
  galleryLayout: "stack" | "side" | "featured" | "single";
  description: string;
  ctaLabel: string;
  menuItems: { label: string; href: string }[];
  page: ServicePageContent;
};

export const services = siteData.services as ServiceDefinition[];

export const serviceMap = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<ServiceSlug, ServiceDefinition>;

export const servicePagesCommon = siteData.servicePages.common;
