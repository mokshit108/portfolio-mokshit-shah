/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      fontLoaders: [
        { loader: '@next/font/google' }
      ],
    }
  };

  export default nextConfig;
