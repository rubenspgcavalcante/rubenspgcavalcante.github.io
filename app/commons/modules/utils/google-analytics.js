class GoogleAnalytics {
  constructor() {
    this._installed = false;
    this._api = null;
  }

  install() {
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
    this._api = ga;
  }

  api(...args) {
    if (this._installed) {
      this._api(...args);
    }
  }

  pageView(route) {
    this.api('set', 'page', route);
    this.api('send', 'pageview')
  }
}

export default new GoogleAnalytics();