/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    /*
      Next defaults optimized images to a 60-second cache, which means every
      repeat visit re-fetches them. Static files under /_next/static already get
      a one-year immutable cache; match that intent for the image optimizer.
      Thirty days, not a year: these paths are not content-hashed, so a replaced
      image has to be able to age out.
    */
    minimumCacheTTL: 2592000,
  },
};

export default nextConfig;
