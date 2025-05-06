/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Temporary measure
  },

  images: {
    domains: ["api.tmrrealestate.org"],
  },
};
module.exports = nextConfig;
