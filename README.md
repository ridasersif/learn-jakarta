# Learn Jakarta v0

A complete, beginner-friendly Next.js application to learn Jakarta EE (formerly Java EE). This project includes educational content, setup guides, tool recommendations, and a full CRUD example with backend code.

## Features

- 🎨 Modern, responsive UI with dark/light mode
- 📚 Comprehensive Jakarta EE learning resources
- 🛠️ Tool recommendations and setup guides
- 💻 Complete CRUD example with Java backend
- ✨ Smooth animations with Framer Motion
- 📱 Mobile-first design
- ♿ Accessible components

## Tech Stack

### Frontend
- **Next.js** (latest stable) - React framework
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **JavaScript** - No TypeScript

### Backend (Example)
- **Jakarta EE** - Enterprise Java
- **Jakarta Servlets** - Web components
- **JDBC** - Database connectivity
- **Apache Tomcat** - Servlet container
- **Maven** - Build tool

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this project

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## Project Structure

\`\`\`
learn-jakarta-v0/
├── app/
│   ├── layout.js          # Root layout with theme provider
│   ├── page.js            # Home page
│   ├── tools/
│   │   └── page.js        # Tools & downloads page
│   ├── setup/
│   │   └── page.js        # Setup guide page
│   ├── crud/
│   │   └── page.js        # CRUD tutorial page
│   └── contact/
│       └── page.js        # Contact page
├── components/
│   ├── navbar.js          # Navigation bar
│   ├── footer.js          # Footer component
│   ├── theme-provider.js  # Theme context provider
│   ├── theme-toggle.js    # Dark/light mode toggle
│   └── code-block.js      # Code display with copy button
├── backend-jakarta/       # Jakarta EE backend example
│   ├── src/               # Java source files
│   ├── pom.xml            # Maven configuration
│   ├── schema.sql         # Database schema
│   └── README.md          # Backend setup guide
└── public/                # Static assets
\`\`\`

## Pages

- **/** - Home: Introduction to Jakarta EE
- **/tools** - Recommended tools and download links
- **/setup** - Step-by-step project setup guide
- **/crud** - Complete CRUD application tutorial
- **/contact** - Contact form

## Backend Example

The `backend-jakarta/` folder contains a complete Jakarta EE CRUD application example. See `backend-jakarta/README.md` for setup and running instructions.

## Color Palette

- **Dark**: #111110
- **Primary**: #f31500 (Red)
- **Secondary**: #f98200 (Orange)

## Contributing

This is an educational project. Feel free to fork and customize for your learning needs.

## License

MIT License - Free to use for learning and educational purposes.

## Contact

- **Name**: [Your Name]
- **Email**: [your.email@example.com]
- **Phone**: [Your Phone]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]
- **Portfolio**: [Your Portfolio]
