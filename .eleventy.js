const CleanCSS = require('clean-css');

module.exports = config => {

  // Minify CSS
  config.addFilter('cssmin', function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Set directories to pass through to the public folder
  config.addPassthroughCopy('./src/files/');
  config.addPassthroughCopy('./src/img/');

  // Shortcodes
  config.addPairedShortcode('figure', function(content) {
    return `<figure>${content}</figure>`
  });

  config.addPairedShortcode('figcaption', function(content) {
    return `<figcaption>${content}</figure>`
  });

    return {
      markdownTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      dir: {
        input: 'src',
        output: 'public'
      }
    };
  };
