class GoogleAnalytics {
  constructor() {
    this._installed = false;
    this._api = null;
  }

  install() {
    (function (win, doc, tagType, apiSrc, exports, tagEl, query) {
      win['GoogleAnalyticsObject'] = exports;
      win[exports] = win[exports] || function () {
          (win[exports].q = win[exports].q || []).push(arguments)
        }, win[exports].l = 1 * new Date();
      tagEl = doc.createElement(tagType),
        query = doc.getElementsByTagName(tagType)[0];
      tagEl.async = 1;
      tagEl.src = apiSrc;
      query.parentNode.insertBefore(tagEl, query)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-99305630-1', 'auto');
    ga('send', 'pageview');
    this._api = ga;
  }

  api(...args) {
    if (this._installed) {
      this._api(...args);
    }
  }

  pageView(route) {
    this.api('send', 'pageview', route)
  }
}

export default new GoogleAnalytics();