export const siteConfig = {
  companyName: "ALNIKO",
  siteUrl: "https://example.com",
  social: {
    facebook: "https://www.facebook.com/alnikojeleniagora",
  },
} as const;

export type ServiceSlug = "fuel" | "scrap" | "hoses" | "catalysts";

export type CompanyLocation = {
  id: string;
  title: string;
  address: string;
  phoneLabel: string;
  phoneHref: string;
  services: ServiceSlug[];
};

export const locations: CompanyLocation[] = [
  {
    id: "jelenia-gora-powstancow",
    title: "Skup złomu, skład opału, zakuwanie węży hydraulicznych",
    address: "Powstańców Śląskich 41, 58-500 Jelenia Góra",
    phoneLabel: "519 411 866",
    phoneHref: "tel:+48519411866",
    services: ["scrap", "fuel", "hoses"],
  },
  {
    id: "jelenia-gora-wroclawska-35",
    title: "Skup złomu, skup katalizatorów",
    address: "Wrocławska 35, 58-506 Jelenia Góra",
    phoneLabel: "75 75 18 183",
    phoneHref: "tel:+48757518183",
    services: ["scrap", "catalysts"],
  },
  {
    id: "zabkowice-slaskie-wroclawska-27",
    title: "Skup złomu, skup katalizatorów",
    address: "Wrocławska 27, 57-200 Ząbkowice Śląskie",
    phoneLabel: "604 529 255",
    phoneHref: "tel:+48604529255",
    services: ["scrap", "catalysts"],
  },
];
