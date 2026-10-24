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
      { source: "/day-offload", destination: "/mac-apps#day-offload", permanent: true },
      { source: "/peripheral-speed", destination: "/mac-apps#peripheral-speed", permanent: true },
    ];
  },
};

module.exports = nextConfig;
