const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    assetPrefix: isProduction ? '/next-tailwind-ts-template/' : ''
};
