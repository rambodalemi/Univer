/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "**",  // Allows any domain/subdomain
        },
        {
          protocol: "https",
          hostname: "**",  // Allows any domain/subdomain
        },
      ],
      deviceSizes: [320, 420, 768, 1024, 1200],
      imageSizes: [16, 32, 48, 64, 96],
    },
    reactStrictMode: true,
  };
  
  export default nextConfig;
  