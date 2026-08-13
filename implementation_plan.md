# Generate React Website from Stitch AI Project

The goal is to convert the 14+ UI screens retrieved from the Google Stitch AI project (ID: 6253597192636975720) into a fully functional and responsive React website. I have successfully downloaded the raw HTML assets using your API key and we are ready to proceed with generating the React architecture.

## Proposed Changes

We will systematically build a React application out of the generated Stitch AI screens, taking the HTML/Tailwind outputs and converting them into proper React components.

### 1. Environment Setup

- Clean up the default Vite template files (App.jsx, App.css, index.css) and configure TailwindCSS (as Stitch relies heavily on Tailwind utility classes).
- Install `react-router-dom` for handling multi-page navigation across the website.
- Install `lucide-react` or similar if icon dependencies are observed in the raw HTML.

### 2. Component Extraction

- Parse the raw HTML for the common elements across pages, particularly the **Header/Navbar** and the **Footer**, and abstract them into reusable React components.
- Analyze the `stitch_data.json` for global styles or specific Google Fonts.

### 3. Page Generation (Routing)

I will convert the individual screens into React Page Components. Based on the data retrieved, the key pages are:
- `Home` (Optimized Hero & Reach)
- `About Us` (5 Members Per Row Team Carousels)
- `Contact Us`
- `News & Blog Hub` & `Article Detail`
- `Partner With Us` & `Become a Volunteer` / `Become a Child Advocate`
- `Our Impact Stories` & `Strategic Plan` & `Annual Report`
- `Policies & Governance`
- `Resource Center` & `Member Profile`

*Note: Since there are many pages, I will start by implementing the core pages (`Home`, `About`, `Contact`, `News`) and build out the internal pages iteratively to ensure quality.*

### 4. Code Conversion & Refinement

For each page and component:
- Convert standard HTML attributes to JSX (`class` -> `className`, `for` -> `htmlFor`, self-closing tags, SVG formatting).
- Extract repeated UI patterns into local components (e.g., Cards, Buttons).
- Ensure image assets point to functional URLs or are replaced with local placeholder assets if the original URLs expire.

## User Review Required

> [!IMPORTANT]
> The Stitch AI design output uses Tailwind CSS. The plan is to set up a standard Tailwind configuration. If you have custom brand colors or configuration you'd like injected into the Tailwind config, please let me know.

> [!NOTE]
> Some pages like "Article Detail" and "Member Profile" might require dynamic routing (e.g., `/article/:id`). I will set up static versions of these pages for now to reflect the design, but let me know if you want me to mock up dynamic data fetching.

## Open Questions

- Should I implement all 14 screens right away, or would you prefer I start with the core pages (Home, About, Contact, News) so you can review the component structure first?
- Are there any specific interactive features (e.g., functional forms, carousels) that you want fully implemented with React state, or is purely static UI translation sufficient for this milestone?

## Verification Plan

### Automated Tests
- `npm run build` will be executed to ensure the JSX compiles perfectly and there are no linting or React syntax errors.

### Manual Verification
- Start the development server using `npm run dev`.
- Visually verify that the React implementation matches the Stitch AI HTML outputs and that routing correctly navigates between the created pages.
