const fs = require('fs');
const pkg = require('../package.json');

(async () => {
  fs.copyFileSync('LICENSE', './dist/LICENSE');
  fs.copyFileSync('README.md', './dist/README.md');
  // pull off some things we don't want in the final package.json
  const { scripts, devDependencies, engines, ...rest } = pkg;
  fs.writeFileSync('./dist/package.json', JSON.stringify(rest, null, 2));
})();
