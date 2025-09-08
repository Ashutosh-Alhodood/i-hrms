/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",            // static export
  images: { unoptimized: true }, // disable Next image optimizer for static hosting
  trailingSlash: true          // makes pages end with / for static export (optional)
};

module.exports = nextConfig;