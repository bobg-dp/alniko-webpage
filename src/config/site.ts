import siteData from "./site-data.json";
import type { ServiceSlug } from "./services";

export type { ServiceSlug };

export const siteConfig = {
  companyName: siteData.meta.companyName,
  siteUrl: siteData.meta.siteUrl,
  social: {
    facebook: siteData.meta.facebookUrl,
  },
} as const;

export type CompanyLocation = {
  id: string;
  title: string;
  address: string;
  phoneLabel: string;
  phoneHref: string;
  city: string;
  postcode: string;
  services: ServiceSlug[];
  lat: number;
  lng: number;
};

export const locations: CompanyLocation[] = siteData.locations.map((location) => ({
  id: location.id,
  title: location.title,
  address: `${location.address}, ${location.postcode} ${location.city}`,
  phoneLabel: location.phone,
  phoneHref: `tel:+48${location.phone.replace(/\s/g, "")}`,
  city: location.city,
  postcode: location.postcode,
  services: location.services as ServiceSlug[],
  lat: location.lat,
  lng: location.lng,
}));
