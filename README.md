# FedEx Centre for Smart Sustainable Supply Chains

## Introduction

This is the main site for FedEx Centre for Smart Sustainable Supply Chains.

## Table of Contents

1. [Installation](#installation)
2. [Folder Structure](#folder-structure)
3. [Dependencies](#dependencies)
4. [Configuration](#configuration)
5. [Deployment](#deployment)
6. [Techstack Description](#techstack-description)

## Installation

To set up the WebPage on your local machine, follow these steps:

```bash
git clone https://github.com/PowerUPITrayac/TrayacSalesmanClient.git
cd center-for-logistics
yarn
yarn dev
```

After running these commands, open `http://localhost:5173/` in your browser to view the application.

## Folder Structure

```bash
.
├── README.md
├── dist
│   ├── Logo.svg
│   ├── assets
│   │   ├── index-CCqsLQ0Y.js
│   │   └── index-Cl056Vs0.css
│   ├── index.html
│   └── manifest.json
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── Logo.svg
│   └── manifest.json
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── AppPage.tsx
│   ├── assets
│   │   ├── react.svg
│   │   └── textData
│   │       ├── events.ts
│   │       ├── home.ts
│   │       └── people.ts
│   ├── components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── MobileFooter.tsx
│   │   ├── MobileHeader.tsx
│   │   └── peopleComponents
│   │       ├── LeftCard.tsx
│   │       └── RightCard.tsx
│   ├── main.tsx
│   ├── pages
│   │   ├── About.tsx
│   │   ├── Error.tsx
│   │   ├── Events.tsx
│   │   ├── Home.tsx
│   │   ├── Internships.tsx
│   │   ├── MobileAbout.tsx
│   │   ├── MobileError.tsx
│   │   ├── MobileEvents.tsx
│   │   ├── MobileHome.tsx
│   │   ├── MobileInternships.tsx
│   │   ├── MobilePeople.tsx
│   │   └── People.tsx
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── yarn-error.log
└── yarn.lock
```

**Notes**:

1. Pages with the `Mobile` prefix are for mobile view.
2. The `assets` folder contains the data for the pages.
3. The `components` folder contains the reusable components.
4. The `pages` folder contains the main pages of the application.
5. Inline CSS is used in all the pages and components.
6. To change any text data in the app, update the respective file in the `src/assets/textData` folder.
7. The `src/App.tsx` file contains the routing for the application.
8. Mobile components are made seperately to ensure responsiveness.

## Dependencies

The project relies on the following dependencies:

- `@mui/material`: ^5.15.3
- `react-router-dom`: "^6.22.3",
- `react`: ^18.2.0
- `vite`: "^5.2.0"

Ensure these are installed to properly run the application.

## Configuration

#### To add a new page to the application, follow these steps:

1. Create a new file in the `src/Pages` folder.
2. Add the new page route to the `router` in the `src/App.tsx` file.

#### To add new Event information and old events link, follow these steps:

1. Update the data in the `src/assets/textData/events.ts` file.

## Deployment

- To build the app for production, use the following command:

```bash
yarn run build
```

- This builds the app to the `dist` folder, bundling React in production mode and optimizing the build for performance.
- Then do the deployement in the web1 server.

## Techstack Description

Developed using React TypeScript and built with Vite App. The frontend library is Material UI.
