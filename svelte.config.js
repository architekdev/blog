import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import readingTime from 'mdsvex-reading-time';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $src: 'src',
      $routes: 'src/routes',
      $components: 'src/lib/components',
      $blog: 'src/routes/blog'
    }
  },
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      remarkPlugins: [readingTime],
      // Adds IDs to headings, and anchor links to those IDs
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
      highlight: {
        alias: { js: 'javascript' }
      }
    })
  ],
  extensions: ['.svelte', '.md']
};

export default config;

