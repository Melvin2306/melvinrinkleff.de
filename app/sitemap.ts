import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://melvinrinkleff.de",
      lastModified: new Date(),
    },
    {
      url: "https://melvinrinkleff.de/cv",
      lastModified: new Date(),
    },
    {
      url: "https://melvinrinkleff.de/projects",
      lastModified: new Date(),
    },
    {
      url: "https://melvinrinkleff.de/photos",
      lastModified: new Date(),
    },
    {
      url: "https://melvinrinkleff.de/blog",
      lastModified: new Date(),
    },
  ];
}
