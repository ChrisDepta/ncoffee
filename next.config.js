/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    reactStrictMode: true,
  };
// next.config.js
module.exports = {
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://localhost:3000/api/:path*`, // Zmień na rzeczywisty adres URL twojej aplikacji
      },
    ];
  },
};

  
  module.exports = nextConfig;