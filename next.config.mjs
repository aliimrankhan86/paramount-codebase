/** @type {import('next').NextConfig} */
const nextConfig = {
  /*
    Dev and production share the build directory by default. Running `next dev`
    on one port while `next start` serves the other corrupts the production
    build — the symptom is a 500 on every CSS file and an unstyled page. Give
    dev its own directory so both can run at once, which is also how you compare
    a Lighthouse score against a real production build.
  */
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
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
