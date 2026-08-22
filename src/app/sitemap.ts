import { readdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

const excludedRoutes = new Set(['/datenschutz', '/impressum']);

function discoverIndexableRoutes(directory: string): string[] {
  const routes: string[] = [];

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const entryPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      routes.push(...discoverIndexableRoutes(entryPath));
      continue;
    }

    if (entry.name !== 'page.tsx') continue;

    const routeDirectory = relative(join(process.cwd(), 'src', 'app'), directory);
    const route = routeDirectory ? `/${routeDirectory.split(sep).join('/')}` : '';
    if (!excludedRoutes.has(route)) routes.push(route);
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return discoverIndexableRoutes(join(process.cwd(), 'src', 'app'))
    .sort((a, b) => a.localeCompare(b, 'de'))
    .map((route) => ({
      url: `${siteConfig.baseUrl}${route}`,
    }));
}
