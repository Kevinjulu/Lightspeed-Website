# Light Speed - High-Speed Internet Provider Website

A modern, responsive website built with Next.js 14, React 18, and TypeScript for Light Speed Internet Provider in Kenya.

## 🚀 Features

- Modern, responsive design with TailwindCSS
- Smooth animations with Framer Motion
- Server-side rendering with Next.js 14 App Router
- Type-safe development with TypeScript
- Comprehensive UI components using Radix UI
- Form handling with React Hook Form and Zod validation
- Dark mode support with next-themes
- Interactive data visualizations with Recharts

## 📋 Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd poa-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add any necessary environment variables:
```env
NEXT_PUBLIC_API_URL=your_api_url_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```
├── app/                  # Next.js 14 app directory
│   ├── about/           # About page
│   ├── customer-portal/ # Customer portal
│   ├── products/       # Products page
│   ├── support/        # Support page
│   └── layout.tsx      # Root layout
├── components/          # Reusable components
├── hooks/              # Custom React hooks
├── lib/               # Utility functions
├── public/            # Static assets
└── styles/            # Global styles
```

## 🚀 Deployment

This website is optimized for deployment on Vercel. To deploy:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Add any necessary environment variables in the Vercel dashboard

### Build Command
```bash
next build
```

### Output Directory
```
.next
```

## 🧪 Development

- Run tests: `npm test`
- Lint code: `npm run lint`
- Format code: `npm run format`

## 📦 Dependencies

- Next.js 14.2.16
- React 18
- TypeScript
- TailwindCSS
- Radix UI Components
- Framer Motion
- React Hook Form
- Zod
- And more (see package.json)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Radix UI for the component library
- Vercel for hosting
- Next.js team for the amazing framework
