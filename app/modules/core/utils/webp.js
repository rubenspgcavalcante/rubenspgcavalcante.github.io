const WEBP_ = type => `WEBP_${type}`;
export const WEBP_LOSSY = WEBP_`LOSSY`;
export const WEBP_LOSSLESS = WEBP_`LOSSLESS`;
export const WEBP_ALPHA = WEBP_`ALPHA`;
export const WEBP_ANIMATION = WEBP_`ANIMATION`;

const testImages = {
  [WEBP_LOSSY]: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
  [WEBP_LOSSLESS]: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
  [WEBP_ALPHA]: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
  [WEBP_ANIMATION]: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
};

export const checkWebpFeature = (feature = WEBP_LOSSY) => {
  const img = new Image();

  return new Promise((res, rej) => {
    img.onload = () => res(img.width > 0 && img.height > 0);
    img.onerror = () => res(false);

    img.src = `data:image/webp;base64,${testImages[feature]}`;
  });
};