// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import rehypeMermaid from "rehype-mermaid-lite";
import remarkGfm from "remark-gfm";

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
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeMermaid],
  },
  integrations: [
    starlight({
      title: "Agentic DataOps -hackathon",
      description:
        "Ideasta toteutukseen — kuusi itsenäistä, käytännönläheistä hackathonia agenttipohjaisten data-alustojen rakentamiseen Azuressa GitHub Copilotin avulla.",
      tagline: "Ideasta toteutukseen",
      lastUpdated: true,
      components: {
        Head: "./src/components/Head.astro",
      },
      locales: {
        root: { label: "Suomi", lang: "fi" },
      },
      expressiveCode: {
        styleOverrides: { borderRadius: "0.5rem" },
      },
      sidebar: [
        {
          label: "💬 Fabric Data Agent",
          collapsed: false,
          items: [{ autogenerate: { directory: "fabric-data-agent" } }],
        },
        {
          label: "🔌 MCP-palvelin omalle datalle",
          collapsed: true,
          items: [{ autogenerate: { directory: "mcp-data-server" } }],
        },
        {
          label: "✨ Fabric AI Functions",
          collapsed: true,
          items: [{ autogenerate: { directory: "fabric-ai" } }],
        },
        {
          label: "⚡ Reaaliaikainen analytiikka",
          collapsed: true,
          items: [{ autogenerate: { directory: "real-time-intelligence" } }],
        },
        {
          label: "🐘 RAG PostgreSQL:llä",
          collapsed: true,
          items: [{ autogenerate: { directory: "rag-postgres" } }],
        },
        {
          label: "🔎 Text-to-SQL-agentti",
          collapsed: true,
          items: [{ autogenerate: { directory: "text-to-sql" } }],
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
