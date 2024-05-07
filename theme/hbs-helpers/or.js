const hbs = require('hbs');

hbs.registerHelper('or', function(a, b, options) {
  return a || b ? options.fn(this) : options.inverse(this);
});
