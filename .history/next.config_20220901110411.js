/*
 * @Author: wangkun
 * @Date: 2022-08-31 09:21:32
 * @LastEditTime: 2022-09-01 11:04:10
 * @LastEditors: wangkun
 * @Description: 
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack (config, { isServer }) {
    config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        child_process: false
    }
    return config
  },
  images: {
    domains: ['s-sh-4351-avatar.oss.dogecdn.com']
  }
}

module.exports = nextConfig
