import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

const routes = [
  '',
  '/ablauf-kosten',
  '/adhs-erwachsene-muenchen',
  '/adhs-beratung-muenchen',
  '/adhs-selbsttest-erwachsene',
  '/adhs-test-muenchen',
  '/adhs-therapie-muenchen',
  '/adhs-wissen',
  '/adhs-wissen/adhs-bei-frauen',
  '/adhs-wissen/adhs-emotionale-dysregulation',
  '/adhs-wissen/adhs-im-beruf',
  '/adhs-wissen/adhs-prokrastination',
  '/adhs-wissen/adhs-und-beziehungen',
  '/adhs-wissen/adhs-und-schlaf',
  '/kontakt-anfahrt',
  '/neurofeedback-muenchen',
  '/soziale-angst-muenchen',
  '/panikattacken-muenchen',
  '/spezifische-phobien-muenchen',
  '/depressive-verstimmung-muenchen',
  '/termin',
  '/ueber-mich',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.baseUrl}${route}`,
  }));
}
