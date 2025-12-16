// This file is the entry point Vercel looks for.

// 1. Import the application instance from your main Express setup file
import { app } from "../src/app.js"; // Assuming your original index.js exports 'app'

// 2. IMPORTANT: Export the app instance as the default export
// Vercel handles starting the serverless function based on this export.
export default app;
