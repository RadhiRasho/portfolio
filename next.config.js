/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "skillicons.dev",
			},
		],
		dangerouslyAllowSVG: true,
	},
};

module.exports = nextConfig;
