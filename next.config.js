/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/programme-content",
        destination: "/video-programme-content-japan",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
