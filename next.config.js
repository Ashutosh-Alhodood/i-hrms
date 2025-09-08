// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true, // optional, useful for static sites in subfolders
};

module.exports = nextConfig;