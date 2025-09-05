import mdx from "@astrojs/mdx"
import { transformerMetaHighlight, transformerNotationHighlight } from "@shikijs/transformers"
import tailwindcss from "@tailwindcss/vite"
import compress from "astro-compress"
import icon from "astro-icon"
import { defineConfig } from "astro/config"
import { fileURLToPath } from "url"

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: "https://understandlegacycode.com",
  integrations: [mdx(), icon(), compress()],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
      transformers: [transformerNotationHighlight(), transformerMetaHighlight()],
    },
  },
  vite: {
    css: {
      lightningcss: {
        drafts: { nesting: true },
        // Prevent overly aggressive minifaciton that messes up my @media rules
        minify: false,
      },
      preprocessorOptions: {
        scss: {
          logger: {
            warn: () => {},
          },
        },
      },
    },
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
        "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
        "@lib": fileURLToPath(new URL("./src/lib", import.meta.url)),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        "@content": fileURLToPath(new URL("./src/content", import.meta.url)),
        "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
        "@public": fileURLToPath(new URL("./public", import.meta.url)),
        "@post-images": fileURLToPath(new URL("./public/posts", import.meta.url)),
        "@project-images": fileURLToPath(new URL("./public/projects", import.meta.url)),
      },
    },
  },
})
