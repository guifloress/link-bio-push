import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // Ativado para que os arquivos apontem para hephesto.com/bio
  basePath: '/bio',
  // assetPrefix também ajuda a garantir que CSS e JS sejam carregados da pasta correta
  assetPrefix: '/bio',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
