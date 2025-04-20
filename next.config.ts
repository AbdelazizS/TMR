/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Temporary measure
  },

  images: {
    domains: ["api.trms.digital"],
  },
};
module.exports = nextConfig;
