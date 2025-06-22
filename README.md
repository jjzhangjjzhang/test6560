# Airbnb Guest Binder - React Version

A modern, responsive React application for Airbnb hosts to provide guests with essential information during their stay. Features a beautiful tabbed interface with sections for welcome notes, contact information, house rules, amenities, local recommendations, and departure instructions.

## Features

- 🏠 **Tabbed Interface**: Organized content in easy-to-navigate tabs
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern UI**: Beautiful gradient design with smooth animations
- ⚡ **Fast Loading**: Optimized React components
- 🌐 **GitHub Pages Ready**: Easy deployment to GitHub Pages

## Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/[your-username]/airbnb-guest-binder-react.git
   cd airbnb-guest-binder-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Customization

1. **Update content**: Edit the component files in `src/components/` to customize the information
2. **Add images**: Place your images in the `public/images/` folder
3. **Modify styling**: Update `src/App.css` to change colors, fonts, or layout

## Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json homepage**
   Replace `[your-github-username]` in the homepage field with your actual GitHub username

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Save

### Option 2: Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to GitHub Pages**
   - Create a new branch called `gh-pages`
   - Upload the contents of the `build` folder
   - Enable GitHub Pages in repository settings

## Project Structure

```
airbnb-guest-binder-react/
├── public/
│   ├── images/          # Add your images here
│   └── index.html
├── src/
│   ├── components/      # Tab components
│   │   ├── Welcome.js
│   │   ├── Contact.js
│   │   ├── HouseRules.js
│   │   ├── Amenities.js
│   │   ├── LocalFavorites.js
│   │   └── Departure.js
│   ├── App.js          # Main app component
│   ├── App.css         # Styles
│   └── index.js
├── package.json
└── README.md
```

## Customization Guide

### Adding Your Information

1. **Contact Information** (`src/components/Contact.js`)
   - Replace `[Your Name]` with your actual name
   - Replace `[Your Phone Number]` with your phone number

2. **House Rules** (`src/components/HouseRules.js`)
   - Update check-in/check-out times
   - Add your Wi-Fi credentials
   - Customize rules as needed

3. **Local Favorites** (`src/components/LocalFavorites.js`)
   - Add your favorite restaurants, cafes, and attractions
   - Include descriptions and recommendations

4. **Amenities** (`src/components/Amenities.js`)
   - Add instructions for appliances and systems
   - Include troubleshooting tips

### Styling Customization

- **Colors**: Update the CSS variables in `src/App.css`
- **Fonts**: Change the font-family properties
- **Layout**: Modify the container widths and spacing

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run deploy` - Deploys to GitHub Pages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help with customization, please open an issue on GitHub.

---

**Happy hosting! 🏠✨** # airbnb-guest-binder-react
