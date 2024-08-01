import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://jacs626.github.io",
  integrations: [tailwind(), robotsTxt()],
});
