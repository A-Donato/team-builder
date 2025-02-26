# Football Teambuilder App

## Overview

The Football Teambuilder App is designed to help users create and manage football teams. It allows users to store historical data for each player, including a "match-score" for every match played. This application is built using modern web technologies for optimal performance and developer experience.

## Features

- Create and manage football teams.
- Store and retrieve historical data for players.
- Record "match-scores" for each player per match.
- User authentication and data storage powered by Supabase.

## Technologies Used

- **Astro**: A modern static site generator for building fast websites with islands architecture
- **Svelte**: A reactive JavaScript framework for building user interfaces
- **shadcn/ui**: Beautifully designed, accessible components built with Tailwind CSS
- **Supabase**: An open-source backend as a service, providing database, authentication, and storage solutions
- **TypeScript**: For type-safe code and better developer experience
- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **Zod**: TypeScript-first schema validation
- **tRPC**: End-to-end typesafe API layer
- **Drizzle ORM**: TypeScript ORM for better database type safety and migrations
- **Vitest**: Unit testing framework optimized for Vite
- **Biome**: Rust-powered formatter and linter for ultra-fast code quality checks
- **Husky**: Git hooks for code quality checks
- **GitHub Actions**: CI/CD pipeline automation
- **Tanstack Query**: Powerful asynchronous state management
- **Lucide Icons**: Beautiful open-source icons
- **i18n**: Internationalization support via typesafe-i18n
- **Sentry**: Error tracking and performance monitoring

### Development Features

- ⚡️ Lightning fast HMR with Vite
- 🔤 TypeScript for enhanced code quality
- 📱 Mobile-first, responsive design
- 💅 Beautiful, accessible UI components
- 🔐 Type-safe API calls
- 📊 Real-time updates with Supabase subscriptions
- 🎯 End-to-end type safety
- ✅ Unit testing with Vitest
- 🚀 Ultra-fast formatting and linting with Biome
- 📦 Automatic deployment
- 🌍 Internationalization support
- 📈 Performance monitoring and error tracking
- 🔄 Robust state management
- 📝 API documentation with Swagger/OpenAPI

## Getting Started

### Prerequisites

- Node.js installed on your machine
- pnpm (Install globally with `npm install -g pnpm`)
- A Supabase account for backend services

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/football-teambuilder.git
   cd football-teambuilder
   ```

2. **Install Dependencies**:
   ```bash
   pnpm install
   ```

3. **Set Up Supabase**:
   - Create a new project in Supabase.
   - Set up your database schema to store player data and match scores.
   - Obtain your Supabase API keys and configure them in the project.

4. **Configure Environment Variables**:
   - Create a `.env` file in the root directory and add your Supabase credentials:
     ```plaintext
     SUPABASE_URL=your-supabase-url
     SUPABASE_ANON_KEY=your-supabase-anon-key
     ```

### Running the Application

- **Development Mode**:
  ```bash
  pnpm dev
  ```

- **Build for Production**:
  ```bash
  pnpm build
  ```

### Deployment

1. **Deploy to Vercel or Netlify**:
   - Connect your GitHub repository to Vercel or Netlify.
   - Set up environment variables in the deployment platform.
   - Deploy your application.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, please contact [your email].

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── api/           # API routes and endpoints
│   │   └── layout.ts      # Root layout component
│   │   └── features/     # Feature-specific components
│   │   └── config/
│   │   │   ├── constants.ts   # Application constants
│   │   │   └── site.ts       # Site-wide configuration
│   │   ├── db/
│   │   │   ├── schema/       # Database schema definitions
│   │   │   └── migrations/   # Database migrations
│   │   ├── hooks/            # Custom hooks
│   │   ├── lib/
│   │   │   ├── supabase.ts   # Supabase client configuration
│   │   │   ├── trpc.ts       # tRPC configuration
│   │   │   └── utils.ts      # Utility functions
│   │   ├── locales/          # i18n translations
│   │   ├── stores/           # Svelte stores
│   │   ├── styles/           # Global styles and Tailwind config
│   │   ├── types/            # TypeScript type definitions
│   │   └── utils/            # Utility functions and helpers
│   ├── public/               # Static assets
│   ├── tests/
│   │   ├── unit/            # Unit tests
│   │   └── utils/           # Test utilities
│   ├── .env.example         # Example environment variables
│   ├── astro.config.mjs     # Astro configuration
│   ├── biome.json           # Biome configuration
│   ├── drizzle.config.ts    # Drizzle ORM configuration
│   ├── package.json
│   ├── README.md
│   ├── svelte.config.js     # Svelte configuration
│   └── tailwind.config.ts   # Tailwind CSS configuration
│   └── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

### Key Directories Explained

- **/src/components/**
  - `ui/`: shadcn components
  - `common/`: Shared components across features
  - `features/`: Feature-specific components

- **/src/features/**
  - Each feature (teams, players, matches) has its own directory
  - Contains feature-specific components, stores, and utilities

- **/src/lib/**
  - Core functionality and configurations
  - Third-party service integrations

- **/src/stores/**
  - Global state management
  - Feature-specific stores

- **/src/types/**
  - TypeScript interfaces and types
  - API response types
  - Database models

### Feature Organization

Features are organized following a domain-driven structure:

```
src/features/
├── teams/
│   ├── components/
│   ├── stores/
│   ├── types.ts
│   └── utils.ts
├── players/
│   ├── components/
│   ├── stores/
│   ├── types.ts
│   └── utils.ts
└── matches/
    ├── components/
    ├── stores/
    ├── types.ts
    └── utils.ts
```

### Best Practices

1. **Feature Isolation**: Each feature is self-contained with its own components, stores, and utilities

2. **Type Safety**: Extensive use of TypeScript for type definitions and interfaces

3. **Component Organization**:
   - Small, reusable components in `common/`
   - Feature-specific components in their respective feature directories
   - UI components from shadcn in `ui/`

4. **State Management**:
   - Local state with Svelte stores
   - Global state with dedicated stores
   - Server state with Tanstack Query

5. **API Layer**:
   - Type-safe API routes with tRPC
   - Organized by feature
   - Consistent error handling
