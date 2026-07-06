import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/espace-client/'], // Espace client n'a pas besoin d'être indexé car il est privé/bientôt disponible
    },
    // Remplacez cette URL par votre nom de domaine final une fois en production
    sitemap: 'https://spec-oic-togo.org/sitemap.xml',
  }
}
