Junkai Yang - Personal Resume Website

This is a personal resume website showcasing Junkai Yang's academic background and research achievements.

Features
✅ Responsive design, supporting both mobile and desktop devices
✅ Bilingual switching between Chinese and English
✅ Hash Router support for GitHub Pages deployment
✅ Compliant with WCAG accessibility standards
✅ Research achievements display with dropdown switching
✅ Personal profile page
Tech Stack
React 18.2.0
React Router DOM 6.20.0 (Hash Router)
CSS3
Installation and Running
Prerequisites
Node.js (version 14 or higher)
npm or yarn
Install Dependencies
npm install
Local Development
npm start

The application will start at http://localhost:3000.

Build Production Version
npm run build

The build files will be generated in the build directory.

Deploy to GitHub Pages
Step 1: Update package.json

Make sure the homepage field in package.json is set to your GitHub Pages URL:

"homepage": "https://yourusername.github.io/junkaiyang_web"

Replace yourusername with your GitHub username.

Step 2: Install gh-pages
npm install --save-dev gh-pages
Step 3: Add Deployment Scripts

Add the following to the scripts section of package.json:

"predeploy": "npm run build",
"deploy": "gh-pages -d build"
Step 4: Deploy
npm run deploy
Step 5: Enable GitHub Pages
Go to your GitHub repository
Click Settings
Find Pages in the left sidebar
Select the gh-pages branch from the Source dropdown menu
Click Save

Your website will be available at https://yourusername.github.io/junkaiyang_web.

Project Structure
junkaiyang_web/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Layout.js
│   │   └── Layout.css
│   ├── contexts/
│   │   └── LanguageContext.js
│   ├── pages/
│   │   ├── AboutMe.js
│   │   ├── AboutMe.css
│   │   ├── Research.js
│   │   └── Research.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── translations.js
├── package.json
└── README.md
Adding New Research Achievements

To add new research achievement information, edit the src/translations.js file and add the corresponding content in the research2 or research3 section.

Accessibility (WCAG)

This website follows the WCAG 2.1 standards, including:

Semantic HTML
Appropriate ARIA labels
Keyboard navigation support
Sufficient color contrast
Accessible form controls
License

MIT License





