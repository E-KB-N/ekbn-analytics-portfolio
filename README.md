# EKBN Analytics — Data Portfolio & Web Engine

> **Production-ready data analytics and analytics engineering portfolio built with Next.js 16, TypeScript, and Tailwind CSS v4.**

---

## Executive Summary

**EKBN Analytics** is a high-performance web platform engineered to showcase business intelligence models, telemetry data pipelines, and decision-ready interactive visual dashboards. It bridges the gap between technical data engineering (SQL, Python, PostgreSQL, RLHF evaluation) and executive-level business presentation.

---

## Tech Stack & Architecture

- **Framework:** Next.js 16 (App Router with Turbopack)
- **Language:** TypeScript (Strict Type System)
- **Styling & UI:** Tailwind CSS v4, Lucide Icons, `next-themes` (Dark/Light mode support)
- **Components & Layout:** Component-driven design (shadcn/ui primitives, custom container & section primitives)
- **Analytics Infrastructure:** SQL, PostgreSQL, Python data pipelines, Power BI & Recharts visualization hooks

---

## 📂 Repository Structure

```text
ekbn-analytics-portfolio/
├── src/
│   ├── app/                      # Next.js App Router routes & pages
│   │   ├── projects/             # Projects index & dynamic detail routes ([slug])
│   │   ├── globals.css           # Tailwind v4 theme CSS & variables
│   │   ├── layout.tsx            # Root layout with Header, Footer & ThemeProvider
│   │   └── page.tsx              # Modern portfolio landing page shell
│   ├── components/               # Modular UI Components
│   │   ├── layout/               # Container, Section, Header, Footer primitives
│   │   ├── navigation/           # Responsive Desktop Nav & Mobile Sheet Drawer
│   │   ├── projects/             # Project cards & case study renderers
│   │   ├── charts/               # Reusable chart & data visualization wrappers
│   │   ├── theme-provider.tsx    # client theme context wrapper
│   │   └── theme-toggle.tsx      # Dark/Light mode theme button
│   ├── data/                     # Project metadata & case study data files
│   ├── lib/                      # Utility functions (`cn` helper, formatters)
│   └── types/                    # Core TypeScript interface declarations (`project.ts`)
└── public/                       # Static assets & public media

Getting Started
Prerequisites
Node.js: v18.x or higher

Package Manager: npm (v9+)

Installation & Setup
Clone the repository:

Bash
git clone [https://github.com/E-KB-N/ekbn-analytics-portfolio.git](https://github.com/E-KB-N/ekbn-analytics-portfolio.git)
cd ekbn-analytics-portfolio
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
Open http://localhost:3000 in your browser to view the application live.

Build for production:

Bash
npm run build

 Key Features
 Zero-FOUC Theme Engine: Seamless dark slate and light mode switching powered by next-themes and CSS variables.

 Responsive Mobile Drawer: Accessibility-first mobile sheet navigation built for high-touch targets.

 Metric-First Project System: Built-in TypeScript interfaces enforcing explicit key metrics and outcomes for every analytical case study.

 Turbopack Accelerated: Ultra-fast hot-reloading and compilation times using Next.js 16 native Turbopack engine.

Author
Edward Kojo Boateng Ntow (EKBN)

Data Analyst | Analytics Engineer | Business Analyst | AI Evaluator

GitHub: @E-KB-N

LinkedIn: [Edward Kojo Boateng Ntow](https://www.linkedin.com/in/edward-kojo-boateng-n-346111136)

© 2026 EKBN Analytics. All rights reserved.
