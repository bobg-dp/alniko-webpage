import siteData from "./site-data.json";
import type { ServiceSlug } from "./site";

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
  description: string;
  ctaLabel: string;
  menuItems: { label: string; href: string }[];
};

export const services = siteData.services as ServiceDefinition[];

export const serviceMap = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<ServiceSlug, ServiceDefinition>;
