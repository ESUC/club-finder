/** Public-folder URL, including the Vite base (for example /club-finder/). */
export const publicAsset = (path) =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\//, '')}`;
