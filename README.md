# Portfolio Website

A modern, responsive portfolio website built with React featuring an About page and Gallery for showcasing work photos.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **About Page**: Personal information, skills, experience, and contact details
- **Gallery**: Filterable photo gallery with lightbox functionality
- **Smooth Animations**: Powered by Framer Motion
- **Mobile Navigation**: Hamburger menu for mobile devices

## Technologies Used

- React 19
- React Router for navigation
- Framer Motion for animations
- Lucide React for icons
- CSS Grid & Flexbox for layout
- GitHub Pages for hosting

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`.

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `portfolio-website` (or your preferred name)
3. Make it public
4. Don't initialize with README, .gitignore, or license (since we already have these)

### Step 2: Update the Homepage URL

Edit `package.json` and replace `yourusername` with your actual GitHub username:

```json
"homepage": "https://yourusername.github.io/portfolio-website"
```

### Step 3: Connect to GitHub

```bash
git remote add origin https://github.com/yourusername/portfolio-website.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

### Step 5: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select the `gh-pages` branch
6. Click "Save"

Your portfolio will be available at `https://yourusername.github.io/portfolio-website`

## Customization

### Update Content

- **About Page**: Edit `src/components/About.js` to update your personal information
- **Gallery**: Replace placeholder images in `src/components/Gallery.js` with your actual work
- **Contact Info**: Update email, phone, and social media links
- **Colors**: Modify the gradient colors in `src/App.css`

### Add Your Photos

1. Place your images in the `public` folder
2. Update the `imageUrl` properties in `src/components/Gallery.js`
3. Add your actual profile photo to replace the placeholder

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys to GitHub Pages
- `npm test` - Launches the test runner

## Project Structure

```
src/
├── components/
│   ├── Navbar.js      # Navigation component
│   ├── Home.js        # Home page
│   ├── About.js       # About page
│   └── Gallery.js     # Gallery page
├── App.js             # Main app component
├── App.css            # Styles
└── index.js           # Entry point
```

## License

This project is open source and available under the [MIT License](LICENSE).
