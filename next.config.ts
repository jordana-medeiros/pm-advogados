import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Assets in /public are pre-exported (WebP/PNG). Serve originals without re-encoding.
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/areas-de-atuacao",
        destination: "/#areas-de-atuacao",
        permanent: true,
      },
      {
        source: "/artigos",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/artigos/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
