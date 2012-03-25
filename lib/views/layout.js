
module.exports = function() {
  doctype(5);
  return html(function() {
    head(function() {
      meta({
        charset: 'utf-8'
      });
      title('Beautiful Node');
      link({
        rel: 'stylesheet',
        href: '/css/bootstrap.min.css'
      });
      link({
        rel: 'stylesheet',
        href: '/css/bootstrap-responsive.min.css'
      });
      return link({
        rel: 'stylesheet',
        href: '/css/app.css'
      });
    });
    return body({
      'data-spy': 'scroll',
      'data-target': '.subnav',
      'data-offset': '50'
    }, function() {
      div('.navbar.navbar-fixed-top', function() {
        return div('.navbar-inner', function() {
          return div('.container', function() {
            a('.brand', {
              href: '/'
            }, 'BeautifulNode');
            return div('.nav-collapse', function() {
              return ul('.nav', function() {
                li(this.home || '', function() {
                  return a({
                    href: '/'
                  }, 'Home');
                });
                li(this.submit || '', function() {
                  return a({
                    href: '/submit'
                  }, 'Submit');
                });
                return li(this.about || '', function() {
                  return a({
                    href: '/about'
                  }, 'About');
                });
              });
            });
          });
        });
      });
      div('.container', function() {
        return div('.row-fluid', function() {
          div('.span8', function() {
            return content();
          });
          return div('.span4', function() {
            return div('.hero-unit', function() {
              h2('Beautiful Node');
              return p('A NodeJs Community Blog');
            });
          });
        });
      });
      script({
        src: 'http://cdnjs.cloudflare.com/ajax/libs/jquery/1.7.1/jquery.min.js'
      });
      return script({
        src: '/js/bootstrap.min.js'
      });
    });
  });
};
