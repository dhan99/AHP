# A&H eCommerce Acquisition App

A React/Next.js application for Intact Insurance's Accident & Health product acquisition, built from a Figma design.

## Technologies Used

- **Frontend**: React, Next.js, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Authentication**: Auth0
- **Database**: Supabase (PostgreSQL)
- **Testing**: Jest and React Testing Library

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd ahp-ecomm
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Environment Setup
   
   Create a `.env.local` file in the root directory with your Auth0 and Supabase credentials:
   ```env
   # Auth0 Configuration
   NEXT_PUBLIC_AUTH0_DOMAIN=your-auth0-domain.auth0.com
   NEXT_PUBLIC_AUTH0_CLIENT_ID=your-auth0-client-id

   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

### Running the Application

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Running Tests

```bash
npm test
# or
yarn test
```

## Features

- Landing page showcasing trucking insurance products
- Authentication for different user types (brokers, motor carriers, drivers)
- Contact form for inquiries
- Self-service capabilities for insurance products
- Responsive design based on Figma mockups

## Project Structure

- `/app`: Next.js app router files
- `/public`: Static assets including images
- `/src`: Source code
  - `/components`: React components
    - `/layout`: Layout components (Navbar, Footer)
    - `/sections`: Page section components
    - `/ui`: Reusable UI components
  - `/lib`: Utility functions and libraries
  - `/store`: Zustand state management
  - `/types`: TypeScript type definitions

## Deployment

This application can be deployed to Vercel with minimal configuration:

```bash
npm run build
# or
yarn build
```

## License

[MIT](LICENSE)
