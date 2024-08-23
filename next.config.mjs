/** @type {import('next').NextConfig} */
import cors from "cors";
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.html$/,
      exclude:
        /node_modules\/\@mapbox\/node-pre-gyp\/lib\/util\/nw-pre-gyp\/index\.html/,
      use: "html-loader",
    });
    return config;
  },
  // reactStrictMode: true,
  // swcMinify: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: `http://localhost:3000/api/:path*`,
  //     },
  //   ];
  // },
  // async middleware() {
  //   return [
  //     async (req, res) => {
  //       // Apply CORS to all /api/* routes
  //       cors({
  //         origin: "localhost:3000/:path*", // Replace with your client's origin
  //         methods: ["GET", "POST", "PUT", "DELETE"],
  //         allowedHeaders: ["Content-Type", "Authorization"],
  //       })(req, res);
  //     },
  //   ];
  // },
};

export default nextConfig;
