import previewSrc from './meta/site-preview.png';
import favicon from './meta/favicon.ico';

export default `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta property="og:image" content="${previewSrc.src}">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="196">
    <meta property="og:image:height" content="196">
    <link rel="icon" type="image/x-icon" href="${favicon}">
    <title>Rubens Pinheiro</title>
    <script type="application/javascript">
      (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
          m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
      })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
      ga('create', 'UA-99305630-1', 'auto');
      ga('send', 'pageview');
    </script>
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
