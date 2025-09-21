export const getBaseUrl = () => {
  return import.meta.env.VITE_BASE_URL || '/cpdweb/';
};

export const getImageUrl = (path) => {
  const baseUrl = getBaseUrl();
  return path.startsWith('/') ? `${baseUrl}${path.slice(1)}` : `${baseUrl}${path}`;
};