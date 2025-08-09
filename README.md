# Personal Portfolio Website

A modern portfolio website built with Next.js 13, TypeScript, and Tailwind CSS. Features a responsive design with sections for projects, experience, and contact information.

## 🚀 Tech Stack

- **Framework:** Next.js 13 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel-ready

## 📁 Project Structure

```text
├── app/                    # App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── privacy/           # Privacy policy page
│   └── projects/          # Projects page
├── components/            # Reusable UI components
│   ├── about.tsx          # About component
│   ├── header.tsx         # Header component
│   ├── linkedin-card.tsx  # LinkedIn integration component
│   ├── nav-item.tsx       # Navigation item component
│   ├── navigation.tsx     # Navigation component
│   ├── socials.tsx        # Social links component
│   ├── experiences/       # Experience components
│   │   ├── experience-item.tsx
│   │   └── experiences.tsx
│   └── projects/          # Project components
│       ├── project-item.tsx
│       └── projects.tsx
├── lib/                   # Utility functions
│   ├── github.ts          # GitHub API integration
│   └── linkedin.ts        # LinkedIn integration
├── public/                # Static assets
│   ├── icons/             # Favicon and app icons
│   └── translations/      # Translation files
├── types/                 # TypeScript type definitions
│   └── index.ts
└── Configuration files
    ├── next.config.js
    ├── tailwind.config.js
    ├── tsconfig.json
    └── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm (recommended package manager)

### Local Development

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   ```text
   http://localhost:3000
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Self-Hosting Options

### Option 1: Vercel (Recommended)

1. **Connect repository**

   - Push code to GitHub/GitLab/Bitbucket
   - Import project in Vercel dashboard

2. **Deploy**

   ```bash
   npm i -g vercel
   vercel
   ```

### Option 2: Docker

1. **Create Dockerfile**

   ```dockerfile
   FROM node:18-alpine AS base

   FROM base AS deps
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production

   FROM base AS builder
   WORKDIR /app
   COPY . .
   COPY --from=deps /app/node_modules ./node_modules
   RUN npm run build

   FROM base AS runner
   WORKDIR /app
   ENV NODE_ENV production
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs

   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

   USER nextjs
   EXPOSE 3000
   ENV PORT 3000

   CMD ["node", "server.js"]
   ```

2. **Build and run**

   ```bash
   docker build -t portfolio .
   docker run -p 3000:3000 portfolio
   ```

### Option 3: Traditional Server

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Start production server**

   ```bash
   npm start
   ```

3. **Configure reverse proxy (Nginx example)**

   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Customization

- **Styling:** Modify `tailwind.config.js` for design system changes
- **Content:** Update components in `/components` directory
- **Pages:** Add/modify routes in `/app` directory
- **Types:** Add TypeScript definitions in `/types/index.ts`

## 📱 Features

- ✅ Responsive design
- ✅ TypeScript for type safety
- ✅ Modern App Router architecture
- ✅ SEO optimized
- ✅ Fast loading with Next.js optimizations
- ✅ Component-based architecture

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
