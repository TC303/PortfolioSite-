# Portfolio Site

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Clean and modern UI with Tailwind CSS
- Smooth scrolling navigation
- Sections: Hero, About, Projects, Contact
- Ready to customize and deploy

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open your browser and visit `http://localhost:5173`

### Build for Production

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Customization

1. Update personal information in `src/components/Hero.jsx`
2. Add your photo and details in `src/components/About.jsx`
3. Add your projects in `src/components/Projects.jsx`
4. Update social links in `src/components/Footer.jsx`
5. Customize colors in `tailwind.config.js`

## Project Structure

```
portfolio-site/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- PostCSS

## License

MIT
