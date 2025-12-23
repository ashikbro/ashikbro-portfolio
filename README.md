# Ashik's Portfolio Website

A professional, modern portfolio website showcasing projects, skills, and achievements with a beautiful, responsive design.

![Portfolio Screenshot](https://github.com/user-attachments/assets/958e7c82-c221-4f44-96e3-ff5c36c62564)

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Light/Dark Mode**: Toggle between light and dark themes with preferences saved
- **Fully Responsive**: Optimized for all devices - mobile, tablet, and desktop
- **Section Navigation**: 
  - Hero/Home - Introduction and quick links
  - About Me - Personal details and highlights
  - Projects - Showcase of 6 featured projects
  - Skills - Technical expertise with progress bars
  - Resume - Downloadable resume with experience and education
  - Contact - Contact form and information
- **Smooth Scrolling**: Seamless navigation between sections
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Fast Performance**: Built with Vite for lightning-fast load times

## 🛠️ Built With

- **React.js** - UI library
- **TailwindCSS v4** - Utility-first CSS framework
- **Vite** - Next-generation frontend tooling
- **React Icons** - Icon library

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ashikbro/ashikbro-portfolio.git
cd ashikbro-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173/ashikbro-portfolio/](http://localhost:5173/ashikbro-portfolio/) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment

This portfolio is configured for GitHub Pages deployment with GitHub Actions.

### Automatic Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

1. Ensure GitHub Pages is enabled in repository settings
2. Set source to "GitHub Actions"
3. Push to main branch - the workflow will handle the rest!

### Manual Deployment

You can also deploy to:
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **Other hosts**: Upload the contents of `dist` folder

## 🎨 Customization

### Updating Content

- **Personal Info**: Edit `src/components/Hero.jsx`
- **About Section**: Edit `src/components/About.jsx`
- **Projects**: Update project array in `src/components/Projects.jsx`
- **Skills**: Modify skills in `src/components/Skills.jsx`
- **Resume**: Update experience/education in `src/components/Resume.jsx`
- **Contact**: Change contact info in `src/components/Contact.jsx`

### Adding Your Resume

Replace `/public/resume.pdf` with your actual resume PDF file.

### Theme Colors

Edit the color palette in `src/index.css` in the `@theme` section.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

The theme preference is automatically saved to localStorage and persists across sessions.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Ashik**

- GitHub: [@ashikbro](https://github.com/ashikbro)
- Portfolio: [Live Site](https://ashikbro.github.io/ashikbro-portfolio/)

## 🙏 Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Built with [Vite](https://vitejs.dev/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
