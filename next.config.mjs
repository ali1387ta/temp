/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fb3rfbdw-3000.euw.devtunnels.ms",
        // port: "80",
        pathname: "/**"
      },
    ],
  },
};

export default nextConfig;
