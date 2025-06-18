# Fashion Store

A modern e-commerce web application built with Next.js, TypeScript, and Tailwind CSS for a fashion retail store.

## Features

- 🛍️ **Product Catalog**: Browse through a wide range of fashion products including clothing and accessories
- 🔍 **Category Navigation**: Filter products by categories (Women's Fashion, Men's Fashion, Accessories)
- 🛒 **Shopping Cart**: Easy checkout process with a user-friendly interface
- 📱 **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean and modern design with smooth transitions and hover effects

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Font**: Inter (Google Fonts)
- **Development Tools**: ESLint, PostCSS, Autoprefixer

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd fashion-store
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
fashion-store/
├── public/
│   ├── images/
│   │   ├── categories/     # Category images
│   │   ├── hero/          # Hero section images
│   │   └── products/      # Product images
├── src/
│   ├── app/
│   │   ├── checkout/      # Checkout page
│   │   ├── products/      # Products listing page
│   │   └── page.tsx       # Home page
│   └── components/
│       └── Navigation.tsx  # Navigation component
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint for code linting

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

