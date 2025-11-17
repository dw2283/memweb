# Memweb (Vue 3 + Vite)

Landing page for MemVerse, located under `memweb/` and deployed via GitHub Pages.

## Tech
- Vue 3, TypeScript, Vite
- Pinia, Vue Router
- Element Plus, Tailwind CSS, Sass
- ECharts, vue3-markdown-it

## Local Development & Testing

### Prerequisites
- Node.js (v16 or higher recommended)
- Yarn package manager (or npm)

### Setup Steps

1. **Install dependencies:**
```bash
cd memweb
yarn install
# or: npm install
```

2. **Start development server:**
```bash
yarn dev
# or: npm run dev
```

3. **Access the application:**
   - The dev server will start on `http://localhost:5173` (default Vite port)
   - Open your browser and navigate to the URL shown in the terminal
   - To view the demo page, navigate to: `http://localhost:5173/demo`

### Testing the Demo Features

Once the server is running, you can test:

1. **Multimodal Memory (Image Understanding):**
   - Go to `/demo` page
   - Upload an image using the drag-and-drop area
   - Click "Analyze Image" to see a mock analysis result

2. **Short/Long-term Memory:**
   - Add short-term memories (cleared on page refresh)
   - Add long-term memories (persisted in localStorage)
   - Use search and filter to find specific memories
   - Test that long-term memories persist after page refresh

3. **Parametric Memory (Q&A):**
   - Ask questions like "What is Vue 3?", "What is Pinia?", "What is memory?", "What is AI?"
   - View conversation history
   - Clear conversation history

### Build for Production

```bash
yarn build
# or: npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
yarn preview
# or: npm run preview
```

## GitHub Pages Deployment
1. Push your repo with this folder structure.
2. The root workflow at `.github/workflows/deploy.yml` builds from `./memweb`.
3. The workflow sets `BASE_PATH=/<repo-name>/` automatically.
4. Enable Pages: Settings → Pages → Source: GitHub Actions.

## Notes
- Override base path by setting env `BASE_PATH` during build if needed.
- Update navigation and content in `src/layouts/DefaultLayout.vue` and `src/views/*`.