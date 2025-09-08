/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // allow dev origins (replace with the exact origin you use)
  // include protocol and port
  allowedDevOrigins: ['http://192.168.0.128:3000', 'http://localhost:3000'],
  images: {
    domains: [
      'images.unsplash.com',
      'randomuser.me',
      // add any external domains you use
    ],
  },
}