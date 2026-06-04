// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import rehypeMermaid from "rehype-mermaid-lite";

// NOTE: `site` and `base` must match the final GitHub Pages URL.
// For a project page the base is "/<repo-name>". Override via env when the
// repo name / org is confirmed (see README "Publishing" section).
const SITE = process.env.SITE_URL ?? "https://lkananen.github.io";
const BASE = process.env.BASE_PATH ?? "/innovaatio-hackaton-2026-kesakuu";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "always",
  markdown: {
    rehypePlugins: [rehypeMermaid],
  },
  integrations: [
    starlight({
      title: "Agentic DataOps Hackathon",
      description:
        "From idea to implementation — three standalone, hands-on hackathons for building agentic data platforms on Azure with GitHub Copilot.",
      tagline: "From idea to implementation",
      lastUpdated: true,
      expressiveCode: {
        styleOverrides: { borderRadius: "0.5rem" },
      },
      sidebar: [
        {
          label: "🐘 RAG on PostgreSQL",
          collapsed: false,
          items: [{ autogenerate: { directory: "rag-postgres" } }],
        },
        {
          label: "🔎 Text-to-SQL Agent",
          collapsed: true,
          items: [{ autogenerate: { directory: "text-to-sql" } }],
        },
        {
          label: "✨ Fabric AI Functions",
          collapsed: true,
          items: [{ autogenerate: { directory: "fabric-ai" } }],
        },
      ],
      customCss: [
        "@fontsource/space-grotesk/400.css",
        "@fontsource/space-grotesk/700.css",
        "@fontsource/manrope/400.css",
        "@fontsource/manrope/700.css",
        "@fontsource/ibm-plex-mono/400.css",
        "@fontsource/ibm-plex-mono/500.css",
        "./src/styles/custom.css",
      ],
    }),
  ],
});
