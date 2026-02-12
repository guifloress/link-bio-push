import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // COMENTADO PARA FUNCIONAR NO PREVIEW DO STUDIO. 
  // Descomente a linha abaixo antes de rodar 'npm run build' para a Hostinger.
  // basePath: '/bio',
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
