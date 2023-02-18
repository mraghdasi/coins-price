/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const nextConfig = {
  output: 'standalone',
  // basePath: '/armintest/blogs',

  // async redirects() {
  //   return [
  //     {
  //       source: '/username/blogs',
  //       destination: '/',
  //       permanent: true,
  //     },
  //   ];
  // },

  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['file.zarin.express', 'demo.zarin.express', 'localhost:3000', 'zarin.express', 'zarinexpress.com'],
  },
};

module.exports = nextConfig;
