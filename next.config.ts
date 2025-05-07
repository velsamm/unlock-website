import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
	output: 'standalone',
	poweredByHeader: false,
	logging: {
		fetches: {
			fullUrl: true,
		}
	},
};

export default nextConfig;
