import { checkWebpFeature } from "./webp";

export const importWithTrace = (pngImporter, webpImporter) =>
  checkWebpFeature().then((compatible) => {
    return (compatible && webpImporter)
      ? pngImporter.then(png => webpImporter.then(webp => ({ src: webp, trace: png.trace })))
      : pngImporter
  });