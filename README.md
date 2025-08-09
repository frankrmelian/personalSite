# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 13 and TypeScript. **Free to copy and customize for your own use.**

## 🎯 What This Project Does

This is a complete portfolio website featuring:

- **About Page** - Personal introduction and background
- **Projects Page** - Showcase of your work with GitHub integration
- **Experience Timeline** - Professional history and skills
- **Blog Section** - Ready for content (currently placeholder)
- **Contact Information** - Social links and professional profiles

## 🚀 How to Use This Project

### 1. Clone and Setup

```bash
git clone https://github.com/frankrmelian/personalSite.git
cd personalSite
npm install
npm run dev
```

Your site will be running at `http://localhost:3000`

### 2. Customize Your Content

Edit the translation file to make it your own:

**File: `public/translations/en.json`**

```json
{
  "personalInfo": {
    "name": "Your Name Here",
    "email": "your.email@example.com",
    "location": "Your Location"
  },
  "aboutSection": {
    "title": "Your Title/Role",
    "description": "Write about yourself here..."
  },
  "socialLinks": {
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourusername"
  }
}
```

### 3. Deploy Your Site

**Option A - Vercel (Recommended)**

```bash
npm i -g vercel
vercel
```

**Option B - Netlify**

```bash
npm run build
# Upload the 'out' folder to Netlify
```

**Option C - GitHub Pages**

```bash
npm run build:github
# Push to gh-pages branch
```

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 13 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for responsive design
- **Data**: JSON-based content management
- **APIs**: GitHub API integration for project showcase

## 📁 Key Files to Customize

```
├── public/translations/en.json     # Your personal content
├── app/
│   ├── page.tsx                    # Homepage layout
│   ├── about/page.tsx              # About page
│   └── projects/page.tsx           # Projects showcase
├── components/
│   ├── about.tsx                   # About section component
│   ├── experiences/                # Work experience timeline
│   └── projects/                   # Project cards and layout
└── lib/
    ├── github.ts                   # GitHub API integration
    └── secure-data.ts              # Content loading system
```

## 🎨 Customization Guide

### Change Colors and Styling

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#your-color-here",
        // Add your custom colors
      },
    },
  },
};
```

### Add Your Projects

Projects are fetched from GitHub automatically. To add manual projects, edit the projects component in `components/projects/projects.tsx`.

### Update Experience Timeline

Edit your work experience in `public/translations/en.json` under the experiences section.

### Modify Layout

- Homepage: `app/page.tsx`
- Navigation: `components/navigation.tsx`
- Header: `components/header.tsx`

## 🔒 Privacy Features (Advanced)

This project includes a dual-environment system for privacy:

- **Development/Public**: Uses generic placeholder data
- **Production**: Uses your real personal information
- **Email Protection**: Prevents email harvesting from public repos

### Build Commands

- `npm run dev` - Development with safe data
- `npm run build` - Standard production build
- `npm run build:github` - Public demo with generic data
- `npm run build:production` - Full production with personal data

## 🚀 Deployment Options

### Free Hosting Platforms

1. **Vercel** - Best for Next.js (recommended)
2. **Netlify** - Great for static sites
3. **GitHub Pages** - Free with GitHub
4. **Railway** - Easy deployment
5. **Render** - Simple and fast

### Custom Domain

After deploying, you can add your custom domain in your hosting platform's settings.

## 🤝 Contributing & License

This project is **free to use, copy, and modify** for personal and commercial projects. No attribution required, but appreciated!

Feel free to:

- ✅ Use as your portfolio
- ✅ Modify and customize
- ✅ Learn from the code
- ✅ Share with others

## 📞 Need Help?

If you run into issues:

1. Check the Next.js documentation
2. Review the TypeScript errors in your IDE
3. Ensure all dependencies are installed
4. Verify your Node.js version (18+ recommended)

## ⚡ Quick Start Checklist

- [ ] Clone the repository
- [ ] Run `npm install`
- [ ] Start with `npm run dev`
- [ ] Edit `public/translations/en.json` with your info
- [ ] Customize styling in components
- [ ] Deploy to your preferred platform
- [ ] Add your custom domain (optional)

That's it! You now have a professional portfolio website ready to showcase your work.
