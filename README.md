# Interactive Portfolio - Sebastien Lempens Replica

A modern, interactive portfolio website inspired by Sebastien Lempens' award-winning design. Features smooth animations, custom cursor effects, and an immersive user experience.

## Features

✨ **Interactive Elements**

- Custom animated cursor with hover effects
- Smooth scroll animations and parallax effects
- Loading screen with animated counter
- Scroll progress indicator
- Magnetic button effects

🎨 **Design Highlights**

- Modern, minimalist aesthetic
- Responsive design for all devices
- Smooth transitions and animations
- Beautiful gradient backgrounds
- Section reveal animations

📱 **Sections**

- Hero section with animated text
- About section with skills showcase
- Work/Projects gallery with hover effects
- Awards recognition section
- Contact form
- Mobile-friendly navigation

## Getting Started

### Option 1: Open Directly

Simply open `index.html` in your web browser.

### Option 2: Use Live Server

1. Install the Live Server extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Local Server

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

Then navigate to `http://localhost:8000`

## Structure

```tree
Interactive-Portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # JavaScript interactions
├── assets/             # Images and media
│   ├── profile.jpg     # Profile image
│   ├── project1.jpg    # Project screenshots
│   ├── project2.jpg
│   ├── project3.jpg
│   └── project4.jpg
└── README.md           # This file
```

## Customization

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #000000;
    --secondary-color: #ffffff;
    --accent-color: #ff6b6b;
}
```

### Update Content

- **Personal Info**: Edit text in `index.html`
- **Projects**: Modify the `.project` sections
- **Skills**: Update the skills list in the About section
- **Images**: Replace files in the `assets/` folder

### Add Your Images

Replace the placeholder SVG images in the `assets/` folder with your own:

- `profile.jpg` - Your profile photo (600x800px recommended)
- `project1.jpg` to `project4.jpg` - Project screenshots (1600x1000px recommended)

## Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ IE11 (limited support)

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Custom Properties)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)

## Performance

- Optimized animations using CSS transforms
- Intersection Observer API for efficient scroll animations
- Lazy loading for images
- Minimal dependencies (no frameworks)

## Credits

Inspired by the award-winning portfolio of Sebastien Lempens:

- Awwwards Site of the Day
- FWA of the Day
- CSS Design Awards
- Multiple international web design awards

## License

This is a learning project and replica. Feel free to use and modify for your own portfolio!

## Tips

1. **Best Experience**: View on desktop with sound enabled
2. **Custom Cursor**: Only visible on desktop/laptop devices
3. **Mobile**: Automatically switches to touch-friendly navigation
4. **Performance**: Animations are optimized for 60fps

---

## Built with ❤️ as a portfolio template
