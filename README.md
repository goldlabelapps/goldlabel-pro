# Goldlabel Pro

> Always FREE. Always Open Source

A modern, feature-rich Next.js application framework with a powerful cartridge-based architecture for building scalable web applications.

[![Version](https://img.shields.io/badge/version-52.5.5-blue.svg)](https://github.com/goldlabelapps/goldlabel-pro)
[![License](https://img.shields.io/badge/license-open--source-green.svg)](https://github.com/goldlabelapps/goldlabel-pro)
[![Node](https://img.shields.io/badge/node-22.x-brightgreen.svg)](https://nodejs.org/)

## 🌟 Overview

Goldlabel Pro is a comprehensive Next.js-based application framework that combines modern web technologies with a modular cartridge system. Built with TypeScript, React 19, and Material UI, it provides a solid foundation for building content-rich, AI-powered web applications.

## ✨ Features

- **🎨 Cartridge Architecture**: Modular system with pluggable cartridges (DesignSystem, Lingua, Paywall, Shortcodes, Uberedux)
- **🌓 Theme Support**: Built-in light/dark mode with customizable themes
- **🔍 Full-Text Search**: Integrated search functionality with indexing
- **📱 Progressive Web App**: PWA support with offline capabilities
- **🗺️ Mapping**: Mapbox GL integration for geospatial features
- **🤖 AI Integration**: OpenAI integration for intelligent features
- **🔥 Firebase**: Authentication and data management with Firebase
- **📝 Markdown Support**: Rich markdown rendering with custom shortcodes
- **🎯 TypeScript**: Fully typed codebase for better developer experience
- **⚡ Performance**: Server-side rendering (SSR) and static site generation (SSG)
- **📊 State Management**: Redux Toolkit with Uberedux pattern
- **🎬 Media Support**: Audio, video, and PDF rendering capabilities
- **🔐 Authentication**: Firebase-based authentication system
- **💳 Payment Integration**: Paywall cartridge for monetization

## 🏗️ Tech Stack

- **Framework**: Next.js 15.6
- **Runtime**: Node.js 22.x
- **Language**: TypeScript 5.4
- **UI Library**: React 19, Material UI 7
- **State Management**: Redux Toolkit, React Redux
- **Styling**: Emotion, Styled Components
- **Backend**: Firebase, Firebase Admin
- **AI**: OpenAI 4.25
- **Maps**: Mapbox GL, React Map GL
- **Forms**: React Hook Form, Zod
- **Markdown**: Marked, Remark, Unified
- **PWA**: next-pwa
- **Package Manager**: Yarn 4.3

## 📋 Prerequisites

- Node.js 22.x
- Yarn 4.3.1 or later

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/goldlabelapps/goldlabel-pro.git

# Navigate to the project directory
cd goldlabel-pro

# Install dependencies
yarn install
```

### Development

```bash
# Start the development server
yarn dev
```

The application will be available at `http://localhost:3000`.

### Build

```bash
# Generate static files and search index
yarn generate

# Build for production
yarn build

# Start the production server
yarn start
```

## 📁 Project Structure

```
goldlabel-pro/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── search/            # Search functionality
│   ├── tag/               # Tag-based navigation
│   └── [[...slug]]/       # Dynamic catch-all routes
├── gl-core/               # Core framework
│   ├── actions/           # Redux actions
│   ├── cartridges/        # Pluggable modules
│   │   ├── DesignSystem/ # UI design system
│   │   ├── Lingua/       # Internationalization
│   │   ├── Paywall/      # Monetization
│   │   ├── Shortcodes/   # Markdown extensions
│   │   └── Uberedux/     # State management
│   ├── components/        # Reusable components
│   ├── hooks/             # Custom React hooks
│   └── lib/               # Utilities and helpers
├── public/                # Static assets
│   ├── markdown/          # Content files
│   ├── jpg/, png/, svg/  # Images
│   └── json/              # Data files
└── types/                 # TypeScript definitions
```

## 🎨 Cartridge System

The framework uses a modular cartridge architecture for extensibility:

### Available Cartridges

- **DesignSystem**: Component library and theming
- **Lingua**: Multi-language support
- **Paywall**: Payment and subscription management
- **Shortcodes**: Custom markdown directives
- **Uberedux**: Enhanced Redux patterns

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `yarn dev` | Start development server with auto-reload |
| `yarn build` | Build production bundle |
| `yarn start` | Start production server |
| `yarn generate` | Generate navigation, sitemap, and tags |
| `yarn indexSearch` | Build search index |
| `yarn lint` | Run ESLint |
| `yarn format` | Format code with Prettier |
| `yarn test` | Run linter and format checks |
| `yarn clean` | Clean build artifacts and dependencies |

## 🔧 Configuration

### Theme Customization

Edit `gl-core/config.json` to customize themes:

```json
{
  "themes": {
    "light": {
      "primary": "#126A71",
      "background": "#FFF"
    },
    "dark": {
      "primary": "#1db2d3",
      "background": "#001321"
    }
  }
}
```

### Firebase Setup

Configure Firebase credentials in your environment or Firebase configuration files.

### OpenAI Integration

Set up OpenAI API keys for AI-powered features.

## 📝 Content Management

Content is managed through markdown files in the `public/markdown/` directory. The framework automatically:

- Generates navigation from markdown frontmatter
- Creates a search index
- Builds tag-based navigation
- Generates sitemap

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Code is automatically formatted with Prettier
- ESLint enforces code quality
- Pre-commit hooks ensure code quality

## 📄 License

This project is open source and freely available.

## 🔗 Links

- **Website**: [https://goldlabel.pro](https://goldlabel.pro)
- **Repository**: [https://github.com/goldlabelapps/goldlabel-pro](https://github.com/goldlabelapps/goldlabel-pro)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI powered by [Material UI](https://mui.com/)
- State management with [Redux Toolkit](https://redux-toolkit.js.org/)
- Mapping with [Mapbox](https://www.mapbox.com/)

---

**Goldlabel Apps Ltd** - Building the future of open source web applications
