# Anglara Digital Solutions - Next.js Technical Task

Welcome to my submission for the Next.js Technical Task at **Anglara Digital Solutions**. This is a functional e-commerce setup built to the specification of the provided Figma UI.

## 🚀 Live Demo & Repository
- **Live Web URL:** [https://anglara-task-ten.vercel.app/](https://anglara-task-ten.vercel.app/)
- **GitHub Repository:** [https://github.com/moin3522/anglara_task](https://github.com/moin3522/anglara_task)

## 📌 Task Objective & Pages
- Created a modern e-commerce UI integrating the [Fake Store API](https://fakestoreapi.com/).
- **Homepage:** Pixel-perfect fetching and displaying of products based on the Figma design.
- **Cart Page:** Interactive page managing state with functional pricing logic.

## 🛠️ Tech Stack
As explicitly instructed, the application strictly uses:
- **Framework:** Next.js (App Router)
- **Language:** TypeScript 
- **Styling:** Tailwind CSS (No Bootstrap / No raw React setups)
- **State Management:** Redux Toolkit

## ✨ Bonus Points Achieved
- **Clean and readable code:** Follows standard modular App-Router structuring, highly scalable components, and clean architectural separation of concerns.
- **Responsive checked:** The UI seamlessly adapts to mobile, tablet, and desktop viewports gracefully.
- **Speed optimized:** Achieved using Native Fetch API caching (`next: { revalidate: 3600 }`), Next.js Server Components, and optimized Suspense boundaries with Skeleton loaders to prevent layout shifts.

## ⚙️ Getting Started (Local Setup)

To quickly start the development server on your system without any issues, run the following commands sequentially:

```bash
# 1. Navigate into the frontend directory
cd frontend

# 2. Copy the environment variables
cp .env.example .env

# 3. Install all dependencies
npm i

# 4. Start the local development server
npm run dev
```

The application will now be running smoothly at [http://localhost:3000](http://localhost:3000). Open this link in your preferred browser and enjoy exploring the storefront!