/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static-00.iconduck.com",
      },
    ],
  },
};

module.exports = nextConfig;
