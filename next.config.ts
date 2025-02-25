/*import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // config options here 
};

export default nextConfig;*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensures Next.js generates static files
  distDir: 'out',   // Changes the output directory to `out`
};

module.exports = nextConfig;