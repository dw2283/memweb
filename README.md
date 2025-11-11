# Memweb (Vue 3 + Vite)

Landing page for memverse, located under `memweb/` and deployed via GitHub Pages.

## Tech
- Vue 3, TypeScript, Vite
- Pinia, Vue Router
- Element Plus, Tailwind CSS, Sass
- ECharts, vue3-markdown-it

## Local Dev
```bash
cd memweb
yarn
yarn dev
```

## GitHub Pages Deployment
1. Push your repo with this folder structure.
2. The root workflow at `.github/workflows/deploy.yml` builds from `./memweb`.
3. The workflow sets `BASE_PATH=/<repo-name>/` automatically.
4. Enable Pages: Settings → Pages → Source: GitHub Actions.

## Notes
- Override base path by setting env `BASE_PATH` during build if needed.
- Update navigation and content in `src/layouts/DefaultLayout.vue` and `src/views/*`.