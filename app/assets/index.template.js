import meta from './meta';
const {
  url,
  title,
  siteType,
  description,
  favicon,
  themeColor,
  preview: { src, type, width, height }
} = meta;

export default `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="author" content="Rubens Pinheiro Gonçalves Cavalcante">
    <meta name="description" content="${description}">
    <meta name="theme-color" content="${themeColor}">
    <meta property="og:type" content="${siteType}">
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${src}">
    <meta property="og:image:type" content="${type}">
    <meta property="og:image:width" content="${width}">
    <meta property="og:image:height" content="${height}">
    <link rel="manifest" href="/manifest.json">
    <link rel="icon" type="image/x-icon" href="${favicon}">
    <title>Rubens Pinheiro</title>

    <script>
    window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
    ga('create', 'UA-99305630-1', 'auto');
    ga('send', 'pageview');
    </script>
    <script async src='https://www.google-analytics.com/analytics.js'></script>
</head>
<body>
<div id="app">

</div>
</body>
<noscript>
    Please enable JavaScript to access this site :)
</noscript>
</html>
`;
