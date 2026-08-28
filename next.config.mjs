/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignores ESLint errors during production builds
  },
};

export default nextConfig;
